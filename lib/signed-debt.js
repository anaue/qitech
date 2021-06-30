const request = require('./request');

const resourcesURL = "/signed_debt";

var post_signed_debt = function(data, options){
    options = options || {};
    options = Object.assign(options,{
        "body": data
    });
    return request('POST', resourcesURL, options);
};

var get_signed_debt = function(debt_key, options){
    options = options || {};
    options = Object.assign(options,{
        "query": {
            'key': debt_key
        }
    });
    return request('GET', resourcesURL, options);
};

var list_signed_debt = function(query, options){
    query = query || {};
    options = options || {};
    options = Object.assign(options,{
        "query": query
    });
    return request('GET', resourcesURL, options);
};

module.exports = {
    RESOURCES_PATH: resourcesURL,
    post : post_signed_debt,
    get: get_signed_debt,
    list: list_signed_debt
};