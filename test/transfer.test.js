const qitech = require('../qitech-wrapper');
const mockedReqRes = require('./request-response');
const expect = require('chai').expect;
const nock = require('nock');
const util = require('util');

describe('POST Ordinary Account Wire Transfers', function () {
  const mockedData = mockedReqRes.transfer.post;
  beforeEach(() => {
    const scope = nock('https://api-auth.sandbox.qitech.app')
      .post(qitech.transfer.WIRE_TRANSFER_PATH)
      .reply(200, {});
  });
  it('creates Ordinary Account Wire Transfer', () => {
    const decoder = () => mockedData.ordinary_account_status_200;
    let options = {
      bodyDecoder : decoder
    };
    let data = mockedData.request;

    return qitech.transfer.post(data, options).then(response => {
      expect(typeof response).to.equal('object');
      expect(response.data).not.to.equal(null);
      expect(response.data.data).not.to.equal(null);
      expect(response.data.webhook_type).to.equal(mockedData.ordinary_account_status_200.webhook_type);
      expect(response.data.key).to.equal(mockedData.ordinary_account_status_200.key);
      expect(response.data.status).to.equal(mockedData.ordinary_account_status_200.status);
      expect(response.data.event_datetime).to.equal(mockedData.ordinary_account_status_200.event_datetime);
    });
  });
  it('creates Escrow Account Wire Transfer', () => {
    const decoder = () => mockedData.escrow_account_status_200;
    let options = {
      bodyDecoder : decoder
    };
    let data = mockedData.request;
    return qitech.transfer.post(data, options).then(response => {
      expect(typeof response).to.equal('object');
      expect(response.data).not.to.equal(null);
      expect(response.data.data).not.to.equal(null);
      expect(response.data.webhook_type).to.equal(mockedData.escrow_account_status_200.webhook_type);
      expect(response.data.key).to.equal(mockedData.escrow_account_status_200.key);
      expect(response.data.status).to.equal(mockedData.escrow_account_status_200.status);
      expect(response.data.event_datetime).to.equal(mockedData.escrow_account_status_200.event_datetime);
    });
  });
});

describe('POST Wire Transfers Approval', function () {
    const mockedData = mockedReqRes.transfer.post_approval;
    const decoder = () => mockedData.status_200;
    beforeEach(() => {
      const scope = nock('https://api-auth.sandbox.qitech.app')
        .post(qitech.transfer.WIRE_TRANSFER_APPROVAL_PATH)
        .reply(200, {});
    });
    it('approves Wire Transfer', () => {
      let options = {
        bodyDecoder : decoder
      };
      let data = mockedData.request;
      return qitech.transfer.post_approval(data, options).then(response => {
        expect(typeof response).to.equal('object');
        expect(response.data).not.to.equal(null);
        expect(response.data.webhook_type).to.equal(mockedData.status_200.webhook_type);
        expect(response.data.key).to.equal(mockedData.status_200.key);
        expect(response.data.status).to.equal(mockedData.status_200.status);
        expect(response.data.event_datetime).to.equal(mockedData.status_200.event_datetime);
      });
    });
  });
  
  
describe('GET a Transaction Receipt', function () {
  const mockedData = mockedReqRes.transfer.get_receipt;
  const decoder = () => mockedData.status_200;
  beforeEach(() => {
    const scope = nock('https://api-auth.sandbox.qitech.app')
      .get(util.format(qitech.transfer.TRANSACTION_RECEIPT_PATH, mockedData.request))
      .query(mockedData.query)
      .reply(200,{});
  });

  it('gets a Transaction Receipt', () => {
    let options = {
      bodyDecoder : decoder
    };
    let transaction_key = mockedData.request;
    let query = mockedData.query;
    return qitech.transfer.get_receipt(transaction_key, query, options).then(response => {
      expect(typeof response).to.equal('object');
      expect(response.data).not.to.equal(null);
      expect(response.data.data).not.to.equal(null);
      expect(response.data.operation_key).to.equal(mockedData.status_200.operation_key);
      expect(response.data.status).to.equal(mockedData.status_200.status);
      expect(response.data.webhook_type).to.equal(mockedData.status_200.webhook_type);
    });
  });
});

describe('List Pending Movements', function () {
  const mockedData = mockedReqRes.transfer.list_pending;
  const decoder = () => mockedData.status_200;
  beforeEach(() => {
    const scope = nock('https://api-auth.sandbox.qitech.app')
      .get(qitech.transfer.PENDING_MOVEMENT_PATH)
      .reply(200, {});
  });
  it('lists Pending Movements', () => {
    options = {
      bodyDecoder : decoder
    };
    return qitech.transfer.list_pending(options).then(response => {
      expect(typeof response).to.equal('object');
      expect(response.data.data).not.to.equal(null);
      expect(typeof response.data.data.movement_request_list).to.equal('object');
      expect(response.data.status).to.equal(mockedData.status_200.status);
      expect(response.data.webhook_type).to.equal(mockedData.status_200.webhook_type);
    });
  });
});
