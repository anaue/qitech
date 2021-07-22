"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const expect = require("chai").expect;
const nock = require("nock");
const util = require("util");

describe("List MultiBank CNAB", () => {
    let personKey = "personKey";
    const mockedData = mockedReqRes.multibank.listCnab;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(util.format(qitech().multibank.MULTIBANK_CNAB_DISCHARGE_PATH, personKey))
            .reply(200, {});
    });
    it("List CNABs", () => {
        let options = {
            bodyDecoder: decoder
        };
        return qitech().multibank.listCnab(personKey, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(response.data.data).to.equal(mockedData.status_200.data);
            expect(response.data.pagination).to.equal(mockedData.status_200.pagination);
        });
    });
});
describe("POST Upload MultiBank CNAB", () => {
    const mockedData = mockedReqRes.multibank.uploadCnab;
    const decoder = () => mockedData.status_201;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().multibank.MULTIBANK_CNAB_PATH)
            .reply(201, {});
    });
    it("upload MultiBank CNAB", () => {
        let filePath = mockedData.request;
        let options = {
            bodyDecoder: decoder
        };
        return qitech().multibank.uploadCnab(filePath, null, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(typeof response.data.cnab_file).to.equal("object");
            expect(response.data.cnab_file.cnab_key).to.equal(mockedData.status_201.cnab_file.cnab_key);
            expect(response.data.cnab_file.company_code).to.equal(mockedData.status_201.cnab_file.company_code);
            expect(response.data.cnab_file.created_at).to.equal(mockedData.status_201.cnab_file.created_at);
            expect(response.data.cnab_file.remitter_key).to.equal(mockedData.status_201.cnab_file.remitter_key);
            expect(response.data.cnab_file.requester_profile_code).to.equal(mockedData.status_201.cnab_file.requester_profile_code);
            expect(response.data.cnab_file.type).to.equal(mockedData.status_201.cnab_file.type);
            expect(typeof response.data.file_info).to.equal("object");
            expect(response.data.file_info.beneficiary_code).to.equal(mockedData.status_201.file_info.beneficiary_code);
            expect(response.data.file_info.beneficiary_name).to.equal(mockedData.status_201.file_info.beneficiary_name);
            expect(typeof response.data.occurrence_list).to.equal("object");
        });
    });
});
describe("POST MultiBank Instruction", () => {
    const mockedData = mockedReqRes.multibank.postInstruction;
    const decoder = () => mockedData.status_201;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().multibank.MULTIBANK_INSTRUCTION_PATH)
            .reply(201, {});
    });
    it("creates PDF Bank Slip", () => {
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.request;
        return qitech().multibank.postInstruction(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(response.data.bank_slips).to.equal(mockedData.status_201.bank_slips);
            expect(response.data.file_info).to.equal(mockedData.status_201.file_info);
            expect(response.data.occurrence_stats).to.equal(mockedData.status_201.occurrence_stats);
            expect(response.data.semantic_errors).to.equal(mockedData.status_201.semantic_errors);
        });
    });
});
