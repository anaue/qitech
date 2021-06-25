const request = require('./request');
let apiKey = process.env.QITECH_API_CLIENT_KEY;
let pathURL = "/test";

// ======================================================================
// POST TEST
// ======================================================================
// var RelativeURL = pathURL;
// var bodyRaw = {
//     "name": "QI Tech",
//     "api_client_key": apiKey,
// };
// let options = {
//     "body": bodyRaw
// };
// var callback = data => {
//     console.log(data);
// };
// req = request('POST', RelativeURL, options, callback);
// req.on('error', error => {
//     console.error(error);
// });
// req.end();
// ======================================================================
// GET TEST
// ======================================================================
// var RelativeURL = pathURL + "/" + apiKey;
// var callback = data => {
//     console.log(data);
// };
// req = request("GET",RelativeURL, null, callback);
// req.on('error', error => {
//     console.error(error);
// });
// req.end();
