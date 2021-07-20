const jwt = require("jsonwebtoken");
const fs = require("fs"); 
var {Buffer} = require("buffer"); 
const axios = require('axios');
const md5 = require('md5');

const QITECH_PROD_ENDPOINT = "api-auth.qitech.app";
const QITECH_STAG_ENDPOINT = 'api-auth.sandbox.qitech.app';
const environment = process.env.QITECH_ENV ;
const endpoint = (environment == "production")? QITECH_PROD_ENDPOINT : QITECH_STAG_ENDPOINT;
const apiKey = process.env.QITECH_API_CLIENT_KEY || "QITECH_API_CLIENT_KEY";
let privateKey = null, publicKey = null;

if(process.env.QITECH_API_PRIVATE_KEY)
{
    privateKey = process.env.QITECH_API_PRIVATE_KEY;
    if (fs.existsSync(privateKey)) {
        privateKey = fs.readFileSync(privateKey);
    }
    // else QITECH_API_PRIVATE_KEY is the key itself
}
if(process.env.QITECH_API_QI_PUBLIC_KEY)
{
    publicKey = process.env.QITECH_API_QI_PUBLIC_KEY;
    if (fs.existsSync(publicKey)) {
        publicKey = fs.readFileSync(publicKey);
    }
    // else QITECH_API_QI_PUBLIC_KEY is the key itself
}

const getAuthorization = function (httpVerb, relativeURL, body, encoder) {
    var currentDate = new Date().toUTCString();
    var ContentMD5 = body != "" && body != null? md5(body) : "";
    var ContentType= body != "" && body != null? "application/json" : "";
    var StringToSign = httpVerb + "\n" + ContentMD5 + "\n" + ContentType + "\n" + currentDate + "\n" + relativeURL;
    var SignatureJSON = {
        "sub": apiKey,
        "signature": StringToSign
    };
    let signedToken = encoder(SignatureJSON);
    return "QIT" + " " + apiKey + ":" + signedToken;
};

const writeBinaryPostData = function (multipart, requestOptions) {
    var crlf = "\r\n",
        boundaryKey = Math.random().toString(16),
        boundary = `--${boundaryKey}`,
        delimeter = `${crlf}--${boundary}`,
        headers = [
            'Content-Disposition: form-data; name="file"; filename="'+ multipart['name'] +'"' + crlf
        ],
        closeDelimeter = `${delimeter}--`,
        multipartBody;

    multipartBody = Buffer.concat([
        Buffer.from(delimeter + crlf + headers.join('') + crlf),
        multipart['content'],
        Buffer.from(closeDelimeter)]
    );

    requestOptions.headers['Content-Type']= 'multipart/form-data; boundary=' + boundary;
    requestOptions.data = multipartBody;
};

const bodyEncoder = function(body)
{
    const jwtOptions = { 
        algorithm: 'ES512' 
    };
    return privateKey ? jwt.sign(body, privateKey, jwtOptions) : body;
};

const bodyDecoder = function(jsonBody)
{
    const jwtOptions = { 
        algorithm: 'ES512' 
    };
    let encoded_body = jsonBody.encoded_body;
    return jwt.verify(encoded_body, publicKey, jwtOptions);
};

var request = function (httpVerb, urlPath, options) {
    options = options || {};

    let encoder = options['bodyEncoder'] ? options['bodyEncoder'] : bodyEncoder,
    decoder = options['bodyDecoder'] ? options['bodyDecoder'] : bodyDecoder,
    actualBodyContent = null;

    let requestOptions = {
        baseURL: "https://"+endpoint,
        url: urlPath,
        method: httpVerb,
        headers: {}
    };
    if(options['multipart'])
    {
        // TODO: check API support for multi-file upload
        let multipartData = options['multipart'][0];
        actualBodyContent = multipartData['content'];
        writeBinaryPostData(multipartData, requestOptions);
    }
    if(options['query'])
    {
        requestOptions['params'] = options['query'];
    }
    if(options['body'])
    {
        actualBodyContent = encoder(options['body']);
        let body = {
            "encoded_body": actualBodyContent
        };
        requestOptions.data = JSON.stringify(body)
        requestOptions.headers["Content-Type"] = "application/json";
    }
    if(options['headers'])
    { 
        requestOptions.headers = Object.assign(requestOptions.headers, options.headers);
    }
    axios.interceptors.response.use(function (response) {
        if(response && response.headers['content-type']=="application/json")
        {
            response.data = decoder(response.data);
        }
        return response;
        }, function (error) {
            if(error && error.response && error.response.headers['content-type']=="application/json")
            {
                error.data = decoder(error.response.data);
            }
            return Promise.reject(error);
        }
    );
    if(actualBodyContent)
    {
        requestOptions.headers['Content-Length'] = actualBodyContent.length;
    }
    requestOptions.headers["API-CLIENT-KEY"] = apiKey;
    requestOptions.headers['Authorization'] = getAuthorization(httpVerb, urlPath, actualBodyContent, encoder);
    return axios.request(requestOptions);
};

module.exports = function (httpVerb, urlPath, options) {
    return request(httpVerb, urlPath, options);
};