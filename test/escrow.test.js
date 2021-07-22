"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const expect = require("chai").expect;
const nock = require("nock");

describe("POST Create Escrow Account", () => {
    const mockedData = mockedReqRes.escrow.post;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().account.RESOURCES_PATH)
            .reply(201, {});
    });
    it("creates Escrow Company Account", () => {
        const decoder = () => mockedData.company_status_201;
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.company_request;
        return qitech().account.post(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(response.data.data).not.to.equal(null);
            expect(response.data.event_datetime).to.equal(mockedData.company_status_201.event_datetime);
            expect(response.data.key).to.equal(mockedData.company_status_201.key);
            expect(response.data.status).to.equal(mockedData.company_status_201.status);
            expect(response.data.type).to.equal(mockedData.company_status_201.type);
        });
    });
    it("creates Escrow Personal Account", () => {
        const decoder = () => mockedData.personal_status_201;
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.personal_request;
        return qitech().account.post(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(response.data.data).not.to.equal(null);
            expect(response.data.event_datetime).to.equal(mockedData.personal_status_201.event_datetime);
            expect(response.data.key).to.equal(mockedData.personal_status_201.key);
            expect(response.data.status).to.equal(mockedData.personal_status_201.status);
            expect(response.data.type).to.equal(mockedData.personal_status_201.type);
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
            expect(response.data).not.to.equal(null);
            expect(response.data.data).not.to.equal(null);
            expect(response.data.event_datetime).to.equal(mockedData.company_status_201.event_datetime);
            expect(response.data.key).to.equal(mockedData.company_status_201.key);
            expect(response.data.status).to.equal(mockedData.company_status_201.status);
            expect(response.data.type).to.equal(mockedData.company_status_201.type);
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
            expect(response.data).not.to.equal(null);
            expect(response.data.data).not.to.equal(null);
            expect(response.data.event_datetime).to.equal(mockedData.personal_status_201.event_datetime);
            expect(response.data.key).to.equal(mockedData.personal_status_201.key);
            expect(response.data.status).to.equal(mockedData.personal_status_201.status);
            expect(response.data.type).to.equal(mockedData.personal_status_201.type);
        });
    });
});
