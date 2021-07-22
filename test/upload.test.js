"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const expect = require("chai").expect;
const nock = require("nock");

describe("POST Upload", () => {
    const mockedData = mockedReqRes.upload.post;
    const decoder = () => mockedData.status_201;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().upload.RESOURCES_PATH)
            .reply(201, {});
    });
    it("upload file", () => {
        let filePath = mockedData.request;
        let options = {
            bodyDecoder: decoder
        };
        return qitech().upload.post(filePath, null, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(response.data.document_key).to.equal(mockedData.status_201.document_key);
            expect(response.data.document_md5).to.equal(mockedData.status_201.document_md5);
        });
    });
});
