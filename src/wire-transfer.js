"use strict";

const util = require("util");

class Transfer {
    constructor(request) {
        this.request = request;
        this.WIRE_TRANSFER_PATH = "/wire_transfer";
        this.WIRE_TRANSFER_APPROVAL_PATH = "/wire_transfer_approval";
        this.PENDING_MOVEMENT_PATH = "/pending_movement";
        this.TRANSACTION_RECEIPT_PATH = "/transaction_receipt/%s";
    }
    post(data, _options) {
        let pathURL = this.WIRE_TRANSFER_PATH;
        let options = _options || {};
        options = Object.assign(options, {
            "body": data
        });
        return this.request.request("POST", pathURL, options);
    }
    postApproval(data, _options) {
        let pathURL = this.WIRE_TRANSFER_APPROVAL_PATH;
        let options = _options || {};
        options = Object.assign(options, {
            "body": data
        });
        return this.request.request("POST", pathURL, options);
    }
    listPending(_options) {
        let pathURL = this.PENDING_MOVEMENT_PATH;
        let options = _options || {};
        return this.request.request("GET", pathURL, options);
    }
    getReceipt(transactionKey, _query, _options) {
        let pathURL = util.format(this.TRANSACTION_RECEIPT_PATH, transactionKey);
        let query = _query || {};
        let options = _options || {};
        options = Object.assign(options, {
            "query": query
        });
        return this.request.request("GET", pathURL, options);
    }
}

module.exports = Transfer;
