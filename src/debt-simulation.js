const request = require('./request');

const resourcesURL = "/debt_simulation";

var post_debt_simulation = function(data, options){
    options = options || {};
    options = Object.assign(options,{
        "body": data
    });
    return request('POST', resourcesURL, options);
};

var post_batch_debt_simulation = function(data, options){
    options = options || {};
    options = Object.assign(options,{
        "body": data
    });
    return request('POST', resourcesURL, options);
};

module.exports = {
    RESOURCES_PATH: resourcesURL,
    post : post_debt_simulation,
    post_batch : post_batch_debt_simulation
};