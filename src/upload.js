"use strict";

const fs = require("fs");

class Upload {
    constructor(request) {
        this.request = request;
        this.RESOURCES_PATH = "/upload";
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
    post(filePath, _fileContent, _options) {
        let fileContent = _fileContent || fs.readFileSync(filePath);
        let options = _options || {};
        options = Object.assign(options, {
            "multipart": [
                {
                    "content": fileContent,
                    "name": this._getFilename(filePath)
                }
            ]
        });
        return this.request.request("POST", this.RESOURCES_PATH, options);
    }
}

module.exports = Upload;
