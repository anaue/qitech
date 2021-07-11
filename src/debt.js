const request = require('./request');

const resourcesURL = "/debt";

var post_debt = function(data, options){
    options = options || {};
    options = Object.assign(options,{
        "body": data
    });
    return request('POST', resourcesURL, options);
};

var get_debt = function(debt_key, options){
    options = options || {};
    options = Object.assign(options,{
        "query": {
            'key': debt_key
        }
    });
    return request('GET', resourcesURL, options);
};

var list_debts = function(query, options){
    query = query || {};
    options = options || {};
    options = Object.assign(options,{
        "query": query
    });
    return request('GET', resourcesURL, options);
};

module.exports = {
    RESOURCES_PATH: resourcesURL,
    post : post_debt,
    get: get_debt,
    list: list_debts
};