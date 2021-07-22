"use strict";

class FinancialInstitute {
    constructor(request) {
        this.request = request;
        this.RESOURCES_PATH = "/financial_institute";
    }
    // ======================================================================
    // query params:
    // `ispb_number`	Número ISPB da instituição financeira	"00000000"
    // `name`	Nome da instituição financeira	"Banco do Brasil S.A."
    // `compe_number`	Número Compe da instituição financeira	"001"
    // `min_str_start_date`	Data mínima de início da operação	"2019-12-31"
    // `max_str_start_date`	Data máxima de início da operação	"2020-05-03"
    // `page_number`	Página atual que está sendo consultada	1
    // `page_size`	Quantidade de resultados por página	15
    list(_query, _options) {
        let query = _query || {};
        let options = _options || {};
        options = Object.assign(options, {
            "query": query
        });
        return this.request.request("GET", this.RESOURCES_PATH, options);
    }
}

module.exports = FinancialInstitute;
