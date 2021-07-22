"use strict";

class Debt {
    constructor(request) {
        this.request = request;
        this.RESOURCES_PATH = "/debt";
    }
    post(data, _options) {
        let options = _options || {};
        options = Object.assign(options, {
            "body": data
        });
        return this.request.request("POST", this.RESOURCES_PATH, options);
    }
    get(debtKey, _options) {
        let options = _options || {};
        options = Object.assign(options, {
            "query": {
                "key": debtKey
            }
        });
        return this.request.request("GET", this.RESOURCES_PATH, options);
    }
    list(_query, _options) {
        let query = _query || {};
        let options = _options || {};
        options = Object.assign(options, {
            "query": query
        });
        return this.request.request("GET", this.RESOURCES_PATH, options);
    }
}

module.exports = Debt;
