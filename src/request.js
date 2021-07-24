"use strict";

const jwt = require("jsonwebtoken");
const fs = require("fs");
var {Buffer} = require("buffer");
const axios = require("axios");
const md5 = require("md5");

const QITECH_PROD_ENDPOINT = "api-auth.qitech.app";
const QITECH_STAG_ENDPOINT = "api-auth.sandbox.qitech.app";
const QITECH_ENV_PROD = "production";

function bodyEncoder(body, privateKey) {
    if (!privateKey || privateKey === "privateKey") {
        return body;
    }
    const jwtOptions = {
        algorithm: "ES512"
    };
    return jwt.sign(body, privateKey, jwtOptions);
}
function bodyDecoder(jsonBody, publicKey) {
    if (jsonBody.encoded_body === undefined || publicKey === "publicKey") {
        return jsonBody;
    }
    const jwtOptions = {
        algorithm: "ES512"
    };
    let encodedBody = jsonBody.encoded_body;
    return jwt.verify(encodedBody, publicKey, jwtOptions);
}

class Request {
    constructor(_opts) {
        let opts = _opts || {};
        this.clientKey = opts.clientKey || process.env.QITECH_API_CLIENT_KEY || "clientKey";
        this.privateKey = opts.privateKey || process.env.QITECH_API_PRIVATE_KEY || "privateKey";
        this.publicKey = opts.publicKey || process.env.QITECH_API_QI_PUBLIC_KEY ||  "publicKey";
        this.environment = opts.environment || process.env.QITECH_ENV || "staging";
        this.endpoint = (this.environment === QITECH_ENV_PROD) ? QITECH_PROD_ENDPOINT : QITECH_STAG_ENDPOINT;
    }
    getAuthorization(httpVerb, relativeURL, body, encoder) {
        var currentDate = new Date().toUTCString();
        var ContentMD5 = body !== "" && body !== null ? md5(body) : "";
        var ContentType = body !== "" && body !== null ? "application/json" : "";
        var StringToSign = httpVerb + "\n" + ContentMD5 + "\n" + ContentType + "\n" + currentDate + "\n" + relativeURL;
        var SignatureJSON = {
            "sub": this.clientKey,
            "signature": StringToSign
        };
        let signedToken = encoder(SignatureJSON, this.privateKey);
        return "QIT" + " " + this.clientKey + ":" + signedToken;
    }
    writeBinaryPostData(multipart, requestOptions) {
        let crlf = "\r\n";
        let boundaryKey = Math.random().toString(16);
        let boundary = `--${boundaryKey}`;
        let delimeter = `${crlf}--${boundary}`;
        let headers = [
            `Content-Disposition: form-data; name="file"; filename="${multipart.name}"${crlf}`
        ];
        let closeDelimeter = `${delimeter}--`;
        let multipartBody;
        multipartBody = Buffer.concat([
            Buffer.from(delimeter + crlf + headers.join("") + crlf),
            multipart.content,
            Buffer.from(closeDelimeter)]
        );
        requestOptions.headers["Content-Type"] = "multipart/form-data; boundary=" + boundary;
        requestOptions.data = multipartBody;
    }
    setup() {
        if (this.privateKey) {
            if (fs.existsSync(this.privateKey)) {
                this.privateKey = fs.readFileSync(this.privateKey);
            }
            // else QITECH_API_PRIVATE_KEY is the key itself
        }
        if (this.publicKey) {
            if (fs.existsSync(this.publicKey)) {
                this.publicKey = fs.readFileSync(this.publicKey);
            }
            // else QITECH_API_QI_PUBLIC_KEY is the key itself
        }
    }
    request(httpVerb, urlPath, _options) {
        this.setup();
        let options = _options || {};
        var privateKey = this.privateKey;
        var publicKey = this.publicKey;
        let encoder = options.bodyEncoder ? options.bodyEncoder : bodyEncoder;
        let decoder = options.bodyDecoder ? options.bodyDecoder : bodyDecoder;
        let actualBodyContent = null;
        let requestOptions = {
            baseURL: "https://" + this.endpoint,
            url: urlPath,
            method: httpVerb,
            headers: {}
        };
        if (options.multipart) {
            // TODO: check API support for multi-file upload
            let multipartData = options.multipart[0];
            actualBodyContent = multipartData.content;
            this.writeBinaryPostData(multipartData, requestOptions);
        }
        if (options.query) {
            requestOptions.params = options.query;
        }
        if (options.body) {
            actualBodyContent = encoder(options.body, privateKey);
            let body = {
                "encoded_body": actualBodyContent
            };
            requestOptions.data = JSON.stringify(body);
            requestOptions.headers["Content-Type"] = "application/json";
        }
        if (options.headers) {
            requestOptions.headers = Object.assign(requestOptions.headers, options.headers);
        }
        axios.interceptors.response.use(function success(response) {
            if (response && response.headers["content-type"] === "application/json") {
                response.data = decoder(response.data, publicKey);
            }
            return response;
        }, function fail(error) {
            if (error && error.response && error.response.headers["content-type"] === "application/json") {
                error.data = decoder(error.response.data, publicKey);
            }
            return Promise.reject(error);
        });
        if (actualBodyContent) {
            requestOptions.headers["Content-Length"] = actualBodyContent.length;
        }
        requestOptions.headers["API-CLIENT-KEY"] = this.clientKey;
        requestOptions.headers.Authorization = this.getAuthorization(httpVerb, urlPath, actualBodyContent, encoder);
        return axios.request(requestOptions);
    }
}

module.exports = Request;
