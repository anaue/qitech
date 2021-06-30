const qitech = require('../qitech-wrapper');
const mockedReqRes = require('./request-response');
const expect = require('chai').expect;
const nock = require('nock');

describe('POST Debt Simulation', function () {
  const mockedData = mockedReqRes.debt_simulation.post;
  const decoder = () => mockedData.status_201;
  beforeEach(() => {
    const scope = nock('https://api-auth.sandbox.qitech.app')
      .post(qitech.debt_simulation.RESOURCES_PATH)
      .reply(201, {});
  });
  it('creates Debt Simulation', () => {
    options = {
      bodyDecoder : decoder
    };
    let data = mockedData.request;
    return qitech.debt_simulation.post(data, options).then(response => {
      expect(typeof response).to.equal('object');
      expect(response.data).not.to.equal(null);
      expect(response.data.data).not.to.equal(null);
      expect(response.data.event_datetime).to.equal(mockedData.status_201.event_datetime);
      expect(response.data.key).to.equal(mockedData.status_201.key);
      expect(response.data.status).to.equal(mockedData.status_201.status);
      expect(response.data.type).to.equal(mockedData.status_201.type);
    });
  });

});

describe('POST Batch Debt Simulation', function () {
  const mockedData = mockedReqRes.debt_simulation.post_batch;
  const decoder = () => mockedData.status_200;
  beforeEach(() => {
    const scope = nock('https://api-auth.sandbox.qitech.app')
      .post(qitech.debt_simulation.RESOURCES_PATH)
      .reply(200, {});
  });
  it('creates Multi Debt Simulations', () => {
    options = {
      bodyDecoder : decoder
    };
    let data = mockedData.request;
    return qitech.debt_simulation.post(data, options).then(response => {
      expect(typeof response).to.equal('object');
      expect(response.data).not.to.equal(null);
      expect(response.data.data).not.to.equal(null);
      expect(response.data[0].event_datetime).to.equal(mockedData.status_200[0].event_datetime);
      expect(response.data[0].key).to.equal(mockedData.status_200[0].key);
      expect(response.data[0].status).to.equal(mockedData.status_200[0].status);
      expect(response.data[0].type).to.equal(mockedData.status_200[0].type);
    });
  });
});