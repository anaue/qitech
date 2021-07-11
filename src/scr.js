const request = require('./request');
const util = require('util');

const resourcesURL = "/scr";
const redoScrURL = "/scr/redo";
const resourceURL = "/scr/%s";

var list_scr = function(query, options){
    query = query || {};
    options = options || {};
    options = Object.assign(options,{
        "query": query
    });
    return request('GET', resourcesURL, options);
};

var get_scr = function(scr_key, options){
    let resourcesURL = util.format(resourceURL, scr_key);
    options = options || {};
    return request('GET', resourcesURL, options);
};

var post_scr = function(data, options){
    options = options || {};
    options = Object.assign(options,{
        "body": data
    });
    return request('POST', resourcesURL, options);
};

var post_redo_scr = function(data, options){
    let resourcesURL = redoScrURL;
    options = options || {};
    options = Object.assign(options,{
        "body": data
    });
    return request('POST', resourcesURL, options);
};

var delete_scr = function(data, options){
    options = options || {};
    options = Object.assign(options,{
        "body": data
    });
    return request('DELETE', resourcesURL, options);
};

module.exports = {
    RESOURCES_PATH: resourcesURL,
    RESOURCE_PATH: resourceURL,
    SCR_REDO_PATH: redoScrURL,
    post: post_scr,
    post_redo: post_redo_scr,
    list: list_scr,
    get: get_scr,
    delete: delete_scr,
};