"use strict";

const qitech = require("../qitech-wrapper");
const mockedReqRes = require("./request-response");
const expect = require("chai").expect;
const nock = require("nock");

describe("POST Debt Simulation", () => {
    const mockedData = mockedReqRes.debt_simulation.post;
    const decoder = () => mockedData.status_201;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().debt_simulation.RESOURCES_PATH)
            .reply(201, {});
    });
    it("creates Debt Simulation", () => {
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.request;
        return qitech().debt_simulation.post(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).not.to.equal(null);
            expect(response.decoded.event_datetime).to.equal(mockedData.status_201.event_datetime);
            expect(response.decoded.key).to.equal(mockedData.status_201.key);
            expect(response.decoded.status).to.equal(mockedData.status_201.status);
            expect(response.decoded.type).to.equal(mockedData.status_201.type);
        });
    });
});

describe("POST Batch Debt Simulation", () => {
    const mockedData = mockedReqRes.debt_simulation.postBatch;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
        nock("https://api-auth.sandbox.qitech.app")
            .post(qitech().debt_simulation.RESOURCES_PATH)
            .reply(200, {});
    });
    it("creates Multi Debt Simulations", () => {
        let options = {
            bodyDecoder: decoder
        };
        let data = mockedData.request;
        return qitech().debt_simulation.postBatch(data, options).then(response => {
            expect(typeof response).to.equal("object");
            expect(response.decoded).not.to.equal(null);
            expect(response.decoded.data).not.to.equal(null);
            expect(response.decoded[0].event_datetime).to.equal(mockedData.status_200[0].event_datetime);
            expect(response.decoded[0].key).to.equal(mockedData.status_200[0].key);
            expect(response.decoded[0].status).to.equal(mockedData.status_200[0].status);
            expect(response.decoded[0].type).to.equal(mockedData.status_200[0].type);
        });
    });
});
