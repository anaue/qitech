const request = require('./request');

var post_transfer = function(data, callback, error){
    let pathURL = "/wire_transfer";
    let options = {
        "body": data
    };
    req = request('POST', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var post_approval = function(data, callback, error){
    let pathURL = "/wire_transfer_approval";
    let options = {
        "body": data
    };
    req = request('POST', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var list_pending = function(callback, error){
    let pathURL = "/pending_movement";
    let options = {};

    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var get_receipt = function(transaction_key, query, callback, error){
    let pathURL = "/transaction_receipt/ " + transaction_key;
    query = query || {};
    let options = {
        "query": query
    };
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

module.exports = {
    post_transfer: post_transfer,
    post_approval: post_approval,
    list_pending: list_pending,
    get_receipt: get_receipt
}