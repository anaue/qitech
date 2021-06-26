const request = require('./request');
const fs = require("fs"); 

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

var post_upload = (filePath, callback, error) => {
    let pathURL = "/upload";
    let fileContent = fs.readFileSync(filePath);
    
    let RelativeURL = pathURL;
    let options = {
        "multipart": [
            {
                "content":fileContent,
                "name" :  _get_filename(filePath)
            }
        ],
    };
    req = request('POST', RelativeURL, options, callback);
    req.on('error', error);
    req.end();  
}

module.exports = post_upload;