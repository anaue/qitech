const jwt = require("jsonwebtoken");
const fs = require("fs"); 
var {Buffer} = require("buffer"); 
const https = require('https');
const md5 = require('md5');
const qs = require('qs');

const QITECH_PROD_ENDPOINT = "api-auth.qitech.app";
const QITECH_STAG_ENDPOINT = 'api-auth.sandbox.qitech.app';
let apiKey = process.env.QITECH_API_CLIENT_KEY;
let privateKeyFile = process.env.QITECH_API_PRIVATE_KEY_PATH ;
let environment = process.env.QITECH_ENV ;
let privateKey = fs.readFileSync(privateKeyFile);
let endpoint = (environment == "production")? QITECH_PROD_ENDPOINT : QITECH_STAG_ENDPOINT;
let jwtOptions = { 
    algorithm: 'ES512' 
};

var getHeaders = function (HTTPVerb, RelativeURL, body, headers) {
    var currentDate = new Date().toUTCString();
    var ContentMD5 = body != "" && body != null? md5(body) : "";
    var ContentType= body != "" && body != null? "application/json" : "";
    var StringToSign = HTTPVerb + "\n" + ContentMD5 + "\n" + ContentType + "\n" + currentDate + "\n" + RelativeURL;
    var SignatureJSON = {
        "sub": apiKey,
        "signature": StringToSign
    };
    headers = headers || {};
    let signedToken = jwt.sign(SignatureJSON, privateKey, jwtOptions);
    let authorization = "QIT" + " " + apiKey + ":" + signedToken;

    return Object.assign({
        "API-CLIENT-KEY": apiKey,
        "Authorization" : authorization,
    }, headers); 
};

var writeBinaryPostData = function (req, multipart) {
    var crlf = "\r\n",
        boundaryKey = Math.random().toString(16),
        boundary = `--${boundaryKey}`,
        delimeter = `${crlf}--${boundary}`,
        headers = [
          'Content-Disposition: form-data; name="file"; filename="'+ multipart['name'] +'"' + crlf
        ],
        closeDelimeter = `${delimeter}--`,
        multipartBody;

    var fileContent = multipart['content'];

    multipartBody = Buffer.concat([
        Buffer.from(delimeter + crlf + headers.join('') + crlf),
        fileContent,
        Buffer.from(closeDelimeter)]
    );

    req.setHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
    req.setHeader('Content-Length', multipartBody.length);

    req.write(multipartBody);
}

var request = function (HTTPVerb, path, options, callback) {
    var req_path = path;
    options = options || {};

    let str_data = null, 
        multipart_data = null,
        content = null,
        headers = {};

    if(options['query'])
    {
        var str = qs.stringify(options['query']);
        req_path = req_path + "?"+ str;
    }

    if(options['body'])
    {
        let SignedBody = jwt.sign(options['body'], privateKey, jwtOptions);
        content = SignedBody;
        let body = {
            "encoded_body": SignedBody
        }
        str_data = JSON.stringify(body);
        headers['Content-Length'] = str_data.length;
        headers["Conten-Type"] = "application/json";
    }

    if(options['multipart'])
    {
        // TODO: check API multi-files support and update it in here
        multipart_data = options['multipart'][0];
        content = multipart_data['content']; 
        headers["Conten-Type"] = "multipart/form-data";
    }

    if(options['headers'])
    {
        headers = Object.assign(headers, options['headers']);
    }

    const req_options = {
        hostname: endpoint,
        path: req_path,
        method: HTTPVerb,
        headers: getHeaders(HTTPVerb, path, content, headers)
    };

    req =  https.request(req_options, res => {
        console.log(`statusCode: ${res.statusCode}`);
        console.log("Content-Type", res.headers['content-type']);

        let chunk = "";
        var responseContentType = null;
        res.on('data', d => {
            chunk = chunk + d;
            responseContentType = res.headers['content-type'];
        });

        res.on('end', ()=>{

            if(responseContentType == "application/json")
            {
                jsonBody = JSON.parse(chunk.toString());
                encoded_body = jsonBody.encoded_body;
                decoded = jwt.decode(encoded_body);
                callback(decoded, res.statusCode, res.headers);
            }
            else
            {
                callback(chunk.toString(), res.statusCode, res.headers);
            }
        });
    });

    if(multipart_data)
    {
        writeBinaryPostData(req, multipart_data);
    }

    if(str_data)
    {
        req.write(str_data);
    }
    return req;
};

module.exports = function (httpVerb, path, options, callback) {
    return request(httpVerb, path, options, callback);
};