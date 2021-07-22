"use strict";

class Escrow {
    constructor(request) {
        this.request = request;
        this.RESOURCES_PATH = "/escrow";
    }
    post(data, _options) {
        let options = _options || {};
        options = Object.assign(options, {
            "body": data
        });
        return this.request.request("POST", this.RESOURCES_PATH, options);
    }
}

module.exports = Escrow;
