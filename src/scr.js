"use strict";

const util = require("util");

class Scr {
    constructor(request) {
        this.request = request;
        this.RESOURCES_PATH = "/scr";
        this.RESOURCE_PATH = "/scr/%s";
        this.SCR_REDO_PATH = "/scr/redo";
    }
    list(_query, _options) {
        let query = _query || {};
        let options = _options || {};
        options = Object.assign(options, {
            "query": query
        });
        return this.request.request("GET", this.RESOURCES_PATH, options);
    }
    get(scrKey, _options) {
        let RESOURCES_PATH = util.format(this.RESOURCE_PATH, scrKey);
        let options = _options || {};
        return this.request.request("GET", RESOURCES_PATH, options);
    }
    post(data, _options) {
        let options = _options || {};
        options = Object.assign(options, {
            "body": data
        });
        return this.request.request("POST", this.RESOURCES_PATH, options);
    }
    postRedo(data, _options) {
        let options = _options || {};
        options = Object.assign(options, {
            "body": data
        });
        return this.request.request("POST", this.SCR_REDO_PATH, options);
    }
    delete(data, _options) {
        let options = _options || {};
        options = Object.assign(options, {
            "body": data
        });
        return this.request.request("DELETE", this.RESOURCES_PATH, options);
    }
}
module.exports = Scr;
