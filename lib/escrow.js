const request = require('./request');

let resourcesURL = "/escrow";

var post_escrow = function(data, options){
    options = options || {};
    options = Object.assign(options,{
        "body": data
    });
    return request('POST', resourcesURL, options);
};

module.exports = {
    RESOURCES_PATH: resourcesURL,
    post: post_escrow
}