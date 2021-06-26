var qitech = require('./index.js');
var assert = require('assert');

let apiKey = process.env.QITECH_API_CLIENT_KEY;
let pathURL = "/test";

describe('qitech', function () {

  it('should test a GET response from qitech api', function() {
    var RelativeURL = pathURL + "/" + apiKey;
    var expected = {
        "api_client_key": apiKey,
        "success": "Congrats!"
    };
    var callback = data => {
        assert.strictEqual(data,expected);
    };
    req = qitech.request("GET", RelativeURL, null, callback);
    req.on('error', callback);
    req.end();
  });

  it('should allow the hashing of the string `undefined`', function() {
    var RelativeURL = pathURL;
    var expected = {
        name: 'QI Tech',
        api_client_key: apiKey,
        iat: 1624564643,
        success: 'Congrats!'
    };
    var bodyRaw = {
        "name": "QI Tech",
        "api_client_key": apiKey,
    };
    let options = {
        "body": bodyRaw
    };
    var callback = data => {
        assert.strictEqual(data, expected);
    };
    req = qitech.request('POST', RelativeURL, options, callback);
    req.on('error', callback);
    req.end();
  });
});
