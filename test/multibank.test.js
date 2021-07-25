"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const expect = require("chai").expect;
const nock = require("nock");
const util = require("util");
const fs = require("fs");

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
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).to.equal(mockedData.status_200.data);
            expect(response.decoded.pagination).to.equal(mockedData.status_200.pagination);
        });
    });
    it("should use default values", () => {
        return qitech({
            privateKey: mockedReqRes.request.privateKey,
            publicKey: mockedReqRes.request.publicKey
        }).multibank.listCnab(personKey).then(response => {
            expect(typeof response).to.equal("object");
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
    let filePath = mockedData.request;
    it("upload MultiBank CNAB", () => {
        let options = {
            bodyDecoder: decoder
        };
        return qitech().multibank.uploadCnab(filePath, null, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(typeof response.decoded.cnab_file).to.equal("object");
            expect(response.decoded.cnab_file.cnab_key).to.equal(mockedData.status_201.cnab_file.cnab_key);
            expect(response.decoded.cnab_file.company_code).to.equal(mockedData.status_201.cnab_file.company_code);
            expect(response.decoded.cnab_file.created_at).to.equal(mockedData.status_201.cnab_file.created_at);
            expect(response.decoded.cnab_file.remitter_key).to.equal(mockedData.status_201.cnab_file.remitter_key);
            expect(response.decoded.cnab_file.requester_profile_code).to.equal(mockedData.status_201.cnab_file.requester_profile_code);
            expect(response.decoded.cnab_file.type).to.equal(mockedData.status_201.cnab_file.type);
            expect(typeof response.decoded.file_info).to.equal("object");
            expect(response.decoded.file_info.beneficiary_code).to.equal(mockedData.status_201.file_info.beneficiary_code);
            expect(response.decoded.file_info.beneficiary_name).to.equal(mockedData.status_201.file_info.beneficiary_name);
            expect(typeof response.decoded.occurrence_list).to.equal("object");
        });
    });
    it("should use direct filename", () => {
        let filename = "pdfsample.pdf";
        let content = fs.readFileSync(filePath);
        return qitech({
            privateKey: mockedReqRes.request.privateKey,
            publicKey: mockedReqRes.request.publicKey
        }).multibank.uploadCnab(filename, content).then(response => {
            expect(typeof response).to.equal("object");
        });
    });
    it("should use default values", () => {
        return qitech({
            privateKey: mockedReqRes.request.privateKey,
            publicKey: mockedReqRes.request.publicKey
        }).multibank.uploadCnab(filePath).then(response => {
            expect(typeof response).to.equal("object");
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
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.bank_slips).to.equal(mockedData.status_201.bank_slips);
            expect(response.decoded.file_info).to.equal(mockedData.status_201.file_info);
            expect(response.decoded.occurrence_stats).to.equal(mockedData.status_201.occurrence_stats);
            expect(response.decoded.semantic_errors).to.equal(mockedData.status_201.semantic_errors);
        });
    });
    it("should use default values", () => {
        return qitech({
            privateKey: mockedReqRes.request.privateKey,
            publicKey: mockedReqRes.request.publicKey
        }).multibank.postInstruction().then(response => {
            expect(typeof response).to.equal("object");
        });
    });
});
