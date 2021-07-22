"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const expect = require("chai").expect;
const nock = require("nock");
const util = require("util");

describe("Bank Slip", () => {
    let bankSlipKey = "bankSlipKey";
    const mockedData = mockedReqRes.bank_slip.get;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(util.format(qitech().bank_slip.RESOURCE_PATH, bankSlipKey))
            .reply(200, {});
    });
    it("gets a Bank Slip", () => {
        let options = {
            bodyDecoder: decoder
        };
        return qitech().bank_slip.get(bankSlipKey, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(response.data.document_number).to.equal(mockedData.status_200.document_number);
            expect(response.data.automatic_bankruptcy_protest).to.equal(mockedData.status_200.automatic_bankruptcy_protest);
            expect(response.data.automatic_protest).to.equal(mockedData.status_200.automatic_protest);
            expect(response.data.automatic_write_off).to.equal(mockedData.status_200.automatic_write_off);
            expect(response.data.bank_slip_file).to.equal(mockedData.status_200.bank_slip_file);
            expect(response.data.requester_profile).to.equal(mockedData.status_200.requester_profile);
            expect(response.data.amount).to.equal(mockedData.status_200.amount);
        });
    });
});

describe("List Bank Slips", () => {
    let personKey = "personKey";
    const mockedData = mockedReqRes.bank_slip.list;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(util.format(qitech().bank_slip.RESOURCES_PATH, personKey))
            .reply(200, {});
    });
    it("lists Bank Slip", () => {
        let options = {
            bodyDecoder: decoder
        };
        let query = mockedData.request;
        return qitech().bank_slip.list(personKey, query, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(response.data.document_number).to.equal(mockedData.status_200.document_number);
            expect(response.data.automatic_bankruptcy_protest).to.equal(mockedData.status_200.automatic_bankruptcy_protest);
            expect(response.data.automatic_protest).to.equal(mockedData.status_200.automatic_protest);
            expect(response.data.automatic_write_off).to.equal(mockedData.status_200.automatic_write_off);
            expect(response.data.bank_slip_file).to.equal(mockedData.status_200.bank_slip_file);
            expect(response.data.requester_profile).to.equal(mockedData.status_200.requester_profile);
            expect(response.data.amount).to.equal(mockedData.status_200.amount);
        });
    });
});

describe("Bank Slips Report", () => {
    let requesterProfileCode = "requesterProfileCode";
    const mockedData = mockedReqRes.bank_slip.list;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(util.format(qitech().bank_slip.RESOURCES_REPORT_PATH, requesterProfileCode))
            .reply(200, {});
    });
    it("reports Bank Slip", () => {
        let options = {
            bodyDecoder: decoder
        };
        let query = mockedData.request;
        return qitech().bank_slip.report(requesterProfileCode, query, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(typeof response.data).to.equal("object");
            expect(response.data).not.to.equal(null);
        });
    });
});
