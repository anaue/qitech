"use strict";

class BankSlipDuplicateBalance {
    constructor(request) {
        this.request = request;
        this.RESOURCES_PATH = "/bank_slip/duplicates_balance";
        this.RESOURCES_EXCEL_PATH = "/bank_slip/duplicates_balance_excel";
    }
    get(_query, _options) {
        let pathURL = this.RESOURCES_PATH;
        let query = _query || {};
        let options = _options || {};
        options = Object.assign(options, {
            "query": query
        });
        return this.request.request("GET", pathURL, options);
    }
    getExcel(_query, _options) {
        let pathURL = this.RESOURCES_EXCEL_PATH;
        let query = _query || {};
        let options = _options || {};
        options = Object.assign(options, {
            "query": query
        });
        return this.request.request("GET", pathURL, options);
    }
}
module.exports = BankSlipDuplicateBalance;
