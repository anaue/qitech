const request = require('./request');
const fs = require("fs"); 

var get_filename =(filePath) =>{
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

var upload = (filePath, callback, error) => {
    let pathURL = "/upload";
    let fileContent = fs.readFileSync(filePath);
    
    let RelativeURL = pathURL;
    let options = {
        "multipart": [
            {
                "content":fileContent,
                "name" :  get_filename(filePath)
            }
        ],
    };
    req = request('POST', RelativeURL, options, callback);
    req.on('error', error);
    req.end();  
}

module.exports = function (filePath, callback, error) {
    upload(filePath, callback, error);
};

// ======================================================================
// UPLOAD
// ======================================================================
const upload = require('./upload');
var filePath = "../pld-module2.pdf";
var callback = (response,statusCode) => {
    console.log(statusCode, response);
};
var error = error => {
    console.error('error',error);
};
upload(filePath, callback, error);