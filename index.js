module.exports = {
    request: require('./request'),
    upload: require('./upload'),
    debt: require('./debt'),
    account: require('./account'),
    scr: require('./scr'),
    multibank: require('./multibank'),
    transfer: require('./wire-transfer'),
    financial_institute: require('./financial-institute')
};
exports.printMsg = function() {
    console.log("This is a message from the demo package");
}