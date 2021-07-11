const request = require('./request');
const util = require('util');

const resourceURL = "/bank_slip/%s";
const resourcesURL = "/bank_slip/person/%s";
const resourcesReportURL = "/bank_slip/little_french/%s";

var get_bank_slip = function(bank_slip_key, options){
    let pathURL = util.format(resourceURL, bank_slip_key);
    options = options || {};
    options = Object.assign(options,{
        "query": {}
    });
    return request('GET', pathURL, options);
};

var list_bank_slip = function(person_key, query, options){
    let pathURL = util.format(resourcesURL, person_key);
    query = query || {};
    options = options || {};
    options = Object.assign(options,{
        "query": query
    });
    return request('GET', pathURL, options);
};

var get_little_french = function(requester_profile_code, query, options){
    let pathURL =  util.format(resourcesReportURL,requester_profile_code);
    query = query || {};
    options = options || {};
    options = Object.assign(options,{
        "query": query
    });
    return request('GET', pathURL, options);
}

module.exports = {
    RESOURCE_PATH: resourceURL,
    RESOURCES_PATH: resourcesURL,
    RESOURCES_REPORT_PATH: resourcesReportURL,
    get: get_bank_slip,
    list: list_bank_slip,
    report: get_little_french
};