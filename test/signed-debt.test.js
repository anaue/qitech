"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const expect = require("chai").expect;
const nock = require("nock");

describe("POST Signed Debt", () => {
    const decoder = () => mockedReqRes.signed_debt.post.status_201;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().signed_debt.RESOURCES_PATH)
            .reply(201, {});
    });
    it("creates Signed Debt", () => {
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedReqRes.signed_debt.post.request;
        return qitech().signed_debt.post(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.contract).not.to.equal(null);
            expect(response.decoded.contract.negotiable_key).to.equal(mockedReqRes.signed_debt.post.status_201.contract.negotiable_key);
            expect(response.decoded.contract.non_negotiable_key).to.equal(mockedReqRes.signed_debt.post.status_201.contract.non_negotiable_key);
            expect(response.decoded.contract.contract_number).to.equal(mockedReqRes.signed_debt.post.status_201.contract.contract_number);
            expect(response.decoded.contract.signed).to.equal(mockedReqRes.signed_debt.post.status_201.contract.signed);
        });
    });
});

describe("GET Signed Debt", () => {
    const decoder = () => mockedReqRes.signed_debt.get.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(qitech().signed_debt.RESOURCES_PATH)
            .query(mockedReqRes.signed_debt.get.query)
            .reply(200, {});
    });
    it("gets a Signed Debt", () => {
        let options = {
            bodyDecoder: decoder
        };
        let debtKey = "debtKey";
        return qitech().signed_debt.get(debtKey, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).not.to.equal(null);
            expect(response.decoded.operation_key).to.equal(mockedReqRes.signed_debt.get.status_200.operation_key);
            expect(response.decoded.status).to.equal(mockedReqRes.signed_debt.get.status_200.status);
            expect(response.decoded.webhook_type).to.equal(mockedReqRes.signed_debt.get.status_200.webhook_type);
        });
    });
});

describe("List Signed Debt", () => {
    const decoder = () => mockedReqRes.signed_debt.list.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(qitech().signed_debt.RESOURCES_PATH)
            .reply(200, {});
    });
    it("lists Signed Debts", () => {
        let options = {
            bodyDecoder: decoder
        };
        let query = {};
        return qitech().signed_debt.list(query, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).not.to.equal(null);
            expect(response.decoded.pagination).not.to.equal(null);
            expect(response.decoded.data[0].contract_fee_amount).to.equal(mockedReqRes.signed_debt.list.status_200.data[0].contract_fee_amount);
            expect(response.decoded.data[0].operation_key).to.equal(mockedReqRes.signed_debt.list.status_200.data[0].operation_key);
            expect(response.decoded.data[0].status).to.equal(mockedReqRes.signed_debt.list.status_200.data[0].status);
        });
    });
});
