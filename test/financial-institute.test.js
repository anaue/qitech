"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const expect = require("chai").expect;
const nock = require("nock");

describe("List Financial Institutes", () => {
    const mockedData = mockedReqRes.financial_institute.list;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .get(qitech().financial_institute.RESOURCES_PATH)
            .reply(200, {});
    });
    it("lists Financial Institutes", () => {
        const decoder = () => mockedData.status_200;
        let options = {
            bodyDecoder: decoder
        };
        let query = {};
        return qitech().financial_institute.list(query, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(response.data.data).not.to.equal(null);
            expect(response.data.pagination).not.to.equal(null);
            expect(response.data["00000000"].compe_number).to.equal(mockedData.status_200["00000000"].compe_number);
            expect(response.data["00000000"].is_active).to.equal(mockedData.status_200["00000000"].is_active);
            expect(response.data["00000000"].is_compe_participant).to.equal(mockedData.status_200["00000000"].is_compe_participant);
            expect(response.data["00000000"].ispb_number).to.equal(mockedData.status_200["00000000"].ispb_number);
            expect(response.data["00000000"].name).to.equal(mockedData.status_200["00000000"].name);
            expect(response.data["00000000"].str_start_date).to.equal(mockedData.status_200["00000000"].str_start_date);
        });
    });
    it("lists Financial Institutes Pagining", () => {
        const decoder = () => mockedData.pagining_status_200;
        let options = {
            bodyDecoder: decoder
        };
        let query = {};
        return qitech().financial_institute.list(query, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.data).not.to.equal(null);
            expect(response.data.data).not.to.equal(null);
            expect(response.data.pagination).not.to.equal(null);
            expect(response.data.data[0].compe_number).to.equal(mockedData.pagining_status_200.data[0].compe_number);
            expect(response.data.data[0].is_active).to.equal(mockedData.pagining_status_200.data[0].is_active);
            expect(response.data.data[0].is_compe_participant).to.equal(mockedData.pagining_status_200.data[0].is_compe_participant);
            expect(response.data.data[0].ispb_number).to.equal(mockedData.pagining_status_200.data[0].ispb_number);
            expect(response.data.data[0].name).to.equal(mockedData.pagining_status_200.data[0].name);
            expect(response.data.data[0].str_start_date).to.equal(mockedData.pagining_status_200.data[0].str_start_date);
        });
    });
});
