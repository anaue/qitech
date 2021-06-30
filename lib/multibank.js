const request = require('./request');
const util = require('util');
const fs = require('fs');

const MULTIBANK_INSTRUCTION_PATH = "/multibank_instruction";
const MULTIBANK_CNAB_PATH = "/multibank_cnab";
const MULTIBANK_CNAB_DISCHARGE_PATH = "/cnab_file/%s/requester_discharge";

var post_multibank_instruction = function(data, options){
    let pathURL = MULTIBANK_INSTRUCTION_PATH;
    options = options || {};
    options = Object.assign(options,{
        "body": data
    });
    return request('POST', pathURL, options);
};

var _get_filename =(filePath) =>{
    let split_name = [];
    if(filePath.indexOf("/"))
    {
        split_name =filePath.split("/");
    }
    else if(filePath.indexOf("\\"))
    {
        split_name = filePath.split("\\");
    }
    return split_name[split_name.length-1];
};

var upload_multibank_cnab = function(filePath, fileContent, options){
    fileContent = fileContent || fs.readFileSync(filePath);
    
    let pathURL = MULTIBANK_CNAB_PATH;
    options = options || {};
    options = Object.assign(options,{
        "multipart": [
            {
                "content":fileContent,
                "name" :  _get_filename(filePath)
            }
        ],
    });
    return request('POST', pathURL, options);
};

var list_multibank_cnab = function(person_key, options){
    let pathURL = util.format(MULTIBANK_CNAB_DISCHARGE_PATH, person_key);

    options = options || {};
    options = Object.assign(options,{
        "query": {}
    });
    return request('GET', pathURL, options);
};

module.exports = {
    MULTIBANK_CNAB_DISCHARGE_PATH: MULTIBANK_CNAB_DISCHARGE_PATH,
    MULTIBANK_CNAB_PATH: MULTIBANK_CNAB_PATH,
    MULTIBANK_INSTRUCTION_PATH: MULTIBANK_INSTRUCTION_PATH,
    list_cnab: list_multibank_cnab,
    upload_cnab: upload_multibank_cnab,
    post_instruction: post_multibank_instruction
};