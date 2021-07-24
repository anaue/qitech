"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const expect = require("chai").expect;
const nock = require("nock");

describe("POST Ordinary Debt", () => {
    const mockedData = mockedReqRes.debt.post;
    const decoder = () => mockedData.status_201;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().debt.RESOURCES_PATH)
            .reply(201, {});
    });
    it("creates Company Ordinary Debt", () => {
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.company_request;
        return qitech().debt.post(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.webhook_type).to.equal(mockedData.status_201.webhook_type);
            expect(response.decoded.key).to.equal(mockedData.status_201.key);
            expect(response.decoded.status).to.equal(mockedData.status_201.status);
            expect(response.decoded.event_datetime).to.equal(mockedData.status_201.event_datetime);
        });
    });
    it("creates Person Ordinary Debt", () => {
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.person_request;
        return qitech().debt.post(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.webhook_type).to.equal(mockedData.status_201.webhook_type);
            expect(response.decoded.key).to.equal(mockedData.status_201.key);
            expect(response.decoded.status).to.equal(mockedData.status_201.status);
            expect(response.decoded.event_datetime).to.equal(mockedData.status_201.event_datetime);
        });
    });
    it("creates Simplified Debt", () => {
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.simplied_request;
        return qitech().debt.post(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.webhook_type).to.equal(mockedData.status_201.webhook_type);
            expect(response.decoded.key).to.equal(mockedData.status_201.key);
            expect(response.decoded.status).to.equal(mockedData.status_201.status);
            expect(response.decoded.event_datetime).to.equal(mockedData.status_201.event_datetime);
        });
    });
});
describe("GET Debt", () => {
    const mockedData = mockedReqRes.debt.get;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(qitech().debt.RESOURCES_PATH)
            .query(mockedData.query)
            .reply(200, {});
    });
    it("gets a Debt", () => {
        let options = {
            bodyDecoder: decoder
        };
        let debtKey = "debtKey";
        return qitech().debt.get(debtKey, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).not.to.equal(null);
            expect(response.decoded.operation_key).to.equal(mockedData.status_200.operation_key);
            expect(response.decoded.status).to.equal(mockedData.status_200.status);
            expect(response.decoded.webhook_type).to.equal(mockedData.status_200.webhook_type);
        });
    });
});
describe("List Debt", () => {
    const mockedData = mockedReqRes.debt.list;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(qitech().debt.RESOURCES_PATH)
            .reply(200, {});
    });
    it("lists Debts", () => {
        let options = {
            bodyDecoder: decoder
        };
        let query = {};
        return qitech().debt.list(query, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).not.to.equal(null);
            expect(response.decoded.pagination).not.to.equal(null);
            expect(response.decoded.data[0].contract_fee_amount).to.equal(mockedData.status_200.data[0].contract_fee_amount);
            expect(response.decoded.data[0].operation_key).to.equal(mockedData.status_200.data[0].operation_key);
            expect(response.decoded.data[0].status).to.equal(mockedData.status_200.data[0].status);
        });
    });
});
