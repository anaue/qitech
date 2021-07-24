"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const expect = require("chai").expect;
const nock = require("nock");
const util = require("util");

describe("POST PDF Bank Slip", () => {
    let bankSlipKey = "bankSlipKey";
    const mockedData = mockedReqRes.bank_slip_pdf.post;
    const decoder = () => mockedData.status_201;

    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(util.format(qitech().bank_slip_pdf.RESOURCE_PATH, bankSlipKey))
            .reply(201, {});
    });
    it("creates PDF Bank Slip", () => {
        let options = {
            bodyDecoder: decoder
        };
        return qitech().bank_slip_pdf.post(bankSlipKey, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.webhook_type).to.equal(mockedData.status_201.webhook_type);
            expect(response.decoded.key).to.equal(mockedData.status_201.key);
            expect(response.decoded.status).to.equal(mockedData.status_201.status);
            expect(response.decoded.event_datetime).to.equal(mockedData.status_201.event_datetime);
        });
    });
});

describe("List PDF Bank Slip", () => {
    let bankSlipKey = "bankSlipKey";
    const mockedData = mockedReqRes.bank_slip_pdf.list;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(util.format(qitech().bank_slip_pdf.RESOURCE_PATH, bankSlipKey))
            .reply(200, {});
    });
    it("lists PDF Bank Slip", () => {
        let options = {
            bodyDecoder: decoder
        };
        return qitech().bank_slip_pdf.list(bankSlipKey, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).not.to.equal(null);
            expect(response.decoded.operation_key).to.equal(mockedData.status_200.operation_key);
            expect(response.decoded.status).to.equal(mockedData.status_200.status);
            expect(response.decoded.webhook_type).to.equal(mockedData.status_200.webhook_type);
        });
    });
});
