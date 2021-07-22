"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const expect = require("chai").expect;
const nock = require("nock");
const util = require("util");

describe("POST SCR", () => {
    const mockedData = mockedReqRes.scr.post;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().scr.RESOURCES_PATH)
            .reply(200, {});
    });
    it("creates Person SCR", () => {
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.personal_request;
        return qitech().scr.post(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(response.data.webhook_type).to.equal(mockedData.status_200.webhook_type);
            expect(response.data.key).to.equal(mockedData.status_200.key);
            expect(response.data.status).to.equal(mockedData.status_200.status);
            expect(response.data.event_datetime).to.equal(mockedData.status_200.event_datetime);
        });
    });
    it("creates Company SCR", () => {
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.company_request;
        return qitech().scr.post(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(response.data.webhook_type).to.equal(mockedData.status_200.webhook_type);
            expect(response.data.key).to.equal(mockedData.status_200.key);
            expect(response.data.status).to.equal(mockedData.status_200.status);
            expect(response.data.event_datetime).to.equal(mockedData.status_200.event_datetime);
        });
    });
});

describe("GET SCR", () => {
    const mockedData = mockedReqRes.scr.get;
    let scrKey = mockedData.request;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(util.format(qitech().scr.RESOURCE_PATH, scrKey))
            .reply(200, {});
    });
    it("gets a scr", () => {
        let options = {
            bodyDecoder: decoder
        };
        return qitech().scr.get(scrKey, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(typeof response.data.signers).to.equal("object");
            expect(response.data.consent_term).to.equal(mockedData.status_200.consent_term);
            expect(response.data.origin_key).to.equal(mockedData.status_200.origin_key);
            expect(response.data.scr_status).to.equal(mockedData.status_200.scr_status);
            expect(response.data.subject_document_number).to.equal(mockedData.status_200.subject_document_number);
            expect(response.data.subject_name).to.equal(mockedData.status_200.subject_name);
            expect(response.data.subject_person_type).to.equal(mockedData.status_200.subject_person_type);
        });
    });
});

describe("List SCRs", () => {
    const mockedData = mockedReqRes.scr.list;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(qitech().scr.RESOURCES_PATH)
            .query(mockedData.query)
            .reply(200, {});
    });
    it("lists SCRs", () => {
        let options = {
            bodyDecoder: decoder
        };
        let query = mockedData.query;
        return qitech().scr.list(query, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(response.data.data).not.to.equal(null);
            expect(response.data.pagination).not.to.equal(null);
            expect(response.data.data[0].origin_key).to.equal(mockedData.status_200.data[0].origin_key);
            expect(response.data.data[0].scr_status).to.equal(mockedData.status_200.data[0].scr_status);
        });
    });
});

describe("Delete SCR", () => {
    const mockedData = mockedReqRes.scr.delete;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .delete(qitech().scr.RESOURCES_PATH)
            .reply(200, {});
    });
    it("deletes a SCR", () => {
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.request;
        return qitech().scr.delete(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(typeof response.data.signers).to.equal("object");
            expect(response.data.consent_term).to.equal(mockedData.status_200.consent_term);
            expect(response.data.origin_key).to.equal(mockedData.status_200.origin_key);
            expect(response.data.scr_status).to.equal(mockedData.status_200.scr_status);
            expect(response.data.subject_document_number).to.equal(mockedData.status_200.subject_document_number);
            expect(response.data.subject_name).to.equal(mockedData.status_200.subject_name);
            expect(response.data.subject_person_type).to.equal(mockedData.status_200.subject_person_type);
        });
    });
});

describe("POST REDO SCR", () => {
    const mockedData = mockedReqRes.scr.postRedo;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().scr.SCR_REDO_PATH)
            .reply(200, {});
    });
    it("redo SCR", () => {
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.request;
        return qitech().scr.postRedo(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(response.data.webhook_type).to.equal(mockedData.status_200.webhook_type);
            expect(response.data.key).to.equal(mockedData.status_200.key);
            expect(response.data.status).to.equal(mockedData.status_200.status);
            expect(response.data.event_datetime).to.equal(mockedData.status_200.event_datetime);
        });
    });
});
