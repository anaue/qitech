"use strict";

class DebtSimulation {
    constructor(request) {
        this.request = request;
        this.RESOURCES_PATH = "/debt_simulation";
    }
    post(data, _options) {
        let options = _options || {};
        options = Object.assign(options, {
            "body": data
        });
        return this.request.request("POST", this.RESOURCES_PATH, options);
    }
    postBatch(data, _options) {
        let options = _options || {};
        options = Object.assign(options, {
            "body": data
        });
        return this.request.request("POST", this.RESOURCES_PATH, options);
    }
}

module.exports = DebtSimulation;
