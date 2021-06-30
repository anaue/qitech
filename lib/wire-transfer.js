const request = require('./request');
const util = require('util');

const WIRETRANSFERURL = "/wire_transfer";
const WIRETRANSFERAPPROVALURL = "/wire_transfer_approval";
const PENDINGMOVEMENTURL = "/pending_movement";
const TRANSACTIONRECEIPTURL = "/transaction_receipt/%s";

var post_transfer = function(data, options){
    let pathURL = WIRETRANSFERURL;
    options = options || {};
    options = Object.assign(options,{
        "body": data
    });
    return request('POST', pathURL, options);
};

var post_approval = function(data, options){
    let pathURL = WIRETRANSFERAPPROVALURL;
    options = options || {};
    options = Object.assign(options,{
        "body": data
    });
    return request('POST', pathURL, options);
};

var list_pending = function(options){
    let pathURL = PENDINGMOVEMENTURL;
    options = options || {};
    options = Object.assign(options,{});
    return request('GET', pathURL, options);
};

var get_receipt = function(transaction_key, query, options){
    let pathURL = util.format(TRANSACTIONRECEIPTURL, transaction_key);

    query = query || {};
    options = options || {};
    options = Object.assign(options,{
        "query": query
    });
    return request('GET', pathURL, options);
};

module.exports = {
    WIRE_TRANSFER_PATH: WIRETRANSFERURL,
    WIRE_TRANSFER_APPROVAL_PATH: WIRETRANSFERAPPROVALURL,
    PENDING_MOVEMENT_PATH: PENDINGMOVEMENTURL,
    TRANSACTION_RECEIPT_PATH: TRANSACTIONRECEIPTURL,
    post_transfer: post_transfer,
    post_approval: post_approval,
    list_pending: list_pending,
    get_receipt: get_receipt
}