const request = require('./request');

var post_debt = function(data, callback, error){
    let pathURL = "/debt";
    let options = {
        "body": data
    };
    req = request('POST', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var post_signed_debt = function(data, callback, error){
    let pathURL = "/signed_debt";
    let options = {
        "body": data
    };
    req = request('POST', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var get_debt = function(query, callback, error){
    let pathURL = "/debt";
    query = query || {};
    let options = {
        "query": query
    };
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var get_signed_debt = function(query, callback, error){
    let pathURL = "/signed_debt";
    query = query || {};
    let options = {
        "query": query
    };
    req = request('GET', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

var post_debt_simulation = function(data, callback, error){
    let pathURL = "/debt_simulation";
    let options = {
        "body": data
    };
    req = request('POST', pathURL, options, callback);
    req.on('error', error);
    req.end();
};

module.exports = {
    post : post_debt,
    post_signed : post_signed_debt,
    post_simulation : post_debt_simulation,
    get: get_debt,
    get_signed: get_signed_debt
};

// ======================================================================
// GET - DEBT 
// ======================================================================
// const debt = require('./debt');
// var callback = (response,statusCode) => {
//     console.log(statusCode, response);
// };
// var error = error => {
//     console.error('error',error);
// }
// query = {};
// debt.get_signed(query, callback, error);
// ======================================================================
// POST - DEBT SIMULATION
// ======================================================================
// const debt = require('./debt');
// var data = {
//     "borrower": {
//         "person_type": "natural"
//     },
//     "financial": {
//         "amount": 5000,
//         "interest_type": "pre_price",
//         "credit_operation_type": "ccb",
//         "annual_interest_rate": 2.32,
//         "disbursement_date": "2021-08-06",
//         "interest_grace_period": 0,
//         "principal_grace_period": 0,
//         "number_of_installments": 2,
//         "rebate": null,
//         "fine_configuration": {
//             "contract_fine_rate": 0.02,
//             "interest_base": "calendar_days",
//             "monthly_rate": 0.01
//         }
//     }
// };
// var callback = response => {
//     console.log(response);
// };
// var error = error => {
//     console.error('error',error);
// }
// debt.post_simulation(data, callback, error);
// ======================================================================
// POST - DEBT 
// ======================================================================
// const debt = require('./debt');
// var data = {
//     "borrower":{
//        "address":{
//           "city":"Teresina",
//           "complement":"complemento",
//           "neighborhood":"Gurupi",
//           "number":"6080",
//           "postal_code":"64091210",
//           "state":"PI",
//           "street":"Br 343"
//        },
//        "cnae_code":"6499-9/99",
//        "company_document_number":"89940878025962",
//        "company_representatives":[
//           {
//              "address":{
//                 "city":"Recife",
//                 "complement":null,
//                 "neighborhood":"Fundão",
//                 "number":"137",
//                 "postal_code":"52221110",
//                 "state":"PE",
//                 "street":"Rua Camapuã"
//              },
//              "birth_date":"1972-02-02",
//              "document_identification_number":"339122924",
//              "email":"pedro.alves@yopmail.com",
//              "individual_document_number":"94632180173",
//              "is_pep":false,
//              "marital_status":"single",
//              "mother_name":"Sueli Isadora Alves",
//              "name":"Pedro Felipe Henrique Alves",
//              "nationality":"Brasileira",
//              "person_type":"natural",
//              "phone":{
//                 "area_code":"88",
//                 "country_code":"055",
//                 "number":"995924634"
//              },
//              "profession":"Empresário",
//              "property_system":null,
//              "spouse":null,
//              "wedding_certificate":null,
//              "document_identification":"5b18208b-474b-4847-8004-60b117fad1e8",
//              "proof_of_residence":"c1b55716-97c2-4bbb-a7d0-15ec24ebdb80"
//           }
//        ],
//        "company_statute":"c1b55716-97c2-4bbb-a7d0-15ec24ebdb80",
//        "company_type":"ltda",
//        "directors_election_minute":"5b18208b-474b-4847-8004-60b117fad1e8",
//        "email":"parmalat@yopmail.com",
//        "foundation_date":"2012-01-01",
//        "name":"Parmalat",
//        "person_type":"legal",
//        "phone":{
//           "area_code":"11",
//           "country_code":"055",
//           "number":"999999999"
//        },
//        "trading_name":"Parmalat"
//     },
//     "guarantors":[
//        {
//           "person_type":"natural",
//           "name":"Patrícia Tereza Bernardes",
//           "mother_name":"Maria Mariane",
//           "birth_date":"1990-05-06",
//           "profession":"Deputada",
//           "nationality":"Brasileira",
//           "marital_status":"married",
//           "is_pep":true,
//           "property_system":"total_communion_of_goods",
//           "individual_document_number":"34651104630",
//           "document_identification_number":"232479719",
//           "email":"patricia.tereza@yopmail.com",
//           "phone":{
//              "country_code":"055",
//              "area_code":"11",
//              "number":"9128281359"
//           },
//           "address":{
//              "street":"Passagem Mariana",
//              "state":"PA",
//              "city":"Ananindeua",
//              "neighborhood":"Águas Lindas",
//              "number":"660",
//              "postal_code":"67118003",
//              "complement":"complemento"
//           },
//           "spouse":null,
//           "wedding_certificate":"c1b55716-97c2-4bbb-a7d0-15ec24ebdb80",
//           "document_identification":"5b18208b-474b-4847-8004-60b117fad1e8",
//           "proof_of_residence":"c1b55716-97c2-4bbb-a7d0-15ec24ebdb80"
//        }
//     ],
//     "disbursement_bank_accounts":[
//        {
//           "bank_code":"341",
//           "branch_number":"7071",
//           "account_number":"15570",
//           "account_digit":"4",
//           "document_number":"94632180173",
//           "name":"Pedro Felipe Henrique Alves",
//           "percentage_receivable":100
//        }
//     ],
//     "financial":{
//        "amount":10000000,
//        "annual_interest_rate":2.32,
//        "cdi_percentage":100,
//        "credit_operation_type":"ccb",
//        "disbursement_date":"2021-07-26",
//        "issue_date":"2021-07-26",
//        "fine_configuration":{
//           "contract_fine_rate":0.02,
//           "interest_base":"calendar_days",
//           "monthly_rate":0.01
//        },
//        "interest_grace_period":0,
//        "interest_type":"cdi_plus",
//        "number_of_installments":10,
//        "principal_grace_period":0,
//        "rebates":[
//           {
//              "fee_type":"tac",
//              "amount_type":"absolute",
//              "amount":500
//           }
//        ]
//     },
//     "purchaser_document_number":"49194383000175"
// };
// var callback = response => {
//     console.log(response);
// };
// var error = error => {
//     console.error('error',error);
// }
// debt.post(data, callback, error);

