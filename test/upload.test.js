"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const expect = require("chai").expect;
const nock = require("nock");
const fs = require("fs");

describe("it should POST Upload", () => {
    const mockedData = mockedReqRes.upload.post;
    const decoder = () => mockedData.status_201;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().upload.RESOURCES_PATH)
            .reply(201, {});
    });
    let filePath = mockedData.request;
    it("upload file", () => {
        let options = {
            bodyDecoder: decoder
        };
        return qitech().upload.post(filePath, null, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.document_key).to.equal(mockedData.status_201.document_key);
            expect(response.decoded.document_md5).to.equal(mockedData.status_201.document_md5);
        });
    });
    it("should use direct filename", () => {
        let filename = "pdfsample.pdf";
        let content = fs.readFileSync(filePath);
        return qitech({
            privateKey: mockedReqRes.request.privateKey,
            publicKey: mockedReqRes.request.publicKey
        }).upload.post(filename, content).then(response => {
            expect(typeof response).to.equal("object");
        });
    });
    it("should use default values", () => {
        return qitech({
            privateKey: mockedReqRes.request.privateKey,
            publicKey: mockedReqRes.request.publicKey
        }).upload.post(filePath).then(response => {
            expect(typeof response).to.equal("object");
        });
    });
});
