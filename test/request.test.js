"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const Request = require("../src/request");
const jwt = require("jsonwebtoken");
const expect = require("chai").expect;
const nock = require("nock");

describe("Decode response with key", () => {
    const mockedData = mockedReqRes.request.upload;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().upload.RESOURCES_PATH)
            .reply(201, mockedData.status_201_encoded);
    });
    it("it should upload file with decoded body", () => {
        let filePath = mockedData.request;
        let options = {};
        return qitech({
            privateKey: mockedReqRes.request.privateKey,
            publicKey: mockedReqRes.request.publicKey
        }).upload.post(filePath, null, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.document_key).to.equal(mockedData.status_201.document_key);
            expect(response.decoded.document_md5).to.equal(mockedData.status_201.document_md5);
        });
    });
    it("it should upload file with decoded body and custom encoder", () => {
        const encoder = (body, privateKey) => {
            const jwtOptions = {
                algorithm: "ES512"
            };
            return jwt.sign(body, privateKey, jwtOptions);
        };

        let filePath = mockedData.request;
        let options = {
            bodyEncoder: encoder
        };
        return qitech({
            privateKey: mockedReqRes.request.privateKey,
            publicKey: mockedReqRes.request.publicKey
        }).upload.post(filePath, null, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.document_key).to.equal(mockedData.status_201.document_key);
            expect(response.decoded.document_md5).to.equal(mockedData.status_201.document_md5);
        });
    });
});
describe("Custom header response", () => {
    const mockedData = mockedReqRes.upload.post;
    const decoder = () => mockedData.status_201;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().upload.RESOURCES_PATH)
            .reply(201, {});
    });
    it("it should upload file with custom header", () => {
        let filePath = mockedData.request;
        let options = {
            bodyDecoder: decoder,
            headers: {
                "x-token": "x-token"
            }
        };
        return qitech().upload.post(filePath, null, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            var actual = false;
            for (let _header in response.request.headers) {
                if (_header === "x-token") {
                    actual = true;
                    break;
                }
            }
            expect(actual).to.equal(true);
        });
    });
});
describe("Text-plain response", () => {
    const mockedData = mockedReqRes.request.upload;
    var textPlainResponse = "uncoded response";
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().upload.RESOURCES_PATH)
            .reply(201, textPlainResponse);
    });
    it("it should upload file with un-coded body", () => {
        let filePath = mockedData.request;
        let options = {};
        return qitech().upload.post(filePath, null, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).to.equal(textPlainResponse);
        });
    });
});
describe("Error response", () => {
    const mockedData = mockedReqRes.request.upload;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().upload.RESOURCES_PATH)
            .reply(500, mockedData.status_500);
    });
    it("it should upload file with error", () => {
        let filePath = mockedData.request;
        let options = {};
        return qitech().upload.post(filePath, null, options).catch(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.message).to.equal(mockedData.status_500.message);
        });
    });
});
describe("Error text-plain response", () => {
    const mockedData = mockedReqRes.request.upload;
    var textPlainResponse = "error message";
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().upload.RESOURCES_PATH)
            .reply(500, textPlainResponse);
    });
    it("it should upload file with error", () => {
        let filePath = mockedData.request;
        let options = {};
        return qitech().upload.post(filePath, null, options).catch(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).to.equal(textPlainResponse);
        });
    });
});
describe("Production setup", () => {
    it("it should set Production Endpoint", () => {
        let _request = new Request({
            environment: "production"
        });
        expect(typeof _request).to.equal("object");
        expect(_request.environment).to.equal("production");
        expect(_request.endpoint).to.equal("api-auth.qitech.app");
    });
});
describe("Empty options", () => {
    it("it should use only default values", () => {
        let _request = new Request();
        expect(typeof _request).to.equal("object");
        expect(_request.environment).to.equal("staging");
        expect(_request.clientKey).to.equal("clientKey");
        expect(_request.privateKey).to.equal("privateKey");
        expect(_request.publicKey).to.equal("publicKey");
        expect(_request.endpoint).to.equal("api-auth.sandbox.qitech.app");
    });
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().upload.RESOURCES_PATH)
            .reply(201, {});
    });
    it("it should use only default values", () => {
        let _request = new Request();
        expect(typeof _request).to.equal("object");
        _request.request("POST", qitech().upload.RESOURCES_PATH);
    });
});

