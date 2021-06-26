const request = require('./request');

var post_multibank_instruction = function(data, callback, error){
    let pathURL = "/multibank_instruction";
    let options = {
        "body": data
    };
    req = request('POST', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

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

var post_multibank_cnab = function(filePath, callback, error){
    let pathURL = "/multibank_cnab";
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
};

var get_multibank_cnab = function(person_key, callback, error){
    let pathURL = "/cnab_file/"+person_key+"/requester_discharge";
    let options = {
        "query": {}
    };
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var get_bank_slip = function(bank_slip_key, callback, error){
    let pathURL = "/bank_slip/"+bank_slip_key;
    let options = {
        "query": {}
    };
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

// ======================================================================
// query params:
// person_key	Path	Chave de indentificação do cliente.	"96b32f1a-c2bd-41a4-b4b1-a169235be68b"
// bank_slip_status	Query	Status do boleto	"registered"
// protest_status	Query	Status de protesto	"not_protested"
// from_date	Query	Data inicial de criação do boleto	"05-05-2020"
// to_date	Query	Data final de criação do boleto	"05-07-2020"
// number_search	Query	Nosso número (our_number) ou numero do documento(document_number)	"12345"
var list_bank_slip = function(person_key, query, callback, error){
    let pathURL = "/bank_slip/person/"+person_key;
    query = query || {};
    let options = {
        "query": query
    };
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var post_2way_bank_slip = function(bank_slip_key, callback, error){
    let pathURL = "/bank_slip/2-way/" + bank_slip_key;
    let options = {};
    req = request('POST', pathURL, options, callback);
    req.on('error', error);
    req.end();
}

var get_2way_bank_slip = function(bank_slip_key, callback, error){
    let pathURL = "/bank_slip/2-way/" + bank_slip_key;
    let options = {};
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
}

var get_little_french = function(requester_profile_code, query, callback, error){
    let pathURL = "/bank_slip/little_french/" + requester_profile_code;
    query = query || {};
    let options = {
        "query": query
    };
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
}

// ======================================================================
// ******* query params:
// beneficiary_key	Query	Chave de indentificação do beneficiário (obrigatória caso não haja um requester_profile_code)	"96b32f1a-c2bd-41a4-b4b1-a169235be68b"
// requester_profile_code	Query	Código da carteira (obrigatório caso não haja uma beneficiary_key)	"329-01-0001-0067049"
// expiration_date	Query	Data máxima de vencimento (Formato YYYY-MM-DD)	"2020-05-05"
var get_bank_slip_duplicates_balance = function(query, callback, error){
    let pathURL = "/bank_slip/duplicates_balance";
    query = query || {};
    let options = {
        "query": query
    };
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
}

var get_bank_slip_duplicates_balance_exce = function(query, callback, error){
    let pathURL = "/bank_slip/duplicates_balance_excel";
    query = query || {};
    let options = {
        "query": query
    };
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
}

module.exports = {
    post_instruction: post_multibank_instruction,
    post_cnab: post_multibank_cnab,
    get_cnab: get_multibank_cnab,
    get_bank_slip: get_bank_slip,
    list_bank_slip: list_bank_slip,
    post_2way_bank_slip: post_2way_bank_slip,
    get_2way_bank_slip: get_2way_bank_slip,
    get_little_french: get_little_french,
    get_bank_slip_duplicates_balance: get_bank_slip_duplicates_balance,
    get_bank_slip_duplicates_balance_excel: get_bank_slip_duplicates_balance_exce
};