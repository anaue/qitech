const request = require('./request');
const fs = require("fs"); 

const resourcesURL = "/upload";

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

var post_upload = (filePath, fileContent, options) => {
    fileContent = fileContent || fs.readFileSync(filePath);
    options = options || {};
    options = Object.assign(options,{
        "multipart": [
            {
                "content": fileContent,
                "name" :  _get_filename(filePath)
            }
        ],
    });
    return request('POST', resourcesURL, options);
}

module.exports = {
    RESOURCES_PATH: resourcesURL,
    post:post_upload
};