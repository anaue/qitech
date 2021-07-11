const request = require('./request');

const resourcesURL = "/account";

var post_account = function(data, options){
    options = options || {};
    options = Object.assign(options,{
        "body": data
    });
    return request('POST', resourcesURL, options);
};

// ======================================================================
// ******* query params:
// account_type	Tipo da conta	"escrow"
// account_status	Estatus da conta	"opened"
// owner_name	Nome do dono da conta (aceita parciais)	"João Paulo"
// owner_document_number	Número do documento do dono da conta	"24643760001"
// page	Página atual que está sendo consultada	1
// page_size	Quantidade de resultados que cabem na página	500

var list_accounts = function(query, options){
    query = query || {};
    options = options || {};
    options = Object.assign(options,{
        "query": query
    });
    return request('GET', resourcesURL, options);
};

module.exports = {
    RESOURCES_PATH: resourcesURL,
    post: post_account,
    list: list_accounts
}