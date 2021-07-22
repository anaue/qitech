"use strict";

const util = require("util");
const fs = require("fs");

class Multibank {
    constructor(request) {
        this.request = request;
        this.MULTIBANK_INSTRUCTION_PATH = "/multibank_instruction";
        this.MULTIBANK_CNAB_PATH = "/multibank_cnab";
        this.MULTIBANK_CNAB_DISCHARGE_PATH = "/cnab_file/%s/requester_discharge";
    }
    postInstruction(data, _options) {
        let pathURL = this.MULTIBANK_INSTRUCTION_PATH;
        let options = _options || {};
        options = Object.assign(options, {
            "body": data
        });
        return this.request.request("POST", pathURL, options);
    }
    _getFilename(filePath) {
        let splitName = [];
        if (filePath.indexOf("/")) {
            splitName = filePath.split("/");
        } else if (filePath.indexOf("\\")) {
            splitName = filePath.split("\\");
        }
        return splitName[splitName.length - 1];
    }
    uploadCnab(filePath, _fileContent, _options) {
        let fileContent = _fileContent || fs.readFileSync(filePath);
        let pathURL = this.MULTIBANK_CNAB_PATH;
        let options = _options || {};
        options = Object.assign(options, {
            "multipart": [
                {
                    "content": fileContent,
                    "name": this._getFilename(filePath)
                }
            ]
        });
        return this.request.request("POST", pathURL, options);
    }
    listCnab(personKey, _options) {
        let pathURL = util.format(this.MULTIBANK_CNAB_DISCHARGE_PATH, personKey);
        let options = _options || {};
        options = Object.assign(options, {
            "query": {}
        });
        return this.request.request("GET", pathURL, options);
    }
}

module.exports = Multibank;
