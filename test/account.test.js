"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const expect = require("chai").expect;
const nock = require("nock");

describe("POST Create Ordinary Account", () => {
    const mockedData = mockedReqRes.account.post;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().account.RESOURCES_PATH)
            .reply(201, {});
    });
    it("creates Ordinary Company Account", () => {
        const decoder = () => mockedData.company_status_201;
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.company_request;
        return qitech().account.post(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).not.to.equal(null);
            expect(response.decoded.event_datetime).to.equal(mockedData.company_status_201.event_datetime);
            expect(response.decoded.key).to.equal(mockedData.company_status_201.key);
            expect(response.decoded.status).to.equal(mockedData.company_status_201.status);
            expect(response.decoded.type).to.equal(mockedData.company_status_201.type);
        });
    });
    it("creates Ordinary Personal Account", () => {
        const decoder = () => mockedData.personal_status_201;
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.personal_request;
        return qitech().account.post(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).not.to.equal(null);
            expect(response.decoded.event_datetime).to.equal(mockedData.personal_status_201.event_datetime);
            expect(response.decoded.key).to.equal(mockedData.personal_status_201.key);
            expect(response.decoded.status).to.equal(mockedData.personal_status_201.status);
            expect(response.decoded.type).to.equal(mockedData.personal_status_201.type);
        });
    });
    it("creates Simplified Company Account", () => {
        const decoder = () => mockedData.company_status_201;
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.simplied_company_request;
        return qitech().account.post(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).not.to.equal(null);
            expect(response.decoded.event_datetime).to.equal(mockedData.company_status_201.event_datetime);
            expect(response.decoded.key).to.equal(mockedData.company_status_201.key);
            expect(response.decoded.status).to.equal(mockedData.company_status_201.status);
            expect(response.decoded.type).to.equal(mockedData.company_status_201.type);
        });
    });
    it("creates Simplified Personal Account", () => {
        const decoder = () => mockedData.personal_status_201;
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.simplied_personal_request;
        return qitech().account.post(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).not.to.equal(null);
            expect(response.decoded.event_datetime).to.equal(mockedData.personal_status_201.event_datetime);
            expect(response.decoded.key).to.equal(mockedData.personal_status_201.key);
            expect(response.decoded.status).to.equal(mockedData.personal_status_201.status);
            expect(response.decoded.type).to.equal(mockedData.personal_status_201.type);
        });
    });
    it("should use default values", () => {
        return qitech({
            privateKey: mockedReqRes.request.privateKey,
            publicKey: mockedReqRes.request.publicKey
        }).account.post().then(response => {
            expect(typeof response).to.equal("object");
        });
    });
});

describe("List Ordinary Accounts", () => {
    const mockedData = mockedReqRes.account.list;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(qitech().account.RESOURCES_PATH)
            .reply(200, {});
    });
    it("lists Accounts", () => {
        let options = {
            bodyDecoder: decoder
        };
        let query = {};
        return qitech().account.list(query, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).not.to.equal(null);
            expect(response.decoded.pagination).not.to.equal(null);
        });
    });
    it("should use default values", () => {
        return qitech({
            privateKey: mockedReqRes.request.privateKey,
            publicKey: mockedReqRes.request.publicKey
        }).account.list().then(response => {
            expect(typeof response).to.equal("object");
        });
    });
});
