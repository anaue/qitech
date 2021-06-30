const qitech = require('../qitech-wrapper');
const mockedReqRes = require('./request-response');
const expect = require('chai').expect;
const nock = require('nock');

describe('POST Signed Debt', function () {
    const decoder = () => mockedReqRes.signed_debt.post.status_201;
    beforeEach(() => {
    const scope = nock('https://api-auth.sandbox.qitech.app')
      .post(qitech.signed_debt.RESOURCES_PATH)
      .reply(201, {});
  });

  it('creates Signed Debt', () => {
    options = {
      bodyDecoder : decoder
    };
    let data = mockedReqRes.signed_debt.post.request;
    return qitech.signed_debt.post(data, options).then(response => {
      expect(typeof response).to.equal('object');
      expect(response.data).not.to.equal(null);
      expect(response.data.contract).not.to.equal(null);
      expect(response.data.contract.negotiable_key).to.equal(mockedReqRes.signed_debt.post.status_201.contract.negotiable_key);
      expect(response.data.contract.non_negotiable_key).to.equal(mockedReqRes.signed_debt.post.status_201.contract.non_negotiable_key);
      expect(response.data.contract.contract_number).to.equal(mockedReqRes.signed_debt.post.status_201.contract.contract_number);
      expect(response.data.contract.signed).to.equal(mockedReqRes.signed_debt.post.status_201.contract.signed);
    });
  });
});

describe('GET Signed Debt', function () {
    const decoder = () => mockedReqRes.signed_debt.get.status_200;
    beforeEach(() => {
    const scope = nock('https://api-auth.sandbox.qitech.app')
      .get(qitech.signed_debt.RESOURCES_PATH)
      .query(mockedReqRes.signed_debt.get.query)
      .reply(200,{});
  });

  it('gets a Signed Debt', () => {
    options = {
      bodyDecoder : decoder
    };
    let debt_key = "debt_key";
    return qitech.signed_debt.get(debt_key, options).then(response => {
      expect(typeof response).to.equal('object');
      expect(response.data).not.to.equal(null);
      expect(response.data.data).not.to.equal(null);
      expect(response.data.operation_key).to.equal(mockedReqRes.signed_debt.get.status_200.operation_key);
      expect(response.data.status).to.equal(mockedReqRes.signed_debt.get.status_200.status);
      expect(response.data.webhook_type).to.equal(mockedReqRes.signed_debt.get.status_200.webhook_type);
    });
  });
});

describe('List Signed Debt', function () {
    const decoder = () => mockedReqRes.signed_debt.list.status_200;
    beforeEach(() => {
    const scope = nock('https://api-auth.sandbox.qitech.app')
      .get(qitech.signed_debt.RESOURCES_PATH)
      .reply(200, {});
  });
  it('lists Signed Debts', () => {
    options = {
      bodyDecoder : decoder
    };
    let query = {};
    return qitech.signed_debt.list(query, options).then(response => {
      expect(typeof response).to.equal('object');
      expect(response.data).not.to.equal(null);
      expect(response.data.data).not.to.equal(null);
      expect(response.data.pagination).not.to.equal(null);
      expect(response.data.data[0].contract_fee_amount).to.equal(mockedReqRes.signed_debt.list.status_200.data[0].contract_fee_amount);
      expect(response.data.data[0].operation_key).to.equal(mockedReqRes.signed_debt.list.status_200.data[0].operation_key);
      expect(response.data.data[0].status).to.equal(mockedReqRes.signed_debt.list.status_200.data[0].status);
    });
  });
});
