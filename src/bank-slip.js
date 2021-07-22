"use strict";

const util = require("util");

class BankSlip {
    constructor(request) {
        this.request = request;
        this.RESOURCES_PATH = "/bank_slip/person/%s";
        this.RESOURCE_PATH = "/bank_slip/%s";
        this.RESOURCES_REPORT_PATH = "/bank_slip/little_french/%s";
    }
    get(bankSlipKey, _options) {
        let pathURL = util.format(this.RESOURCE_PATH, bankSlipKey);
        let options = _options || {};
        options = Object.assign(options, {
            "query": {}
        });
        return this.request.request("GET", pathURL, options);
    }
    list(personKey, _query, _options) {
        let pathURL = util.format(this.RESOURCES_PATH, personKey);
        let query = _query || {};
        let options = _options || {};
        options = Object.assign(options, {
            "query": query
        });
        return this.request.request("GET", pathURL, options);
    }
    report(requesterProfileCode, _query, _options) {
        let pathURL =  util.format(this.RESOURCES_REPORT_PATH, requesterProfileCode);
        let query = _query || {};
        let options = _options || {};
        options = Object.assign(options, {
            "query": query
        });
        return this.request.request("GET", pathURL, options);
    }
}

module.exports = BankSlip;
