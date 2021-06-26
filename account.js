const request = require('./request');

var post_account = function(data, callback, error){
    let pathURL = "/account";
    let options = {
        "body": data
    };
    req = request('POST', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

// ======================================================================
// ******* query params:
// account_type	Tipo da conta	"escrow"
// account_status	Estatus da conta	"opened"
// owner_name	Nome do dono da conta (aceita parciais)	"João Paulo"
// owner_document_number	Número do documento do dono da conta	"24643760001"
// page	Página atual que está sendo consultada	1
// page_size	Quantidade de resultados que cabem na página	500

var list_accounts = function(query, callback, error){
    let pathURL = "/account";
    query = query || {};
    let options = {
        "query": query
    };
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var post_escrow = function(data, callback, error){
    let pathURL = "/escrow";
    let options = {
        "body": data
    };
    req = request('POST', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

module.exports = {
    post_account: post_account,
    list_accounts: list_accounts,
    post_escrow: post_escrow
}