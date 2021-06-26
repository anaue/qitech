const request = require('./request');

// ======================================================================
// query params:
// `ispb_number`	Número ISPB da instituição financeira	"00000000"
// `name`	Nome da instituição financeira	"Banco do Brasil S.A."
// `compe_number`	Número Compe da instituição financeira	"001"
// `min_str_start_date`	Data mínima de início da operação	"2019-12-31"
// `max_str_start_date`	Data máxima de início da operação	"2020-05-03"
// `page_number`	Página atual que está sendo consultada	1
// `page_size`	Quantidade de resultados por página	15

var list_financial_institute = function(query, callback, error){
    let pathURL = "/financial_institute";
    query = query || {};
    let options = {
        "query": query
    };
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

module.exports = list_financial_institute;