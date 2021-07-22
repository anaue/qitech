"use strict";

class Account {
    constructor(request) {
        this.request = request;
        this.RESOURCES_PATH = "/account";
    }
    post(data, _options) {
        let options = _options || {};
        options = Object.assign(options, {
            "body": data
        });
        return this.request.request("POST", this.RESOURCES_PATH, options);
    }
    // ======================================================================
    // ******* query params:
    // account_type	Tipo da conta	"escrow"
    // account_status	Estatus da conta	"opened"
    // owner_name	Nome do dono da conta (aceita parciais)	"João Paulo"
    // owner_document_number	Número do documento do dono da conta	"24643760001"
    // page	Página atual que está sendo consultada	1
    // page_size	Quantidade de resultados que cabem na página	500
    list(_query, _options) {
        let query = _query || {};
        let options = _options || {};
        options = Object.assign(options, {
            "query": query
        });
        return this.request.request("GET", this.RESOURCES_PATH, options);
    }
}

module.exports = Account;
