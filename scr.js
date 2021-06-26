const request = require('./request');

// ======================================================================
// query params:
// origin_key	Chave de identificação da operação. Retorna todas as consultas referentes à aquela operação	"3c061264-923b-451b-a02d-20e342f4b709"
// subject_person_type	Tipo de pessoa consultada.	"legal"
// subject_document_number	"CPF" ou "CNPJ", não aceita parcial	"05305188000108"
// created_at_start_date	Inicio da faixa de data de criação (formato: YYYY-MM-DD)	"2019-12-31"
// created_at_end_date	Fim da faixa de data de criação (formato: YYYY-MM-DD)	"2020-05-03"
// consulted_at_start_date	Inicio da faixa de data de consulta (formato: YYYY-MM-DD)	"2019-12-31"
// consulted_at_end_date	Fim da faixa de data de consulta (formato: YYYY-MM-DD)	"2020-05-03"
// scr_status	Status da consulta. Pode ser "created", "pending_signature", "signed", "rejected", "consulted", "error" ou "canceled"	"pending_signature"
// page	Página atual que está sendo consultada	1
// page_size	Quantidade de resultados que cabem na página	500

var list_scr = function(query, callback, error){
    let pathURL = "/scr";
    query = query || {};
    let options = {
        "query": query
    };
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var get_scr = function(scr_key,query, callback, error){
    let pathURL = "/scr/" + scr_key;
    query = query || {};
    let options = {
        "query": query
    };
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var post_scr = function(data, callback, error){
    let pathURL = "/scr";
    let options = {
        "body": data
    };
    req = request('POST', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var post_redo_scr = function(data, callback, error){
    let pathURL = "scr/redo";
    let options = {
        "body": data
    };
    req = request('POST', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var delete_scr = function(data, callback, error){
    let pathURL = "/scr";
    let options = {
        "body": data
    };
    req = request('DELETE', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

module.exports = {
    post: post_scr,
    post_redo: post_redo_scr,
    list: list_scr,
    get: get_scr,
    delete: delete_scr,
};