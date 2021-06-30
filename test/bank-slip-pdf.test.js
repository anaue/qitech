const qitech = require('../qitech-wrapper');
const mockedReqRes = require('./request-response');
const expect = require('chai').expect;
const nock = require('nock');
const util = require('util');

describe('POST PDF Bank Slip', function () {
  let bank_slip_key = "bank_slip_key";

  const mockedData = mockedReqRes.bank_slip_pdf.post;
  const decoder = () => mockedData.status_201;
  beforeEach(() => {
    const scope = nock('https://api-auth.sandbox.qitech.app')
      .post(util.format(qitech.bank_slip_pdf.RESOURCE_PATH, bank_slip_key))
      .reply(201, {});
  });
  it('creates PDF Bank Slip', () => {
    let options = {
      bodyDecoder : decoder
    };
    return qitech.bank_slip_pdf.post(bank_slip_key, options).then(response => {
      expect(typeof response).to.equal('object');
      expect(response.data).not.to.equal(null);
      expect(response.data.webhook_type).to.equal(mockedData.status_201.webhook_type);
      expect(response.data.key).to.equal(mockedData.status_201.key);
      expect(response.data.status).to.equal(mockedData.status_201.status);
      expect(response.data.event_datetime).to.equal(mockedData.status_201.event_datetime);
    });
  });
});

describe('List PDF Bank Slip', function () {
  let bank_slip_key = "bank_slip_key";

  const mockedData = mockedReqRes.bank_slip_pdf.list;
  const decoder = () => mockedData.status_200;
  beforeEach(() => {
    const scope = nock('https://api-auth.sandbox.qitech.app')
      .get(util.format(qitech.bank_slip_pdf.RESOURCE_PATH, bank_slip_key))
      .reply(200,{});
  });

  it('lists PDF Bank Slip', () => {
    let options = {
      bodyDecoder : decoder
    };
    return qitech.bank_slip_pdf.list(bank_slip_key, options).then(response => {
      expect(typeof response).to.equal('object');
      expect(response.data).not.to.equal(null);
      expect(response.data.data).not.to.equal(null);
      expect(response.data.operation_key).to.equal(mockedData.status_200.operation_key);
      expect(response.data.status).to.equal(mockedData.status_200.status);
      expect(response.data.webhook_type).to.equal(mockedData.status_200.webhook_type);
    });
  });
});
