"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const expect = require("chai").expect;
const nock = require("nock");

describe("Daily Duplicate Balance", () => {
    const mockedData = mockedReqRes.bank_slip_duplicate_balance.get;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(qitech().bank_slip_duplicate_balance.RESOURCES_PATH)
            .reply(200, {});
    });
    it("get Daily Duplicate Balance", () => {
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.request;
        return qitech().bank_slip_duplicate_balance.get(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.paid).to.equal(mockedData.status_200.paid);
            expect(response.decoded.unpaid).to.equal(mockedData.status_200.unpaid);
            expect(response.decoded.expired).to.equal(mockedData.status_200.expired);
            expect(response.decoded.to_expire).to.equal(mockedData.status_200.to_expire);
            expect(response.decoded.expire_after_90_days).to.equal(mockedData.status_200.expire_after_90_days);
            expect(response.decoded.expire_between_31_and_60_days).to.equal(mockedData.status_200.expire_between_31_and_60_days);
            expect(response.decoded.expire_between_61_and_90_days).to.equal(mockedData.status_200.expire_between_61_and_90_days);
            expect(response.decoded.expire_in_30_days).to.equal(mockedData.status_200.expire_in_30_days);
            expect(response.decoded.expired_in_notary_office).to.equal(mockedData.status_200.expired_in_notary_office);
            expect(response.decoded.expired_not_in_notary_office).to.equal(mockedData.status_200.expired_not_in_notary_office);
            expect(response.decoded.paid_after_due_date).to.equal(mockedData.status_200.paid_after_due_date);
            expect(response.decoded.paid_before_due_date).to.equal(mockedData.status_200.paid_before_due_date);
            expect(response.decoded.paid_on_due_date).to.equal(mockedData.status_200.paid_on_due_date);
        });
    });
    it("should use default values", () => {
        return qitech({
            privateKey: mockedReqRes.request.privateKey,
            publicKey: mockedReqRes.request.publicKey
        }).bank_slip_duplicate_balance.get().then(response => {
            expect(typeof response).to.equal("object");
        });
    });
});

describe("Daily Excel Duplicate Balance", () => {
    const mockedData = mockedReqRes.bank_slip_duplicate_balance.getExcel;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(qitech().bank_slip_duplicate_balance.RESOURCES_EXCEL_PATH)
            .reply(200, {});
    });
    it("get Daily Excel Duplicate Balance", () => {
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.request;
        return qitech().bank_slip_duplicate_balance.getExcel(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(typeof response.decoded).to.equal("object");
        });
    });
    it("should use default values", () => {
        return qitech({
            privateKey: mockedReqRes.request.privateKey,
            publicKey: mockedReqRes.request.publicKey
        }).bank_slip_duplicate_balance.getExcel().then(response => {
            expect(typeof response).to.equal("object");
        });
    });
});
