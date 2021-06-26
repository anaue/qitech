const request = require('./request');

var post_debt = function(data, callback, error){
    let pathURL = "/debt";
    let options = {
        "body": data
    };
    req = request('POST', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var post_signed_debt = function(data, callback, error){
    let pathURL = "/signed_debt";
    let options = {
        "body": data
    };
    req = request('POST', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var get_debt = function(query, callback, error){
    let pathURL = "/debt";
    query = query || {};
    let options = {
        "query": query
    };
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var get_signed_debt = function(query, callback, error){
    let pathURL = "/signed_debt";
    query = query || {};
    let options = {
        "query": query
    };
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var post_debt_simulation = function(data, callback, error){
    let pathURL = "/debt_simulation";
    let options = {
        "body": data
    };
    req = request('POST', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

module.exports = {
    post : post_debt,
    post_signed : post_signed_debt,
    post_simulation : post_debt_simulation,
    get: get_debt,
    get_signed: get_signed_debt
};