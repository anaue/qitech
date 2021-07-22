"use strict";

const util = require("util");

class BankSlipPdf {
    constructor(request) {
        this.request = request;
        this.RESOURCE_PATH = "/bank_slip/2-way/%s";
    }
    post(bankSlipKey, _options) {
        let pathURL = util.format(this.RESOURCE_PATH, bankSlipKey);
        let options = _options || {};
        return this.request.request("POST", pathURL, options);
    }
    list(bankSlipKey, _options) {
        let pathURL = util.format(this.RESOURCE_PATH, bankSlipKey);
        let options = _options || {};
        return this.request.request("GET", pathURL, options);
    }
}

module.exports = BankSlipPdf;
