const request = require('./request');
const util = require('util');

const resourcesURL = "/bank_slip/duplicates_balance";
const resourcesExcelURL = "/bank_slip/duplicates_balance_excel";

var get_bank_slip_duplicates_balance = function(query, options){
    let pathURL = resourcesURL;
    query = query || {};
    options = options || {};
    options = Object.assign(options,{
        "query": query
    });
    return request('GET', pathURL, options);
}

var get_bank_slip_duplicates_balance_excel = function(query, options){
    let pathURL = resourcesExcelURL;
    query = query || {};
    options = options || {};
    options = Object.assign(options,{
        "query": query
    });
    return request('GET', pathURL, options);
}

module.exports = {
    RESOURCES_PATH: resourcesURL,
    RESOURCES_EXCEL_PATH: resourcesExcelURL,
    get: get_bank_slip_duplicates_balance,
    get_excel: get_bank_slip_duplicates_balance_excel
};