"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const expect = require("chai").expect;
const nock = require("nock");
const util = require("util");

describe("POST Ordinary Account Wire Transfers", () => {
    const mockedData = mockedReqRes.transfer.post;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().transfer.WIRE_TRANSFER_PATH)
            .reply(200, {});
    });
    it("creates Ordinary Account Wire Transfer", () => {
        const decoder = () => mockedData.ordinary_account_status_200;
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.request;
        return qitech().transfer.post(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).not.to.equal(null);
            expect(response.decoded.webhook_type).to.equal(mockedData.ordinary_account_status_200.webhook_type);
            expect(response.decoded.key).to.equal(mockedData.ordinary_account_status_200.key);
            expect(response.decoded.status).to.equal(mockedData.ordinary_account_status_200.status);
            expect(response.decoded.event_datetime).to.equal(mockedData.ordinary_account_status_200.event_datetime);
        });
    });
    it("creates Escrow Account Wire Transfer", () => {
        const decoder = () => mockedData.escrow_account_status_200;
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.request;
        return qitech().transfer.post(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).not.to.equal(null);
            expect(response.decoded.webhook_type).to.equal(mockedData.escrow_account_status_200.webhook_type);
            expect(response.decoded.key).to.equal(mockedData.escrow_account_status_200.key);
            expect(response.decoded.status).to.equal(mockedData.escrow_account_status_200.status);
            expect(response.decoded.event_datetime).to.equal(mockedData.escrow_account_status_200.event_datetime);
        });
    });
});

describe("POST Wire Transfers Approval", () => {
    const mockedData = mockedReqRes.transfer.postApproval;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().transfer.WIRE_TRANSFER_APPROVAL_PATH)
            .reply(200, {});
    });
    it("approves Wire Transfer", () => {
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.request;
        return qitech().transfer.postApproval(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.webhook_type).to.equal(mockedData.status_200.webhook_type);
            expect(response.decoded.key).to.equal(mockedData.status_200.key);
            expect(response.decoded.status).to.equal(mockedData.status_200.status);
            expect(response.decoded.event_datetime).to.equal(mockedData.status_200.event_datetime);
        });
    });
});


describe("GET a Transaction Receipt", () => {
    const mockedData = mockedReqRes.transfer.getReceipt;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(util.format(qitech().transfer.TRANSACTION_RECEIPT_PATH, mockedData.request))
            .query(mockedData.query)
            .reply(200, {});
    });
    it("gets a Transaction Receipt", () => {
        let options = {
            bodyDecoder: decoder
        };
        let transactionKey = mockedData.request;
        let query = mockedData.query;
        return qitech().transfer.getReceipt(transactionKey, query, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).not.to.equal(null);
            expect(response.decoded.operation_key).to.equal(mockedData.status_200.operation_key);
            expect(response.decoded.status).to.equal(mockedData.status_200.status);
            expect(response.decoded.webhook_type).to.equal(mockedData.status_200.webhook_type);
        });
    });
});

describe("List Pending Movements", () => {
    const mockedData = mockedReqRes.transfer.listPending;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(qitech().transfer.PENDING_MOVEMENT_PATH)
            .reply(200, {});
    });
    it("lists Pending Movements", () => {
        let options = {
            bodyDecoder: decoder
        };
        return qitech().transfer.listPending(options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded.data).not.to.equal(null);
            expect(typeof response.decoded.data.movement_request_list).to.equal("object");
            expect(response.decoded.status).to.equal(mockedData.status_200.status);
            expect(response.decoded.webhook_type).to.equal(mockedData.status_200.webhook_type);
        });
    });
});
