const request = require('./request');
const util = require('util');

const resourceURL = "/bank_slip/2-way/%s";

var post_2way_bank_slip = function(bank_slip_key, options){
    let pathURL = util.format(resourceURL, bank_slip_key);
    options = options || {};
    return request('POST', pathURL, options);
}

var get_2way_bank_slip = function(bank_slip_key, options){
    let pathURL = util.format(resourceURL, bank_slip_key);
    options = options || {};
    return request('GET', pathURL, options);
}

module.exports = {
    RESOURCE_PATH: resourceURL,
    post: post_2way_bank_slip,
    list: get_2way_bank_slip,
};