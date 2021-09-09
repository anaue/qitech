"use strict";

const fs = require("fs");
const excelSampleFilePath = "./test/sample/excelsample.xlsx";
const excelSampleFile = fs.readFileSync(excelSampleFilePath);
const pdfSampleFilePath = "./test/sample/pdfsample.pdf";
const pdfSampleFile = fs.readFileSync(pdfSampleFilePath);
const txtSampleFilePath = "./test/sample/sample.txt";
const privateKeyFilePath = "./test/sample/jwt_test.key";
const publicKeyFilePath = "./test/sample/jwt_test.key.pub";

module.exports = {
    upload:
    {
        post: {
            request: pdfSampleFilePath,
            status_201: {
                document_key: "58c26f84-87ef-4bc6-bbeb-e0c544848fd5",
                document_md5: "109d9e33d1c1cbb7f3ce048efdc78117"
            }
        }
    },
    debt: {
        post: {
            company_request: {
                "borrower": {
                    "address": {
                        "city": "Teresina",
                        "complement": "complemento",
                        "neighborhood": "Gurupi",
                        "number": "6080",
                        "postal_code": "64091210",
                        "state": "PI",
                        "street": "Br 343"
                    },
                    "cnae_code": "6499-9/99",
                    "company_document_number": "89940878025962",
                    "company_representatives": [
                        {
                            "address": {
                                "city": "Recife",
                                "complement": null,
                                "neighborhood": "Fundão",
                                "number": "137",
                                "postal_code": "52221110",
                                "state": "PE",
                                "street": "Rua Camapuã"
                            },
                            "birth_date": "1972-02-02",
                            "document_identification_number": "339122924",
                            "email": "pedro.alves@yopmail.com",
                            "individual_document_number": "94632180173",
                            "is_pep": false,
                            "marital_status": "single",
                            "mother_name": "Sueli Isadora Alves",
                            "name": "Pedro Felipe Henrique Alves",
                            "nationality": "Brasileira",
                            "person_type": "natural",
                            "phone": {
                                "area_code": "88",
                                "country_code": "055",
                                "number": "995924634"
                            },
                            "profession": "Empresário",
                            "property_system": null,
                            "spouse": null,
                            "wedding_certificate": null,
                            "document_identification": "2db378a2-3a62-4689-a273-a70c7cdb205c",
                            "proof_of_residence": "d3810134-ee8c-4a6b-ac1a-631fa751524c"
                        }
                    ],
                    "company_statute": "3fbf62a1-9dd1-4b2b-9d69-6c57c8dc3278",
                    "company_type": "ltda",
                    "directors_election_minute": "3fbf62a1-9dd1-4b2b-9d69-6c57c8dc3278",
                    "email": "parmalat@yopmail.com",
                    "foundation_date": "2012-01-01",
                    "name": "Parmalat",
                    "person_type": "legal",
                    "phone": {
                        "area_code": "11",
                        "country_code": "055",
                        "number": "999999999"
                    },
                    "trading_name": "Parmalat"
                },
                "guarantors": [
                    {
                        "person_type": "natural",
                        "name": "Patrícia Tereza Bernardes",
                        "mother_name": "Maria Mariane",
                        "birth_date": "1990-05-06",
                        "profession": "Deputada",
                        "nationality": "Brasileira",
                        "marital_status": "married",
                        "is_pep": true,
                        "property_system": "total_communion_of_goods",
                        "individual_document_number": "34651104630",
                        "document_identification_number": "232479719",
                        "email": "patricia.tereza@yopmail.com",
                        "phone": {
                            "country_code": "055",
                            "area_code": "11",
                            "number": "9128281359"
                        },
                        "address": {
                            "street": "Passagem Mariana",
                            "state": "PA",
                            "city": "Ananindeua",
                            "neighborhood": "Águas Lindas",
                            "number": "660",
                            "postal_code": "67118003",
                            "complement": "complemento"
                        },
                        "spouse": null,
                        "wedding_certificate": "69906ede-49c0-4021-981d-44f1136b1b53",
                        "document_identification": "2db378a2-3a62-4689-a273-a70c7cdb205c",
                        "proof_of_residence": "d3810134-ee8c-4a6b-ac1a-631fa751524c"
                    }
                ],
                "disbursement_bank_accounts": [
                    {
                        "bank_code": "341",
                        "branch_number": "7071",
                        "account_number": "15570",
                        "account_digit": "4",
                        "document_number": "94632180173",
                        "name": "Pedro Felipe Henrique Alves",
                        "percentage_receivable": 100
                    }
                ],
                "financial": {
                    "amount": 10000000,
                    "annual_interest_rate": 2.32,
                    "cdi_percentage": 100,
                    "credit_operation_type": "ccb",
                    "disbursement_date": "2019-07-25",
                    "issue_date": "2019-07-25",
                    "fine_configuration": {
                        "contract_fine_rate": 0.02,
                        "interest_base": "calendar_days",
                        "monthly_rate": 0.01
                    },
                    "interest_grace_period": 0,
                    "interest_type": "cdi_plus",
                    "number_of_installments": 10,
                    "principal_grace_period": 0,
                    "rebates": [
                        {
                            "fee_type": "tac",
                            "amount_type": "absolute",
                            "amount": 500
                        }
                    ]
                },
                "purchaser_document_number": "49194383000175"
            },
            person_request: {
                "borrower": {
                    "person_type": "natural",
                    "name": "Patrícia Tereza Bernardes",
                    "mother_name": "Maria Mariane",
                    "birth_date": "1990-05-06",
                    "profession": "Deputada",
                    "nationality": "Brasileira",
                    "marital_status": "married",
                    "is_pep": true,
                    "property_system": "total_communion_of_goods",
                    "individual_document_number": "34651104630",
                    "document_identification_number": "232479719",
                    "email": "patricia.tereza@yopmail.com",
                    "phone": {
                        "country_code": "055",
                        "area_code": "11",
                        "number": "9128281359"
                    },
                    "address": {
                        "street": "Passagem Mariana",
                        "state": "PA",
                        "city": "Ananindeua",
                        "neighborhood": "Águas Lindas",
                        "number": "660",
                        "postal_code": "67118003",
                        "complement": "complemento"
                    },
                    "spouse": "Objetos PF",
                    "wedding_certificate": "DOCUMENT_KEY",
                    "document_identification": "DOCUMENT_KEY",
                    "proof_of_residence": "DOCUMENT_KEY"
                },
                "guarantors": [
                    {
                        "person_type": "natural",
                        "name": "Patrícia Tereza Bernardes",
                        "mother_name": "Maria Mariane",
                        "birth_date": "1990-05-06",
                        "profession": "Deputada",
                        "nationality": "Brasileira",
                        "marital_status": "married",
                        "is_pep": true,
                        "property_system": "total_communion_of_goods",
                        "individual_document_number": "34651104630",
                        "document_identification_number": "232479719",
                        "email": "patricia.tereza@yopmail.com",
                        "phone": {
                            "country_code": "055",
                            "area_code": "11",
                            "number": "9128281359"
                        },
                        "address": {
                            "street": "Passagem Mariana",
                            "state": "PA",
                            "city": "Ananindeua",
                            "neighborhood": "Águas Lindas",
                            "number": "660",
                            "postal_code": "67118003",
                            "complement": "complemento"
                        },
                        "spouse": null,
                        "wedding_certificate": "69906ede-49c0-4021-981d-44f1136b1b53",
                        "document_identification": "2db378a2-3a62-4689-a273-a70c7cdb205c",
                        "proof_of_residence": "d3810134-ee8c-4a6b-ac1a-631fa751524c"
                    }
                ],
                "disbursement_bank_accounts": [
                    {
                        "bank_code": "341",
                        "branch_number": "7071",
                        "account_number": "15570",
                        "account_digit": "4",
                        "document_number": "94632180173",
                        "name": "Pedro Felipe Henrique Alves",
                        "percentage_receivable": 100
                    }
                ],
                "financial": {
                    "amount": 10000000,
                    "annual_interest_rate": 2.32,
                    "cdi_percentage": 100,
                    "credit_operation_type": "ccb",
                    "disbursement_date": "2019-07-25",
                    "issue_date": "2019-07-25",
                    "fine_configuration": {
                        "contract_fine_rate": 0.02,
                        "interest_base": "calendar_days",
                        "monthly_rate": 0.01
                    },
                    "interest_grace_period": 0,
                    "interest_type": "cdi_plus",
                    "number_of_installments": 10,
                    "principal_grace_period": 0,
                    "rebates": [
                        {
                            "fee_type": "tac",
                            "amount_type": "absolute",
                            "amount": 500
                        }
                    ]
                },
                "purchaser_document_number": "49194383000175"
            },
            simplied_request: {
                "borrower": {
                    "person_type": "natural",
                    "name": "John David",
                    "individual_document_number": "63180382058"
                },
                "disbursement_bank_accounts": [
                    {
                        "account_digit": "1",
                        "account_number": "00001",
                        "bank_code": "329",
                        "branch_number": "0001"
                    }
                ],
                "guarantors": [
                    {
                        "person_type": "natural",
                        "name": "Patrícia Tereza Bernardes",
                        "individual_document_number": "34651104630"
                    }
                ],
                "financial": {
                    "amount": 1001.99,
                    "annual_interest_rate": 3.33,
                    "credit_operation_type": "ccb",
                    "disbursement_date": "2020-03-26",
                    "fine_configuration": {
                        "contract_fine_rate": 0.11,
                        "interest_base": "workdays",
                        "monthly_rate": 0.01
                    },
                    "interest_grace_period": 0,
                    "interest_type": "pre_sac",
                    "number_of_installments": 10,
                    "principal_grace_period": 0,
                    "rebate": 100
                },
                "additional_data": {
                    "contract": {
                        "negotiable_key": "a0d89be6-6a76-4112-b0fa-631049361368",
                        "non_negotiable_key": "6401288e-d5ac-4b62-af80-0d69cef430de",
                        "contract_number": "9876543340/NYR",
                        "signed": true
                    }
                },
                "simplified": true
            },
            status_201: {
                "webhook_type": "debt",
                "key": "DEBT_KEY",
                "status": "waiting_compliance",
                "event_datetime": "EVENT_DATE_TIME"
            }
        },
        get: {
            query: {
                "key": "debtKey"
            },
            status_200: {
                "data": {
                    "borrower": {
                        "document_number": "68394265057",
                        "name": "Xuxa Meneguel"
                    },
                    "contract_fee_amount": 5.56,
                    "installments": [
                        {
                            "bank_slip_key": null,
                            "calendar_days": 57,
                            "due_date": "2020-09-30",
                            "due_principal": -0.00217819,
                            "fine_amount": null,
                            "has_interest": true,
                            "installment_key": "28eb5907-ed25-4a86-bb9d-b6dc944f13df",
                            "installment_number": 1,
                            "installment_status": "opened",
                            "installment_type": "principal",
                            "paid_amount": 0.0,
                            "post_fixed_amount": 0.0,
                            "pre_fixed_amount": 268.75782181,
                            "principal_amortization_amount": 1111.9,
                            "tax_amount": 0.0,
                            "total_amount": 1380.66,
                            "workdays": 40
                        }
                    ]
                },
                "operation_key": "DEBT_KEY",
                "status": "opened",
                "webhook_type": "debt"
            }
        },
        list: {
            status_200: {
                "data": [
                    {
                        "borrower": {
                            "document_number": "68394265057",
                            "name": "Xuxa Meneguel"
                        },
                        "contract_fee_amount": 5.56,
                        "installments": [
                            {
                                "bank_slip_key": null,
                                "calendar_days": 57,
                                "due_date": "2020-09-30",
                                "due_principal": -0.00217819,
                                "fine_amount": null,
                                "has_interest": true,
                                "installment_key": "28eb5907-ed25-4a86-bb9d-b6dc944f13df",
                                "installment_number": 1,
                                "installment_status": "opened",
                                "installment_type": "principal",
                                "paid_amount": 0.0,
                                "post_fixed_amount": 0.0,
                                "pre_fixed_amount": 268.75782181,
                                "principal_amortization_amount": 1111.9,
                                "tax_amount": 0.0,
                                "total_amount": 1380.66,
                                "workdays": 40
                            }
                        ],
                        "operation_key": "DEBT_KEY",
                        "status": "opened"
                    }
                ],
                "pagination": {
                    "current_page": 1,
                    "next_page": null,
                    "rows_per_page": 100,
                    "total_pages": 1,
                    "total_rows": 55
                }
            }
        },
        postSigned: {
            request: {
                "type": "pdf-signature",
                "path-pdf-signed": "url para o pdf valid-exemploassinado.pdf",
                "signature_zip": "document_key do sign2go.zip enviado via /upload para a QI"
            },
            status_201: {
                "message": "no-doc and unknown"
            }
        }
    },
    debt_simulation: {
        post:
        {
            request: {
                "borrower": {
                    "person_type": "natural"
                },
                "financial": {
                    "amount": 5000,
                    "interest_type": "pre_price",
                    "credit_operation_type": "ccb",
                    "annual_interest_rate": 2.32,
                    "disbursement_date": "2020-08-06",
                    "interest_grace_period": 0,
                    "principal_grace_period": 0,
                    "number_of_installments": 2,
                    "rebate": null,
                    "fine_configuration": {
                        "contract_fine_rate": 0.02,
                        "interest_base": "calendar_days",
                        "monthly_rate": 0.01
                    }
                }
            },
            status_201: {
                "data": {
                    "assignment_amount": 5025.0,
                    "cet": 0.099606,
                    "contract_fee_amount": 25.0,
                    "credit_operation_type": "ccb",
                    "disbursed_issue_amount": 5000.0,
                    "disbursement_date": "2020-08-06",
                    "external_contract_fee_amount": 50.0,
                    "installments": [
                        {
                            "calendar_days": 33,
                            "due_date": "2020-09-08",
                            "due_principal": 5000.0,
                            "has_interest": true,
                            "installment_number": 1,
                            "post_fixed_amount": 0,
                            "pre_fixed_amount": 525.84,
                            "principal_amortization_amount": 2375.11,
                            "tax_amount": 0.0,
                            "total_amount": 2900.95,
                            "workdays": 22.0
                        },
                        {
                            "calendar_days": 30,
                            "due_date": "2020-10-08",
                            "due_principal": 2624.89,
                            "has_interest": true,
                            "installment_number": 2,
                            "post_fixed_amount": 0,
                            "pre_fixed_amount": 276.05,
                            "principal_amortization_amount": 2624.89,
                            "tax_amount": 0.0,
                            "total_amount": 2900.94,
                            "workdays": 22.0
                        }
                    ],
                    "interest_grace_period": 0,
                    "interest_payment_month_period": 1,
                    "interest_type": "pre_price",
                    "iof_amount": 0.0,
                    "issue_amount": 5000.0,
                    "issue_date": "2020-08-06",
                    "net_external_contract_fee_amount": 50.0,
                    "operation_type": "structured_operation",
                    "post_fixed_interest_base": "workdays",
                    "post_fixed_interest_rate": null,
                    "prefixed_interest_rate": {
                        "annual_rate": 2.32,
                        "daily_rate": 0.0033387969150536893,
                        "interest_base": "calendar_days",
                        "monthly_rate": 0.10516767467346065
                    },
                    "principal_amortization_month_period": 1,
                    "principal_grace_period": 0
                },
                "event_datetime": "2020-08-06 18:59:24",
                "key": "7d3292e7-3563-4257-b8a8-32f5835d5542",
                "status": "finished",
                "type": "debt"
            }
        },
        postBatch:
        {
            request: {
                "complex_operation": true,
                "operation_batch": [
                    {
                        "borrower": {
                            "person_type": "natural"
                        },
                        "financial": {
                            "amount": 123456,
                            "interest_type": "pre_price",
                            "credit_operation_type": "ccb",
                            "annual_interest_rate": 2.32,
                            "disbursement_date": "2020-08-14",
                            "interest_grace_period": 0,
                            "principal_grace_period": 0,
                            "number_of_installments": 2,
                            "rebate": null,
                            "fine_configuration": {
                                "contract_fine_rate": 0.02,
                                "interest_base": "calendar_days",
                                "monthly_rate": 0.01
                            }
                        }
                    },
                    {
                        "borrower": {
                            "person_type": "natural"
                        },
                        "financial": {
                            "amount": 123456,
                            "interest_type": "pre_price",
                            "credit_operation_type": "ccb",
                            "annual_interest_rate": 2.32,
                            "disbursement_date": "2020-08-14",
                            "interest_grace_period": 0,
                            "principal_grace_period": 0,
                            "number_of_installments": 2,
                            "rebate": null,
                            "fine_configuration": {
                                "contract_fine_rate": 0.02,
                                "interest_base": "calendar_days",
                                "monthly_rate": 0.01
                            }
                        }
                    }
                ]
            },
            status_200: [
                {
                    "data": {
                        "assignment_amount": 123456.0,
                        "cet": 0.107954,
                        "contract_fee_amount": 617.28,
                        "credit_operation_type": "ccb",
                        "disbursed_issue_amount": 122838.72,
                        "disbursement_date": "2020-08-14",
                        "external_contract_fee_amount": 0,
                        "installments": [
                            {
                                "calendar_days": 31,
                                "due_date": "2020-09-14",
                                "due_principal": 123456.0,
                                "has_interest": true,
                                "installment_number": 1,
                                "post_fixed_amount": 0,
                                "pre_fixed_amount": 12983.58,
                                "principal_amortization_amount": 58644.26,
                                "tax_amount": 0.0,
                                "total_amount": 71627.84,
                                "workdays": 20.0
                            },
                            {
                                "calendar_days": 30,
                                "due_date": "2020-10-14",
                                "due_principal": 64811.74,
                                "has_interest": true,
                                "installment_number": 2,
                                "post_fixed_amount": 0,
                                "pre_fixed_amount": 6816.1,
                                "principal_amortization_amount": 64811.74,
                                "tax_amount": 0.0,
                                "total_amount": 71627.84,
                                "workdays": 21.0
                            }
                        ],
                        "interest_grace_period": 0,
                        "interest_payment_month_period": 1,
                        "interest_type": "pre_price",
                        "iof_amount": 0.0,
                        "issue_amount": 123456.0,
                        "issue_date": "2020-08-14",
                        "net_external_contract_fee_amount": 0.0,
                        "operation_type": "structured_operation",
                        "post_fixed_interest_base": "workdays",
                        "post_fixed_interest_rate": null,
                        "prefixed_interest_rate": {
                            "annual_rate": 2.32,
                            "daily_rate": 0.0033387969150536893,
                            "interest_base": "calendar_days",
                            "monthly_rate": 0.10516767467346065
                        },
                        "principal_amortization_month_period": 1,
                        "principal_grace_period": 0
                    },
                    "event_datetime": "2020-08-12 20:32:07",
                    "key": "2aa772a1-1bc8-4526-8cf0-0437692fc4ce",
                    "status": "finished",
                    "type": "debt"
                },
                {
                    "data": {
                        "assignment_amount": 123456.0,
                        "cet": 0.107954,
                        "contract_fee_amount": 617.28,
                        "credit_operation_type": "ccb",
                        "disbursed_issue_amount": 122838.72,
                        "disbursement_date": "2020-08-14",
                        "external_contract_fee_amount": 0,
                        "installments": [
                            {
                                "calendar_days": 31,
                                "due_date": "2020-09-14",
                                "due_principal": 123456.0,
                                "has_interest": true,
                                "installment_number": 1,
                                "post_fixed_amount": 0,
                                "pre_fixed_amount": 12983.58,
                                "principal_amortization_amount": 58644.26,
                                "tax_amount": 0.0,
                                "total_amount": 71627.84,
                                "workdays": 20.0
                            },
                            {
                                "calendar_days": 30,
                                "due_date": "2020-10-14",
                                "due_principal": 64811.74,
                                "has_interest": true,
                                "installment_number": 2,
                                "post_fixed_amount": 0,
                                "pre_fixed_amount": 6816.1,
                                "principal_amortization_amount": 64811.74,
                                "tax_amount": 0.0,
                                "total_amount": 71627.84,
                                "workdays": 21.0
                            }
                        ],
                        "interest_grace_period": 0,
                        "interest_payment_month_period": 1,
                        "interest_type": "pre_price",
                        "iof_amount": 0.0,
                        "issue_amount": 123456.0,
                        "issue_date": "2020-08-14",
                        "net_external_contract_fee_amount": 0.0,
                        "operation_type": "structured_operation",
                        "post_fixed_interest_base": "workdays",
                        "post_fixed_interest_rate": null,
                        "prefixed_interest_rate": {
                            "annual_rate": 2.32,
                            "daily_rate": 0.0033387969150536893,
                            "interest_base": "calendar_days",
                            "monthly_rate": 0.10516767467346065
                        },
                        "principal_amortization_month_period": 1,
                        "principal_grace_period": 0
                    },
                    "event_datetime": "2020-08-12 20:32:07",
                    "key": "2aa772a1-1bc8-4526-8cf0-0437692fc4ce",
                    "status": "finished",
                    "type": "debt"
                }
            ]
        }
    },
    signed_debt: {
        post: {
            request: {
                "borrower": {
                    "address": {
                        "city": "Teresina",
                        "complement": "complemento",
                        "neighborhood": "Gurupi",
                        "number": "6080",
                        "postal_code": "64091210",
                        "state": "PI",
                        "street": "Br 343"
                    },
                    "cnae_code": "6499-9/99",
                    "company_document_number": "89940878025962",
                    "company_representatives": [
                        {
                            "address": {
                                "city": "Recife",
                                "complement": null,
                                "neighborhood": "Fundão",
                                "number": "137",
                                "postal_code": "52221110",
                                "state": "PE",
                                "street": "Rua Camapuã"
                            },
                            "birth_date": "1972-02-02",
                            "document_identification_number": "339122924",
                            "email": "pedro.alves@yopmail.com",
                            "individual_document_number": "94632180173",
                            "is_pep": false,
                            "marital_status": "single",
                            "mother_name": "Sueli Isadora Alves",
                            "name": "Pedro Felipe Henrique Alves",
                            "nationality": "Brasileira",
                            "person_type": "natural",
                            "phone": {
                                "area_code": "88",
                                "country_code": "055",
                                "number": "995924634"
                            },
                            "profession": "Empresário",
                            "property_system": null,
                            "spouse": null,
                            "wedding_certificate": null,
                            "document_identification": "2db378a2-3a62-4689-a273-a70c7cdb205c",
                            "proof_of_residence": "d3810134-ee8c-4a6b-ac1a-631fa751524c"
                        }
                    ],
                    "company_statute": "3fbf62a1-9dd1-4b2b-9d69-6c57c8dc3278",
                    "company_type": "ltda",
                    "directors_election_minute": "3fbf62a1-9dd1-4b2b-9d69-6c57c8dc3278",
                    "email": "parmalat@yopmail.com",
                    "foundation_date": "2012-01-01",
                    "name": "Parmalat",
                    "person_type": "legal",
                    "phone": {
                        "area_code": "11",
                        "country_code": "055",
                        "number": "999999999"
                    },
                    "trading_name": "Parmalat"
                },
                "guarantors": [
                    {
                        "person_type": "natural",
                        "name": "Patrícia Tereza Bernardes",
                        "mother_name": "Maria Mariane",
                        "birth_date": "1990-05-06",
                        "profession": "Deputada",
                        "nationality": "Brasileira",
                        "marital_status": "married",
                        "is_pep": true,
                        "property_system": "total_communion_of_goods",
                        "individual_document_number": "34651104630",
                        "document_identification_number": "232479719",
                        "email": "patricia.tereza@yopmail.com",
                        "phone": {
                            "country_code": "055",
                            "area_code": "11",
                            "number": "9128281359"
                        },
                        "address": {
                            "street": "Passagem Mariana",
                            "state": "PA",
                            "city": "Ananindeua",
                            "neighborhood": "Águas Lindas",
                            "number": "660",
                            "postal_code": "67118003",
                            "complement": "complemento"
                        },
                        "spouse": null,
                        "wedding_certificate": "69906ede-49c0-4021-981d-44f1136b1b53",
                        "document_identification": "2db378a2-3a62-4689-a273-a70c7cdb205c",
                        "proof_of_residence": "d3810134-ee8c-4a6b-ac1a-631fa751524c"
                    }
                ],
                "disbursement_bank_accounts": [
                    {
                        "bank_code": "341",
                        "branch_number": "7071",
                        "account_number": "15570",
                        "account_digit": "4",
                        "document_number": "94632180173",
                        "name": "Pedro Felipe Henrique Alves",
                        "percentage_receivable": 100
                    }
                ],
                "financial": {
                    "amount": 10000000,
                    "annual_interest_rate": 2.32,
                    "cdi_percentage": 100,
                    "credit_operation_type": "ccb",
                    "disbursement_date": "2019-07-25",
                    "issue_date": "2019-07-25",
                    "fine_configuration": {
                        "contract_fine_rate": 0.02,
                        "interest_base": "calendar_days",
                        "monthly_rate": 0.01
                    },
                    "interest_grace_period": 0,
                    "interest_type": "cdi_plus",
                    "number_of_installments": 10,
                    "principal_grace_period": 0,
                    "rebate": 10000
                },
                "additional_data": {
                    "contract": {
                        "negotiable_key": "a0d89be6-6a76-4112-b0fa-631049361368",
                        "non_negotiable_key": "6401288e-d5ac-4b62-af80-0d69cef430de",
                        "contract_number": "1234556/NYR",
                        "signed": true
                    }
                }
            },
            status_201: {
                "contract": {
                    "negotiable_key": "a0d89be6-6a76-4112-b0fa-631049361368",
                    "non_negotiable_key": "6401288e-d5ac-4b62-af80-0d69cef430de",
                    "contract_number": "9876543340/NYR",
                    "signed": true
                }
            }
        },
        list: {
            status_200: {
                "data": [
                    {
                        "borrower": {
                            "document_number": "68394265057",
                            "name": "Xuxa Meneguel"
                        },
                        "contract_fee_amount": 5.56,
                        "installments": [
                            {
                                "bank_slip_key": null,
                                "calendar_days": 57,
                                "due_date": "2020-09-30",
                                "due_principal": -0.00217819,
                                "fine_amount": null,
                                "has_interest": true,
                                "installment_key": "28eb5907-ed25-4a86-bb9d-b6dc944f13df",
                                "installment_number": 1,
                                "installment_status": "opened",
                                "installment_type": "principal",
                                "paid_amount": 0.0,
                                "post_fixed_amount": 0.0,
                                "pre_fixed_amount": 268.75782181,
                                "principal_amortization_amount": 1111.9,
                                "tax_amount": 0.0,
                                "total_amount": 1380.66,
                                "workdays": 40
                            }
                        ],
                        "operation_key": "DEBT_KEY",
                        "status": "opened"
                    }
                ],
                "pagination": {
                    "current_page": 1,
                    "next_page": null,
                    "rows_per_page": 100,
                    "total_pages": 1,
                    "total_rows": 55
                }
            }
        },
        get: {
            query: {
                "key": "debtKey"
            },
            status_200: {
                "data": {
                    "borrower": {
                        "document_number": "68394265057",
                        "name": "Xuxa Meneguel"
                    },
                    "contract_fee_amount": 5.56,
                    "installments": [
                        {
                            "bank_slip_key": null,
                            "calendar_days": 57,
                            "due_date": "2020-09-30",
                            "due_principal": -0.00217819,
                            "fine_amount": null,
                            "has_interest": true,
                            "installment_key": "28eb5907-ed25-4a86-bb9d-b6dc944f13df",
                            "installment_number": 1,
                            "installment_status": "opened",
                            "installment_type": "principal",
                            "paid_amount": 0.0,
                            "post_fixed_amount": 0.0,
                            "pre_fixed_amount": 268.75782181,
                            "principal_amortization_amount": 1111.9,
                            "tax_amount": 0.0,
                            "total_amount": 1380.66,
                            "workdays": 40
                        }
                    ]
                },
                "operation_key": "DEBT_KEY",
                "status": "opened",
                "webhook_type": "debt"
            }
        }
    },
    account: {
        post: {
            company_request: {
                "account_owner": {
                    "address": {
                        "city": "Limeira",
                        "complement": "complemento",
                        "neighborhood": "Vila Cidade Jardim",
                        "number": "662",
                        "postal_code": "13480290",
                        "state": "SP",
                        "street": "Avenida Campinas"
                    },
                    "cnae_code": "6499-9/99",
                    "company_document_number": "01871112000180",
                    "company_statute": "3c98fc2e-41cf-4cc8-852d-7ce6801327ee",
                    "directors_election_minute": "51a26c92-27b8-4b3e-a560-467873e997a6",
                    "email": "kaiqueegiovannacontabilme@yopmail.com",
                    "foundation_date": "2014-08-21",
                    "name": "Kaique e Giovanna Contábil ME",
                    "person_type": "legal",
                    "phone": {
                        "area_code": "19",
                        "country_code": "055",
                        "number": "28235181"
                    },
                    "trading_name": "Kaique e Giovanna Contábil ME"
                },
                "allowed_user": {
                    "email": "priscila.barros@yopmail.com",
                    "individual_document_number": "38689533370",
                    "name": "Priscila Rayssa Barros",
                    "person_type": "natural",
                    "phone": {
                        "area_code": "19",
                        "country_code": "055",
                        "number": "988235181"
                    }
                },
                "automatic_transfer_config": {
                    "transfer_cronstring": "*/5 * * * *",
                    "rule": "split_equal",
                    "rule_configuration": {
                        "destinations": [
                            {
                                "account_branch": "0000",
                                "account_number": "00000",
                                "account_digit": "0",
                                "document_number": "12345678901",
                                "name": "John Sample",
                                "financial_institutions_code_number": "258",
                                "financial_institutions_ispb": "00000"
                            }
                        ]
                    }
                }
            },
            personal_request: {
                "account_owner": {
                    "address": {
                        "city": "Ananindeua",
                        "complement": "complemento",
                        "neighborhood": "Águas Lindas",
                        "number": "660",
                        "postal_code": "67118003",
                        "state": "PA",
                        "street": "Passagem Mariana"
                    },
                    "birth_date": "1990-05-06",
                    "document_identification": "3c98fc2e-41cf-4cc8-852d-7ce6801327ee",
                    "email": "aurora.nogueira@yopmail.com",
                    "individual_document_number": "08141163701",
                    "is_pep": false,
                    "mother_name": "Maria Mariane",
                    "name": "Aurora Simone Catarina Nogueira",
                    "nationality": "Brasileira",
                    "person_type": "natural",
                    "phone": {
                        "area_code": "11",
                        "country_code": "055",
                        "number": "9128281359"
                    },
                    "proof_of_residence": "51a26c92-27b8-4b3e-a560-467873e997a6"
                },
                "automatic_transfer_config": {
                    "transfer_cronstring": "*/5 * * * *",
                    "rule": "split_equal",
                    "rule_configuration": {
                        "destinations": [
                            {
                                "account_branch": "0000",
                                "account_number": "00000",
                                "account_digit": "0",
                                "document_number": "12345678901",
                                "name": "John Sample",
                                "financial_institutions_code_number": "258",
                                "financial_institutions_ispb": "00000"
                            }
                        ]
                    }
                }
            },
            simplied_company_request: {
                "account_owner": {
                    "company_document_number": "01871112000180",
                    "name": "Kaique e Giovanna Contábil ME",
                    "person_type": "legal"
                },
                "allowed_user": {
                    "email": "priscila.barros@yopmail.com",
                    "individual_document_number": "38689533370",
                    "name": "Priscila Rayssa Barros",
                    "person_type": "natural"
                },
                "simplified": true
            },
            simplied_personal_request: {
                "account_owner": {
                    "individual_document_number": "08141163701",
                    "name": "Aurora Simone Catarina Nogueira",
                    "person_type": "natural"
                },
                "simplified": true
            },
            company_status_201: {
                "data": {
                    "account_info": {
                        "account_branch": "0001",
                        "account_digit": "2",
                        "account_number": "61935",
                        "financial_institution_code": "329",
                        "account_key": "ACCOUNT_KEY"
                    },
                    "account_owner": {
                        "document_number": "01871112000180",
                        "name": "Kaique e Giovanna Contábil ME"
                    },
                    "allowed_user": {
                        "document_number": "38689533370",
                        "name": "Priscila Rayssa Barros"
                    }
                },
                "event_datetime": "2019-11-04 14:07:29",
                "key": "647877e0-6b58-47c9-8010-b91c5aaf51d7",
                "status": "waiting_user_acceptance",
                "webhook_type": "account"
            },
            personal_status_201: {
                "data": {
                    "account_info": {
                        "account_branch": "0001",
                        "account_digit": "3",
                        "account_number": "70091",
                        "financial_institution_code": "329",
                        "account_key": "ACCOUNT_KEY"
                    },
                    "account_owner": {
                        "document_number": "08141163701",
                        "name": "Aurora Simone Catarina Nogueira"
                    }
                },
                "event_datetime": "2019-11-04 16:34:41",
                "key": "f834af4d-ab4b-442f-96c9-f9940d8066d4",
                "status": "waiting_user_acceptance",
                "webhook_type": "account"
            }
        },
        list: {
            status_200: {
                "data": [
                    {
                        "account_branch": "0001",
                        "account_credentials": [],
                        "account_digit": "1",
                        "account_documents": [],
                        "account_events": [
                            {
                                "created_at": "2020-07-29T15: 11:52",
                                "new_account_status": {
                                    "created_at": "2019-10-03T20:05:44",
                                    "enumerator": "opened",
                                    "translation_path": "account.AccountStatus.opened"
                                },
                                "old_account_status": null
                            }
                        ],
                        "account_key": "a3e38a0a-55cf-40ca-9c41-560cd3f7c5c5",
                        "account_name": "Escrow",
                        "account_number": "83834",
                        "account_status": {
                            "created_at": "2019-10-03T20:05:44",
                            "enumerator": "opened",
                            "translation_path": "account.AccountStatus.opened"
                        },
                        "account_type": {
                            "created_at": "2019-04-02T19: 10:09",
                            "enumerator": "escrow",
                            "translation_path": "account.AccountType.escrow"
                        },
                        "balance": 0.0,
                        "blocked_balance": 0.0,
                        "blocked_balance_events": [],
                        "created_at": "2020-07-29T15: 11:52",
                        "destinations": [],
                        "fee": 10.0,
                        "is_system_account": false,
                        "owner_document_number": "24643760001",
                        "owner_name": "Abel Souza",
                        "owner_person_key": "ba99b7f1-3db6-4a63-a386-ba2c7f31e784",
                        "requester_key": "ba99b7f1-3db6-4a63-a386-ba2c7f31e784",
                        "requester_name": "Jennifer Aniston",
                        "transactional_limit": null,
                        "webhook_enabled": false
                    }
                ],
                "pagination": {
                    "current_page": 1,
                    "next_page": null,
                    "rows_per_page": 10000,
                    "total_pages": 1,
                    "total_rows": 1
                }
            }
        }
    },
    escrow: {
        post: {
            company_request: {
                "account_owner": {
                    "address": {
                        "city": "São Paulo",
                        "complement": "7 andar",
                        "neighborhood": "Vila Clementino",
                        "number": "954",
                        "postal_code": "04041060",
                        "state": "SP",
                        "street": "Viaduto Onze de Junho"
                    },
                    "cnae_code": "6499-9/99",
                    "company_document_number": "98916615000167",
                    "company_representatives": [
                        {
                            "address": {
                                "city": "Ananindeua",
                                "complement": "complemento",
                                "neighborhood": "Águas Lindas",
                                "number": "660",
                                "postal_code": "67118003",
                                "state": "PA",
                                "street": "Passagem Mariana"
                            },
                            "birth_date": "1990-05-06",
                            "document_identification": "3c98fc2e-41cf-4cc8-852d-7ce6801327ee",
                            "email": "priscila.barros@yopmail.com",
                            "individual_document_number": "38689533370",
                            "is_pep": false,
                            "mother_name": "Maria Mariane",
                            "name": "Priscila Rayssa Barros",
                            "nationality": "Brasileira",
                            "person_type": "natural",
                            "phone": {
                                "area_code": "11",
                                "country_code": "055",
                                "number": "9128281359"
                            },
                            "proof_of_residence": "51a26c92-27b8-4b3e-a560-467873e997a6"
                        },
                        {
                            "address": {
                                "city": "Ananindeua",
                                "complement": "complemento",
                                "neighborhood": "Águas Lindas",
                                "number": "660",
                                "postal_code": "67118003",
                                "state": "PA",
                                "street": "Passagem Mariana"
                            },
                            "birth_date": "1990-05-06",
                            "document_identification": "3c98fc2e-41cf-4cc8-852d-7ce6801327ee",
                            "email": "caio.dias@yopmail.com",
                            "individual_document_number": "85324558400",
                            "is_pep": false,
                            "mother_name": "Maria Mariane",
                            "name": "Caio Bruno Dias",
                            "nationality": "Brasileira",
                            "person_type": "natural",
                            "phone": {
                                "area_code": "11",
                                "country_code": "055",
                                "number": "9128281359"
                            },
                            "proof_of_residence": "51a26c92-27b8-4b3e-a560-467873e997a6"
                        }
                    ],
                    "company_statute": "226382f3-2fed-4ada-b51a-2c9ff2cb561c",
                    "directors_election_minute": "f260d6f8-1ed3-4039-9cfa-8aa6c056c700",
                    "email": "treinamento@aliceeisisadvocaciame.com.br",
                    "foundation_date": "2014-10-08",
                    "name": "Alice e Isis Advocacia ME",
                    "person_type": "legal",
                    "phone": {
                        "area_code": "11",
                        "country_code": "55",
                        "number": "999999999"
                    },
                    "trading_name": "Alice e Isis Advocacia"
                },
                "account_manager": {
                    "address": {
                        "city": "São Paulo",
                        "complement": "7 andar",
                        "neighborhood": "Jardim Paulistano",
                        "number": "2391",
                        "postal_code": "01452960",
                        "state": "SP",
                        "street": "Av. Brigadeiro Faria Lima"
                    },
                    "cnae_code": "6499-9/99",
                    "company_document_number": "09456933000162",
                    "company_representatives": [
                        {
                            "address": {
                                "city": "Ananindeua",
                                "complement": "complemento",
                                "neighborhood": "Águas Lindas",
                                "number": "660",
                                "postal_code": "67118003",
                                "state": "PA",
                                "street": "Passagem Mariana"
                            },
                            "birth_date": "1990-05-06",
                            "document_identification": "3c98fc2e-41cf-4cc8-852d-7ce6801327ee",
                            "email": "aurora.nogueira@yopmail.com",
                            "individual_document_number": "08141163701",
                            "is_pep": false,
                            "mother_name": "Maria Mariane",
                            "name": "Aurora Simone Catarina Nogueira",
                            "nationality": "Brasileira",
                            "person_type": "natural",
                            "phone": {
                                "area_code": "11",
                                "country_code": "055",
                                "number": "9128281359"
                            },
                            "proof_of_residence": "51a26c92-27b8-4b3e-a560-467873e997a6"
                        }
                    ],
                    "company_statute": "226382f3-2fed-4ada-b51a-2c9ff2cb561c",
                    "directors_election_minute": "f260d6f8-1ed3-4039-9cfa-8aa6c056c700",
                    "email": "kaiqueegiovannacontabilme@yopmail.com",
                    "foundation_date": "2014-08-21",
                    "name": "Kaique e Giovanna Contábil ME",
                    "person_type": "legal",
                    "phone": {
                        "area_code": "11",
                        "country_code": "55",
                        "number": "999999999"
                    },
                    "trading_name": "Kaique e Giovanna Contábil ME"
                },
                "allowed_user": {
                    "email": "renato.pinto@yopmail.com",
                    "individual_document_number": "13708610440",
                    "name": "Renato Noah Pinto",
                    "person_type": "natural",
                    "phone": {
                        "area_code": "11",
                        "country_code": "055",
                        "number": "9128281359"
                    }
                },
                "destination_list": [
                    {
                        "account_branch": "0001",
                        "account_digit": "2",
                        "account_number": "532312",
                        "document_number": "49067117153",
                        "financial_institutions_code_number": "341",
                        "name": "Juan Anthony Farias"
                    },
                    {
                        "account_branch": "0002",
                        "account_digit": "9",
                        "account_number": "537612",
                        "document_number": "39063217000123",
                        "financial_institutions_code_number": "033",
                        "name": "Farias Advogados"
                    }
                ],
                "automatic_transfer_config": {
                    "transfer_cronstring": "*/5 * * * *",
                    "rule": "split_equal",
                    "rule_configuration": {
                        "destinations": [
                            {
                                "account_branch": "0000",
                                "account_number": "00000",
                                "account_digit": "0",
                                "document_number": "12345678901",
                                "name": "John Sample",
                                "financial_institutions_code_number": "258",
                                "financial_institutions_ispb": "00000"
                            }
                        ]
                    }
                }
            },
            personal_request: {
                "account_owner": {
                    "address": {
                        "city": "Ananindeua",
                        "complement": "complemento",
                        "neighborhood": "Águas Lindas",
                        "number": "660",
                        "postal_code": "67118003",
                        "state": "PA",
                        "street": "Passagem Mariana"
                    },
                    "birth_date": "1990-05-06",
                    "document_identification": "3c98fc2e-41cf-4cc8-852d-7ce6801327ee",
                    "email": "caio.dias@yopmail.com",
                    "individual_document_number": "85324558400",
                    "is_pep": false,
                    "mother_name": "Maria Mariane",
                    "name": "Caio Bruno Dias",
                    "nationality": "Brasileira",
                    "person_type": "natural",
                    "phone": {
                        "country_code": "055",
                        "area_code": "11",
                        "number": "9128281359"
                    },
                    "proof_of_residence": "51a26c92-27b8-4b3e-a560-467873e997a6"
                },
                "account_manager": {
                    "address": {
                        "city": "São Paulo",
                        "complement": "7 andar",
                        "neighborhood": "Jardim Paulistano",
                        "number": "2391",
                        "postal_code": "01452960",
                        "state": "SP",
                        "street": "Av. Brigadeiro Faria Lima"
                    },
                    "cnae_code": "6499-9/99",
                    "company_document_number": "09456933000162",
                    "company_representatives": [
                        {
                            "address": {
                                "city": "Ananindeua",
                                "complement": "complemento",
                                "neighborhood": "Águas Lindas",
                                "number": "660",
                                "postal_code": "67118003",
                                "state": "PA",
                                "street": "Passagem Mariana"
                            },
                            "birth_date": "1990-05-06",
                            "document_identification": "3c98fc2e-41cf-4cc8-852d-7ce6801327ee",
                            "email": "aurora.nogueira@yopmail.com",
                            "individual_document_number": "08141163701",
                            "is_pep": false,
                            "mother_name": "Maria Mariane",
                            "name": "Aurora Simone Catarina Nogueira",
                            "nationality": "Brasileira",
                            "person_type": "natural",
                            "phone": {
                                "area_code": "11",
                                "country_code": "055",
                                "number": "9128281359"
                            },
                            "proof_of_residence": "51a26c92-27b8-4b3e-a560-467873e997a6"
                        }
                    ],
                    "company_statute": "226382f3-2fed-4ada-b51a-2c9ff2cb561c",
                    "directors_election_minute": "f260d6f8-1ed3-4039-9cfa-8aa6c056c700",
                    "email": "kaiqueegiovannacontabilme@yopmail.com",
                    "foundation_date": "2014-08-21",
                    "name": "Kaique e Giovanna Contábil ME",
                    "person_type": "legal",
                    "phone": {
                        "area_code": "11",
                        "country_code": "55",
                        "number": "999999999"
                    },
                    "trading_name": "Kaique e Giovanna Contábil ME"
                },
                "destination_list": [
                    {
                        "account_branch": "0001",
                        "account_digit": "2",
                        "account_number": "532312",
                        "document_number": "49067117153",
                        "financial_institutions_code_number": "341",
                        "name": "Juan Anthony Farias"
                    },
                    {
                        "account_branch": "0002",
                        "account_digit": "9",
                        "account_number": "537612",
                        "document_number": "49067117153",
                        "financial_institutions_code_number": "033",
                        "name": "Juan Anthony Farias"
                    }
                ],
                "automatic_transfer_config": {
                    "transfer_cronstring": "*/5 * * * *",
                    "rule": "split_equal",
                    "rule_configuration": {
                        "destinations": [
                            {
                                "account_branch": "0000",
                                "account_number": "00000",
                                "account_digit": "0",
                                "document_number": "12345678901",
                                "name": "John Sample",
                                "financial_institutions_code_number": "258",
                                "financial_institutions_ispb": "00000"
                            }
                        ]
                    }
                }
            },
            simplied_company_request: {
                "simplified": true,
                "account_manager": {
                    "company_document_number": "95933731000104",
                    "company_representatives": [
                        {
                            "email": "account.manager@yopmail.com",
                            "individual_document_number": "91875761390",
                            "name": "Nuno Yuzo Sakaguti Reis",
                            "person_type": "natural"
                        }
                    ],
                    "email": "account.manager.pj@yopmail.com",
                    "name": "Kaique e Giovanna Contábil ME",
                    "person_type": "legal"
                },
                "account_owner": {
                    "company_document_number": "70566633000147",
                    "company_representatives": [
                        {
                            "email": "account.owner@yopmail.com",
                            "individual_document_number": "52295172985",
                            "name": "Priscila Rayssa Barros",
                            "person_type": "natural"
                        }
                    ],
                    "email": "account.owner.pj@yopmail.com",
                    "name": "Exelcior Advocacia ME 5",
                    "person_type": "legal"
                },
                "allowed_user": {
                    "email": "account.owner.user@yopmail.com",
                    "individual_document_number": "56000564430",
                    "name": "Dennis Dejay",
                    "person_type": "natural"
                },
                "destination_list": [
                    {
                        "account_branch": "0001",
                        "account_digit": "2",
                        "account_number": "532312",
                        "document_number": "49067117153",
                        "financial_institutions_code_number": "341",
                        "name": "Juan Anthony Farias"
                    }
                ]
            },
            simplied_personal_request: {
                "account_manager": {
                    "company_document_number": "58434704000152",
                    "company_representatives": [
                        {
                            "email": "account.manager@yopmail.com",
                            "individual_document_number": "37951518484",
                            "name": "Johnny Bravo",
                            "person_type": "natural"
                        }
                    ],
                    "email": "account.manager.pj@yopmail.com",
                    "name": "Loja de bolos",
                    "person_type": "legal"
                },
                "account_owner": {
                    "email": "account.owner@yopmail.com",
                    "individual_document_number": "60282332936",
                    "name": "Ferdinand Georg Frobenius",
                    "person_type": "natural"
                },
                "allowed_user": {
                    "email": "priscila.barros@yopmail.com",
                    "individual_document_number": "38689533370",
                    "name": "Priscila Rayssa Barros",
                    "person_type": "natural"
                },
                "destination_list": [
                    {
                        "account_branch": "0001",
                        "account_digit": "5",
                        "account_number": "49579",
                        "document_number": "03470727000473",
                        "financial_institutions_code_number": "329",
                        "name": "Ford Nuno LTDA",
                        "ted_account_type": "checking_account"
                    }
                ],
                "simplified": true
            },
            company_status_201: {
                "data": {
                    "account_info": {
                        "account_branch": "0001",
                        "account_digit": "3",
                        "account_number": "66777",
                        "financial_institution_code": "329"
                    },
                    "account_manager": {
                        "company_representatives": [
                            {
                                "document_number": "08141163701",
                                "name": "Aurora Simone Catarina Nogueira"
                            }
                        ],
                        "document_number": "09456933000162",
                        "name": "Kaique e Giovanna Contábil ME"
                    },
                    "account_owner": {
                        "company_representatives": [
                            {
                                "document_number": "38689533370",
                                "name": "Priscila Rayssa Barros"
                            },
                            {
                                "document_number": "85324558400",
                                "name": "Caio Bruno Dias"
                            }
                        ],
                        "document_number": "98916615000167",
                        "name": "Alice e Isis Advocacia ME"
                    },
                    "allowed_transfer_account_list": [
                        {
                            "account_branch": "0001",
                            "account_digit": "2",
                            "account_number": "532312",
                            "document_number": "49067117153",
                            "financial_institution": {
                                "code": 341,
                                "ispb": 60701190,
                                "name": "Itaú Unibanco  S.A."
                            },
                            "name": "Juan Anthony Farias"
                        },
                        {
                            "account_branch": "0002",
                            "account_digit": "9",
                            "account_number": "537612",
                            "document_number": "39063217000123",
                            "financial_institution": {
                                "code": 33,
                                "ispb": 90400888,
                                "name": "Banco Santander (Brasil) S. A."
                            },
                            "name": "Farias Advogados"
                        }
                    ],
                    "allowed_user": {
                        "document_number": "13708610440",
                        "name": "Renato Noah Pinto"
                    }
                },
                "event_datetime": "2019-11-07 18: 15:07",
                "key": "61341599-790b-4236-b42f-060634eba88f",
                "status": "waiting_administrator_approval",
                "webhook_type": "escrow"
            },
            personal_status_201: {
                "data": {
                    "account_info": {
                        "account_branch": "0001",
                        "account_digit": "0",
                        "account_number": "22134",
                        "financial_institution_code": "329"
                    },
                    "account_manager": {
                        "company_representatives": [
                            {
                                "document_number": "08141163701",
                                "name": "Aurora Simone Catarina Nogueira"
                            }
                        ],
                        "document_number": "09456933000162",
                        "name": "Kaique e Giovanna Contábil ME"
                    },
                    "account_owner": {
                        "document_number": "85324558400",
                        "name": "Caio Bruno Dias"
                    },
                    "allowed_transfer_account_list": [
                        {
                            "account_branch": "0001",
                            "account_digit": "2",
                            "account_number": "532312",
                            "document_number": "49067117153",
                            "financial_institution": {
                                "code": 341,
                                "ispb": 60701190,
                                "name": "Itaú Unibanco  S.A."
                            },
                            "name": "Juan Anthony Farias"
                        },
                        {
                            "account_branch": "0002",
                            "account_digit": "9",
                            "account_number": "537612",
                            "document_number": "49067117153",
                            "financial_institution": {
                                "code": 33,
                                "ispb": 90400888,
                                "name": "Banco Santander (Brasil) S. A."
                            },
                            "name": "Juan Anthony Farias"
                        }
                    ]
                },
                "event_datetime": "2019-11-07 18: 19:07",
                "key": "6e033025-c779-4432-9854-30457cba5ad2",
                "status": "waiting_administrator_approval",
                "webhook_type": "escrow"
            }
        }
    },
    financial_institute: {
        list: {
            pagining_status_200: {
                "data": [
                    {
                        "compe_number": "001",
                        "created_at": "2019-06-19T17:31:51",
                        "is_active": true,
                        "is_compe_participant": true,
                        "ispb_number": "00000000",
                        "name": "Banco do Brasil S.A.",
                        "str_start_date": "2002-04-22"
                    },
                    {
                        "compe_number": "070",
                        "created_at": "2019-06-19T17:31:51",
                        "is_active": true,
                        "is_compe_participant": true,
                        "ispb_number": "00000208",
                        "name": "Banco de Brasília S.A.",
                        "str_start_date": "2002-04-22"
                    }
                ],
                "pagination": {
                    "current_page": 1,
                    "next_page": 2,
                    "rows_per_page": 2,
                    "total_pages": 115,
                    "total_rows": 230
                }
            },
            status_200: {
                "00000000": {
                    "compe_number": "001",
                    "is_active": true,
                    "is_compe_participant": true,
                    "ispb_number": "00000000",
                    "name": "Banco do Brasil S.A.",
                    "str_start_date": "2002-04-22"
                },
                "94968518": {
                    "compe_number": "289",
                    "is_active": true,
                    "is_compe_participant": false,
                    "ispb_number": "94968518",
                    "name": "Decyseo Corretora de Câmbio Ltda.",
                    "str_start_date": "2019-03-14"
                }
            }
        }
    },
    bank_slip: {
        get: {
            request: {},
            status_200: {
                "amount": 3.0,
                "asset_type": {
                    "created_at": "2019-02-01T16:44: 11",
                    "enumerator": "invoice",
                    "translation_path": "bank_slip.AssetType.invoice"
                },
                "automatic_bankruptcy_protest": true,
                "automatic_protest": false,
                "automatic_write_off": false,
                "bank_slip_file": [],
                "bank_slip_key": "96b32f1a-c2bd-41a4-b4b1-a169235be68b",
                "bank_slip_status": {
                    "created_at": "2019-02-01T16:44:07",
                    "enumerator": "accepted",
                    "translation_path": "bank_slip.BankSlipStatus.accepted"
                },
                "bank_teller_instructions": "Não aceitar após vencimento",
                "beneficiary_account_branch": "0001",
                "beneficiary_account_key": "7cc3b1f7-8015-4073-8471-a3ba57e34975",
                "beneficiary_account_number": "67049",
                "beneficiary_document_number": "12345678905",
                "beneficiary_key": "b91195e3-0cf4-4fed-90cf-7f5bef29c2f0",
                "beneficiary_name": "Greg Brown",
                "billing_account_key": "7cc3b1f7-8015-4073-8471-a3ba57e34975",
                "business_date_expiration": "2020-06-01",
                "created_at": "2020-05-15T21:00:25",
                "days_before_fine": null,
                "days_before_interest": null,
                "days_to_bankruptcy_protest": 1,
                "days_to_protest": null,
                "days_to_write_off": null,
                "discount_limit_date": null,
                "discount_value": null,
                "document_number": "123456/01",
                "expenses": [],
                "expiration": "2020-06-01",
                "fine_percentage": 0.1,
                "guarantor_address": null,
                "guarantor_city": null,
                "guarantor_document": null,
                "guarantor_name": null,
                "guarantor_person_type": null,
                "guarantor_postal_code": "00000000",
                "guarantor_state": null,
                "historical_our_number": 2,
                "institution_registration_date": null,
                "interest_daily_value": 0.34,
                "lock_origin_type": null,
                "nfe_key": null,
                "nfe_url": null,
                "occurrences": [
                    {
                        "created_at": "2020-05-15T21:00:25",
                        "discount_amount": null,
                        "discount_limit_date": null,
                        "iof_amount": null,
                        "new_bank_slip_status": null,
                        "new_due_date": "2020-06-01",
                        "new_protest_status": {
                            "created_at": "2019-02-01T16:44:08",
                            "enumerator": "not_protested",
                            "translation_path": "bank_slip.ProtestStatus.not_protested"
                        },
                        "notary_office_number": null,
                        "notary_office_protocol": null,
                        "occurrence_expenses": null,
                        "occurrence_feedback": null,
                        "occurrence_key": "c3ab3e01-f198-4e7e-9e01-7a8091b8bd72",
                        "occurrence_reasons": [],
                        "occurrence_type": {
                            "created_at": "2019-02-01T16:44: 14",
                            "enumerator": "registration",
                            "translation_path": "bank_slip.OccurrenceType.registration"
                        },
                        "old_bank_slip_status": {
                            "created_at": "2019-02-01T16:44:07",
                            "enumerator": "accepted",
                            "translation_path": "bank_slip.BankSlipStatus.accepted"
                        },
                        "old_due_date": null,
                        "old_protest_status": null,
                        "paid_amount": null,
                        "paid_fine_amount": null,
                        "paid_interest_amount": null,
                        "payment_bank": null,
                        "payment_branch": null,
                        "payment_credit_date": null,
                        "payment_method": null,
                        "payment_origin": null,
                        "protest_confirmation": null,
                        "protest_expenses": null,
                        "rebate_amount": null,
                        "registration_institution_occurrence_date": "2020-05-15",
                        "registration_institution_occurrence_event": [
                            {
                                "cnab_file": {
                                    "cnab_key": "abfc9fba-28fb-4e75-afcb-f4647d7031bc",
                                    "company_code": null,
                                    "created_at": "2020-05-15T21:00:22",
                                    "downloads": [],
                                    "file_size": "None",
                                    "filename": null,
                                    "line_length": null,
                                    "remitter_key": "b91195e3-0cf4-4fed-90cf-7f5bef29c2f0",
                                    "requester_profile_code": null,
                                    "type": {
                                        "created_at": "2019-02-01T16:44: 17",
                                        "enumerator": "api_instruction",
                                        "translation_path": "bank_slip.CNABFileType.api_instruction"
                                    },
                                    "url": null,
                                    "version": null
                                },
                                "cnab_file_occurrence_order": 1,
                                "created_at": "2020-05-15T21:00:25",
                                "new_status": {
                                    "created_at": "2019-02-01T16:44: 15",
                                    "enumerator": "waiting_submission",
                                    "translation_path": "bank_slip.RegistrationInstitutionOccurrenceStatus.waiting_submission"
                                },
                                "old_status": null
                            }
                        ],
                        "registration_institution_occurrence_status": {
                            "created_at": "2019-02-01T16:44: 15",
                            "enumerator": "waiting_submission",
                            "translation_path": "bank_slip.RegistrationInstitutionOccurrenceStatus.waiting_submission"
                        },
                        "requester_occurrence_event": [
                            {
                                "cnab_file": {
                                    "cnab_key": "abfc9fba-28fb-4e75-afcb-f4647d7031bc",
                                    "company_code": null,
                                    "created_at": "2020-05-15T21:00:22",
                                    "downloads": [],
                                    "file_size": "None",
                                    "filename": null,
                                    "line_length": null,
                                    "remitter_key": "b91195e3-0cf4-4fed-90cf-7f5bef29c2f0",
                                    "requester_profile_code": null,
                                    "type": {
                                        "created_at": "2019-02-01T16:44: 17",
                                        "enumerator": "api_instruction",
                                        "translation_path": "bank_slip.CNABFileType.api_instruction"
                                    },
                                    "url": null,
                                    "version": null
                                },
                                "cnab_file_occurrence_order": 1,
                                "created_at": "2020-05-15T21:00:25",
                                "new_status": {
                                    "created_at": "2019-02-01T16:44: 16",
                                    "enumerator": "accepted",
                                    "translation_path": "bank_slip.RequesterOccurrenceStatus.accepted"
                                },
                                "old_status": null
                            }
                        ],
                        "requester_occurrence_status": {
                            "created_at": "2019-02-01T16:44: 16",
                            "enumerator": "accepted",
                            "translation_path": "bank_slip.RequesterOccurrenceStatus.accepted"
                        }
                    }
                ],
                "our_number": 2,
                "paid_amount": null,
                "paid_fine_amount": null,
                "paid_interest_amount": null,
                "participant_control_number": null,
                "payer_account_digit": null,
                "payer_account_number": null,
                "payer_account_type": null,
                "payer_address": "Rua Carlos Tampaio, 112",
                "payer_bank": null,
                "payer_branch_digit": null,
                "payer_branch_number": null,
                "payer_document": "45508922008",
                "payer_name": "John Nobody",
                "payer_person_type": {
                    "created_at": "2019-02-01T16:44:09",
                    "enumerator": "natural",
                    "translation_path": "bank_slip.PersonType.natural"
                },
                "payer_postal_code": "00000000",
                "payment_date": null,
                "printing_policy": {
                    "created_at": "2019-02-01T16:44: 10",
                    "enumerator": "no_printing",
                    "translation_path": "bank_slip.PrintingPolicy.no_printing"
                },
                "protest_status": {
                    "created_at": "2019-02-01T16:44:08",
                    "enumerator": "not_protested",
                    "translation_path": "bank_slip.ProtestStatus.not_protested"
                },
                "rebate_amount": null,
                "registration_institution": {
                    "created_at": "2020-03-26T19:36: 16",
                    "enumerator": "qi_scd",
                    "febraban_code": "329",
                    "remittance_sequence": 72,
                    "settlement_resource_account_key": "3e46d266-4fdb-4fd2-b87a-3e3de366afd4"
                },
                "requester_profile": 1,
                "requester_profile_code": "329-01-0001-0067049",
                "requester_registration_date": "2020-05-15"
            }
        },
        list: {
            request: {},
            status_200: {
                "data": [
                    {
                        "amount": 3,
                        "asset_type": {
                            "created_at": "2019-02-01T16:44: 11",
                            "enumerator": "invoice",
                            "translation_path": "bank_slip.AssetType.invoice"
                        },
                        "automatic_bankruptcy_protest": true,
                        "automatic_protest": false,
                        "automatic_write_off": false,
                        "bank_slip_file": [],
                        "bank_slip_key": "96b32f1a-c2bd-41a4-b4b1-a169235be68b",
                        "bank_slip_status": {
                            "created_at": "2019-02-01T16:44:07",
                            "enumerator": "accepted",
                            "translation_path": "bank_slip.BankSlipStatus.accepted"
                        },
                        "bank_teller_instructions": "Não aceitar após vencimento",
                        "beneficiary_account_branch": "0001",
                        "beneficiary_account_key": "7cc3b1f7-8015-4073-8471-a3ba57e34975",
                        "beneficiary_account_number": "67049",
                        "beneficiary_document_number": "12345678905",
                        "beneficiary_key": "b91195e3-0cf4-4fed-90cf-7f5bef29c2f0",
                        "beneficiary_name": "Greg Brown",
                        "billing_account_key": "7cc3b1f7-8015-4073-8471-a3ba57e34975",
                        "business_date_expiration": "2020-06-01",
                        "created_at": "2020-05-15T21:00:25",
                        "days_before_fine": null,
                        "days_before_interest": null,
                        "days_to_bankruptcy_protest": 1,
                        "days_to_protest": null,
                        "days_to_write_off": null,
                        "discount_limit_date": null,
                        "discount_value": null,
                        "document_number": "123456/01",
                        "expenses": [],
                        "expiration": "2020-06-01",
                        "fine_percentage": 0.1,
                        "guarantor_address": null,
                        "guarantor_city": null,
                        "guarantor_document": null,
                        "guarantor_name": null,
                        "guarantor_person_type": null,
                        "guarantor_postal_code": "00000000",
                        "guarantor_state": null,
                        "historical_our_number": 2,
                        "institution_registration_date": null,
                        "interest_daily_value": 0.34,
                        "lock_origin_type": null,
                        "nfe_key": null,
                        "nfe_url": null,
                        "occurrences": [
                            {
                                "created_at": "2020-05-15T21:00:25",
                                "discount_amount": null,
                                "discount_limit_date": null,
                                "iof_amount": null,
                                "new_bank_slip_status": null,
                                "new_due_date": "2020-06-01",
                                "new_protest_status": {
                                    "created_at": "2019-02-01T16:44:08",
                                    "enumerator": "not_protested",
                                    "translation_path": "bank_slip.ProtestStatus.not_protested"
                                },
                                "notary_office_number": null,
                                "notary_office_protocol": null,
                                "occurrence_expenses": null,
                                "occurrence_feedback": null,
                                "occurrence_key": "c3ab3e01-f198-4e7e-9e01-7a8091b8bd72",
                                "occurrence_reasons": [],
                                "occurrence_type": {
                                    "created_at": "2019-02-01T16:44: 14",
                                    "enumerator": "registration",
                                    "translation_path": "bank_slip.OccurrenceType.registration"
                                },
                                "old_bank_slip_status": {
                                    "created_at": "2019-02-01T16:44:07",
                                    "enumerator": "accepted",
                                    "translation_path": "bank_slip.BankSlipStatus.accepted"
                                },
                                "old_due_date": null,
                                "old_protest_status": null,
                                "paid_amount": null,
                                "paid_fine_amount": null,
                                "paid_interest_amount": null,
                                "payment_bank": null,
                                "payment_branch": null,
                                "payment_credit_date": null,
                                "payment_method": null,
                                "payment_origin": null,
                                "protest_confirmation": null,
                                "protest_expenses": null,
                                "rebate_amount": null,
                                "registration_institution_occurrence_date": "2020-05-15",
                                "registration_institution_occurrence_event": [
                                    {
                                        "cnab_file": {
                                            "cnab_key": "abfc9fba-28fb-4e75-afcb-f4647d7031bc",
                                            "company_code": null,
                                            "created_at": "2020-05-15T21:00:22",
                                            "downloads": [],
                                            "file_size": "None",
                                            "filename": null,
                                            "line_length": null,
                                            "remitter_key": "b91195e3-0cf4-4fed-90cf-7f5bef29c2f0",
                                            "requester_profile_code": null,
                                            "type": {
                                                "created_at": "2019-02-01T16:44: 17",
                                                "enumerator": "api_instruction",
                                                "translation_path": "bank_slip.CNABFileType.api_instruction"
                                            },
                                            "url": null,
                                            "version": null
                                        },
                                        "cnab_file_occurrence_order": 1,
                                        "created_at": "2020-05-15T21:00:25",
                                        "new_status": {
                                            "created_at": "2019-02-01T16:44: 15",
                                            "enumerator": "waiting_submission",
                                            "translation_path": "bank_slip.RegistrationInstitutionOccurrenceStatus.waiting_submission"
                                        },
                                        "old_status": null
                                    }
                                ],
                                "registration_institution_occurrence_status": {
                                    "created_at": "2019-02-01T16:44: 15",
                                    "enumerator": "waiting_submission",
                                    "translation_path": "bank_slip.RegistrationInstitutionOccurrenceStatus.waiting_submission"
                                },
                                "requester_occurrence_event": [
                                    {
                                        "cnab_file": {
                                            "cnab_key": "abfc9fba-28fb-4e75-afcb-f4647d7031bc",
                                            "company_code": null,
                                            "created_at": "2020-05-15T21:00:22",
                                            "downloads": [],
                                            "file_size": "None",
                                            "filename": null,
                                            "line_length": null,
                                            "remitter_key": "b91195e3-0cf4-4fed-90cf-7f5bef29c2f0",
                                            "requester_profile_code": null,
                                            "type": {
                                                "created_at": "2019-02-01T16:44: 17",
                                                "enumerator": "api_instruction",
                                                "translation_path": "bank_slip.CNABFileType.api_instruction"
                                            },
                                            "url": null,
                                            "version": null
                                        },
                                        "cnab_file_occurrence_order": 1,
                                        "created_at": "2020-05-15T21:00:25",
                                        "new_status": {
                                            "created_at": "2019-02-01T16:44: 16",
                                            "enumerator": "accepted",
                                            "translation_path": "bank_slip.RequesterOccurrenceStatus.accepted"
                                        },
                                        "old_status": null
                                    }
                                ],
                                "requester_occurrence_status": {
                                    "created_at": "2019-02-01T16:44: 16",
                                    "enumerator": "accepted",
                                    "translation_path": "bank_slip.RequesterOccurrenceStatus.accepted"
                                }
                            }
                        ],
                        "our_number": 2,
                        "paid_amount": null,
                        "paid_fine_amount": null,
                        "paid_interest_amount": null,
                        "participant_control_number": null,
                        "payer_account_digit": null,
                        "payer_account_number": null,
                        "payer_account_type": null,
                        "payer_address": "Rua Carlos Tampaio, 112",
                        "payer_bank": null,
                        "payer_branch_digit": null,
                        "payer_branch_number": null,
                        "payer_document": "45508922008",
                        "payer_name": "John Nobody",
                        "payer_person_type": {
                            "created_at": "2019-02-01T16:44:09",
                            "enumerator": "natural",
                            "translation_path": "bank_slip.PersonType.natural"
                        },
                        "payer_postal_code": "00000000",
                        "payment_date": null,
                        "printing_policy": {
                            "created_at": "2019-02-01T16:44: 10",
                            "enumerator": "no_printing",
                            "translation_path": "bank_slip.PrintingPolicy.no_printing"
                        },
                        "protest_status": {
                            "created_at": "2019-02-01T16:44:08",
                            "enumerator": "not_protested",
                            "translation_path": "bank_slip.ProtestStatus.not_protested"
                        },
                        "rebate_amount": null,
                        "registration_institution": {
                            "created_at": "2020-03-26T19:36: 16",
                            "enumerator": "qi_scd",
                            "febraban_code": "329",
                            "remittance_sequence": 72,
                            "settlement_resource_account_key": "3e46d266-4fdb-4fd2-b87a-3e3de366afd4"
                        },
                        "requester_profile": 1,
                        "requester_profile_code": "329-01-0001-0067049",
                        "requester_registration_date": "2020-05-15"
                    }
                ],
                "pagination": {
                    "current_page": 1,
                    "next_page": null,
                    "rows_per_page": 100,
                    "total_pages": 1,
                    "total_rows": 1
                },
                "totals": {
                    "delayed_bank_slip_amount": 0,
                    "delayed_bank_slip_number": 0,
                    "due_bank_slip_amount": 3,
                    "due_bank_slip_number": 2,
                    "paid_bank_slip_amount": 0,
                    "paid_bank_slip_number": 0,
                    "total_bank_slip_amount": 3,
                    "total_bank_slip_number": 1,
                    "written_off_bank_slip_amount": 0,
                    "written_off_bank_slip_number": 0
                }
            }
        },
        report: {
            request: {},
            status_200: excelSampleFile
        }
    },
    bank_slip_pdf: {
        post: {
            request: {},
            status_201: {
                "amount": 3.0,
                "asset_type": {
                    "created_at": "2019-02-01T16:44: 11",
                    "enumerator": "invoice",
                    "translation_path": "bank_slip.AssetType.invoice"
                },
                "automatic_bankruptcy_protest": true,
                "automatic_protest": false,
                "automatic_write_off": false,
                "bank_slip_file": [
                    {
                        "barcode": "32998827300000003000001010000000000200670490",
                        "created_at": "2020-05-19T18:46:41",
                        "digitable_line": "32990001031000000000902006704908882730000000300",
                        "url": "https://linkparadownload.com/arquivo.pdf"
                    }
                ],
                "bank_slip_key": "96b32f1a-c2bd-41a4-b4b1-a169235be68b",
                "bank_slip_status": {
                    "created_at": "2019-02-01T16:44:07",
                    "enumerator": "accepted",
                    "translation_path": "bank_slip.BankSlipStatus.accepted"
                },
                "bank_teller_instructions": "Boleto Teste",
                "beneficiary_account_branch": "0001",
                "beneficiary_account_key": "7cc3b1f7-8015-4073-8471-a3ba57e34975",
                "beneficiary_account_number": "67049",
                "beneficiary_document_number": "12345678905",
                "beneficiary_key": "b91195e3-0cf4-4fed-90cf-7f5bef29c2f0",
                "beneficiary_name": "Greg Brown",
                "billing_account_key": "7cc3b1f7-8015-4073-8471-a3ba57e34975",
                "business_date_expiration": "2020-06-01",
                "created_at": "2020-05-15T21:00:25",
                "days_before_fine": null,
                "days_before_interest": null,
                "days_to_bankruptcy_protest": 1,
                "days_to_protest": null,
                "days_to_write_off": null,
                "discount_limit_date": null,
                "discount_value": null,
                "document_number": "Parcela 1",
                "expenses": [],
                "expiration": "2020-06-01",
                "fine_percentage": 0.1,
                "guarantor_address": null,
                "guarantor_city": null,
                "guarantor_document": null,
                "guarantor_name": null,
                "guarantor_person_type": null,
                "guarantor_postal_code": "00000000",
                "guarantor_state": null,
                "historical_our_number": 2,
                "institution_registration_date": null,
                "interest_daily_value": 0.34,
                "lock_origin_type": null,
                "nfe_key": null,
                "nfe_url": null,
                "occurrences": [
                    {
                        "created_at": "2020-05-15T21:00:25",
                        "discount_amount": null,
                        "discount_limit_date": null,
                        "iof_amount": null,
                        "new_bank_slip_status": null,
                        "new_due_date": "2020-06-01",
                        "new_protest_status": {
                            "created_at": "2019-02-01T16:44:08",
                            "enumerator": "not_protested",
                            "translation_path": "bank_slip.ProtestStatus.not_protested"
                        },
                        "notary_office_number": null,
                        "notary_office_protocol": null,
                        "occurrence_expenses": null,
                        "occurrence_feedback": null,
                        "occurrence_key": "c3ab3e01-f198-4e7e-9e01-7a8091b8bd72",
                        "occurrence_reasons": [],
                        "occurrence_type": {
                            "created_at": "2019-02-01T16:44: 14",
                            "enumerator": "registration",
                            "translation_path": "bank_slip.OccurrenceType.registration"
                        },
                        "old_bank_slip_status": {
                            "created_at": "2019-02-01T16:44:07",
                            "enumerator": "accepted",
                            "translation_path": "bank_slip.BankSlipStatus.accepted"
                        },
                        "old_due_date": null,
                        "old_protest_status": null,
                        "paid_amount": null,
                        "paid_fine_amount": null,
                        "paid_interest_amount": null,
                        "payment_bank": null,
                        "payment_branch": null,
                        "payment_credit_date": null,
                        "payment_method": null,
                        "payment_origin": null,
                        "protest_confirmation": null,
                        "protest_expenses": null,
                        "rebate_amount": null,
                        "registration_institution_occurrence_date": "2020-05-15",
                        "registration_institution_occurrence_event": [
                            {
                                "cnab_file": {
                                    "cnab_key": "abfc9fba-28fb-4e75-afcb-f4647d7031bc",
                                    "company_code": null,
                                    "created_at": "2020-05-15T21:00:22",
                                    "downloads": [],
                                    "file_size": "None",
                                    "filename": null,
                                    "line_length": null,
                                    "remitter_key": "b91195e3-0cf4-4fed-90cf-7f5bef29c2f0",
                                    "requester_profile_code": null,
                                    "type": {
                                        "created_at": "2019-02-01T16:44: 17",
                                        "enumerator": "api_instruction",
                                        "translation_path": "bank_slip.CNABFileType.api_instruction"
                                    },
                                    "url": null,
                                    "version": null
                                },
                                "cnab_file_occurrence_order": 1,
                                "created_at": "2020-05-15T21:00:25",
                                "new_status": {
                                    "created_at": "2019-02-01T16:44: 15",
                                    "enumerator": "waiting_submission",
                                    "translation_path": "bank_slip.RegistrationInstitutionOccurrenceStatus.waiting_submission"
                                },
                                "old_status": null
                            }
                        ],
                        "registration_institution_occurrence_status": {
                            "created_at": "2019-02-01T16:44: 15",
                            "enumerator": "waiting_submission",
                            "translation_path": "bank_slip.RegistrationInstitutionOccurrenceStatus.waiting_submission"
                        },
                        "requester_occurrence_event": [
                            {
                                "cnab_file": {
                                    "cnab_key": "abfc9fba-28fb-4e75-afcb-f4647d7031bc",
                                    "company_code": null,
                                    "created_at": "2020-05-15T21:00:22",
                                    "downloads": [],
                                    "file_size": "None",
                                    "filename": null,
                                    "line_length": null,
                                    "remitter_key": "b91195e3-0cf4-4fed-90cf-7f5bef29c2f0",
                                    "requester_profile_code": null,
                                    "type": {
                                        "created_at": "2019-02-01T16:44: 17",
                                        "enumerator": "api_instruction",
                                        "translation_path": "bank_slip.CNABFileType.api_instruction"
                                    },
                                    "url": null,
                                    "version": null
                                },
                                "cnab_file_occurrence_order": 1,
                                "created_at": "2020-05-15T21:00:25",
                                "new_status": {
                                    "created_at": "2019-02-01T16:44: 16",
                                    "enumerator": "accepted",
                                    "translation_path": "bank_slip.RequesterOccurrenceStatus.accepted"
                                },
                                "old_status": null
                            }
                        ],
                        "requester_occurrence_status": {
                            "created_at": "2019-02-01T16:44: 16",
                            "enumerator": "accepted",
                            "translation_path": "bank_slip.RequesterOccurrenceStatus.accepted"
                        }
                    }
                ],
                "our_number": 2,
                "paid_amount": null,
                "paid_fine_amount": null,
                "paid_interest_amount": null,
                "participant_control_number": null,
                "payer_account_digit": null,
                "payer_account_number": null,
                "payer_account_type": null,
                "payer_address": "Rua Carlos tampaio, 204",
                "payer_bank": null,
                "payer_branch_digit": null,
                "payer_branch_number": null,
                "payer_document": "41651732825",
                "payer_name": "Beatriz Couto",
                "payer_person_type": {
                    "created_at": "2019-02-01T16:44:09",
                    "enumerator": "natural",
                    "translation_path": "bank_slip.PersonType.natural"
                },
                "payer_postal_code": "00000000",
                "payment_date": null,
                "printing_policy": {
                    "created_at": "2019-02-01T16:44: 10",
                    "enumerator": "no_printing",
                    "translation_path": "bank_slip.PrintingPolicy.no_printing"
                },
                "protest_status": {
                    "created_at": "2019-02-01T16:44:08",
                    "enumerator": "not_protested",
                    "translation_path": "bank_slip.ProtestStatus.not_protested"
                },
                "rebate_amount": null,
                "registration_institution": {
                    "created_at": "2020-03-26T19:36: 16",
                    "enumerator": "qi_scd",
                    "febraban_code": "329",
                    "remittance_sequence": 72,
                    "settlement_resource_account_key": "3e46d266-4fdb-4fd2-b87a-3e3de366afd4"
                },
                "requester_profile": 1,
                "requester_profile_code": "329-01-0001-0067049",
                "requester_registration_date": "2020-05-15"
            }
        },
        list: {
            status_200: [
                {
                    "barcode": "32998827300000003000001010000000000200670490",
                    "created_at": "2020-05-19T18:46:41",
                    "digitable_line": "32990001031000000000902006704908882730000000300",
                    "url": "https://linkparadownload.com/arquivo.pdf"
                }
            ]
        }
    },
    bank_slip_duplicate_balance: {
        get: {
            request: {},
            status_200: {
                "expire_after_90_days": 0,
                "expire_between_31_and_60_days": 0,
                "expire_between_61_and_90_days": 0,
                "expire_in_30_days": 0,
                "expired": 3,
                "expired_in_notary_office": 0,
                "expired_not_in_notary_office": 0,
                "paid": 0,
                "paid_after_due_date": 2,
                "paid_before_due_date": 0,
                "paid_on_due_date": 0,
                "to_expire": 0,
                "unpaid": 0
            }
        },
        getExcel: {
            request: {},
            status_200: excelSampleFile
        }
    },
    multibank: {
        listCnab: {
            status_200: {
                "data": [
                    {
                        "cnab_key": "47361262-0853-4c51-9c2a-5284e0d8a5e1",
                        "company_code": null,
                        "created_at": "2020-05-06T11:04:25",
                        "downloads": [],
                        "file_size": "None",
                        "filename": "CNAB.RET",
                        "line_length": "400",
                        "remitter_key": "ab871cc8-8369-4b72-95f1-b074b30c7208",
                        "requester_profile_code": "329-01-0001-0000002",
                        "type": {
                            "created_at": "2019-03-12T12:59:32",
                            "enumerator": "requester_discharge",
                            "translation_path": "bank_slip.CNABFileType.requester_discharge"
                        },
                        "url": "https://linkparadownload.com/CNAB.RET",
                        "version": "11"
                    }
                ],
                "pagination": {
                    "current_page": 1,
                    "next_page": null,
                    "rows_per_page": 100,
                    "total_pages": 1,
                    "total_rows": 1
                }
            }
        },
        uploadCnab: {
            request: txtSampleFilePath,
            status_201: {
                "cnab_file": {
                    "cnab_key": "52ff2ea1-a17f-4476-8eb8-617ddd16a81e",
                    "company_code": null,
                    "created_at": "2020-04-17T21:41:09",
                    "downloads": [
                        {
                            "cnab_file_id": 0,
                            "created_at": "2020-04-17T21:41:09",
                            "document_number": "41184562067",
                            "name": "João Ninguem",
                            "person_key": "string"
                        }
                    ],
                    "file_size": "None",
                    "filename": "1905200807.REM",
                    "line_length": 400,
                    "remitter_key": "329",
                    "requester_profile_code": "329-01-0001-0000002",
                    "type": "requester_remittance",
                    "url": "https://google.com",
                    "version": "1"
                },
                "file_info": {
                    "bank_warning_number": 244,
                    "beneficiary_code": "1234567",
                    "beneficiary_name": "QI SOCIEDADE DE CREDITO DIRETO",
                    "credit_date": 190520,
                    "file_type_identifier": 1,
                    "file_type_literal": "REMESSA",
                    "service_code": 1,
                    "service_literal": "COBRANCA",
                    "wrote_at": 180520
                },
                "occurrence_list": [
                    {
                        "amount": "1399.67",
                        "asset_type": "invoice",
                        "automatic_bankruptcy_protest": true,
                        "automatic_protest": false,
                        "automatic_write_off": false,
                        "bank_teller_instructions": "SOMAR OS ENCARGOS PERTINENTES",
                        "beneficiary_account_branch": 1,
                        "beneficiary_account_number": 1273,
                        "beneficiary_account_number_digit": "1",
                        "cnab_file_occurrence_order": 1,
                        "days_before_fine": 0,
                        "days_before_interest": 0,
                        "days_to_bankruptcy_protest": 10,
                        "days_to_protest": 0,
                        "days_to_write_off": 0,
                        "discount_limit_date": "2020-05-14 00:00:00",
                        "discount_value": "0.00",
                        "document_number": "0198874/01",
                        "expiration": "2020-06-18 00:00:00",
                        "fine_percentage": "2.00",
                        "guarantor_address": "AVENIDA DAS AMERICAS, 1321",
                        "guarantor_city": "FAZENDA RIO GRANDE",
                        "guarantor_document_digit": 86,
                        "guarantor_document_root": 80550452,
                        "guarantor_document_subsidiary": 1,
                        "guarantor_name": "PLASTILIT PRODUTOS PLASTICOS DO PARANA S.A.",
                        "guarantor_postal_code_root": 83820,
                        "guarantor_postal_code_suffix": 23,
                        "guarantor_state": "PR",
                        "interest_daily_value": "4.67",
                        "messages": [
                            "SOMAR OS ENCARGOS PERTINENTES"
                        ],
                        "occurrence_cnab_line": 2,
                        "occurrence_feedback": null,
                        "occurrence_sequence": "0",
                        "occurrence_type": "registration",
                        "origin_type": "remittance",
                        "our_number": 109001065,
                        "our_number_digit": "1",
                        "participant_control_number": "700000004167313",
                        "payer_address": "AVENIDA 7 DE SETEMBRO, N. 1043",
                        "payer_document": "77900454000143",
                        "payer_name": "ARLINDO RAGAZZON ME",
                        "payer_person_type": "legal",
                        "payer_postal_code_root": 89874,
                        "payer_postal_code_suffix": 0,
                        "printing_policy": "no_printing",
                        "rebate_amount": "0.00",
                        "registration_institution_enumerator": "bradesco",
                        "registration_institution_febraban_code": "237",
                        "requester_key": "64d3bafa-2205-43ca-b6a7-2827aefe3ebc",
                        "requester_profile": 19,
                        "requester_profile_code": "237-19-0001-0001273",
                        "requester_registration_date": "2020-05-18 00:00:00"
                    }
                ]
            }
        },
        postInstruction: {
            request: {
                "occurrences": [
                    {
                        "amount": 1000,
                        "automatic_bankruptcy_protest": false,
                        "bank_teller_instructions": "Não aceitar após vencimento",
                        "beneficiary_account_key": "8a35e639-8420-4f6c-9647-c2515e5381ef",
                        "beneficiary_key": "3c866e34-23fe-46c2-a8b0-e39ca4348923",
                        "days_to_bankruptcy_protest": 0,
                        "document_number": "123456/01",
                        "expiration": "2020-06-01",
                        "fine_percentage": "3",
                        "interest_daily_value": "0.34",
                        "occurrence_type": "registration",
                        "payer_address": "Rua Carlos Sampaio, 123",
                        "payer_document": "41184562067",
                        "payer_name": "João Ninguem",
                        "payer_person_type": "natural",
                        "payer_postal_code_root": "15800",
                        "payer_postal_code_suffix": "020",
                        "printing_policy": "no_printing",
                        "registration_institution_enumerator": "qi_scd",
                        "requester_profile": 1,
                        "requester_profile_code": "329-01-0001-0000002"
                    }
                ]
            },
            status_201: {
                "bank_slips": [
                    {
                        "amount": "1000",
                        "bank_slip_key": "BANK_SLIP_KEY",
                        "bank_slip_status": "accepted",
                        "beneficiary_account_key": "8a35e639-8420-4f6c-9647-c2515e5381ef",
                        "beneficiary_key": "3c866e34-23fe-46c2-a8b0-e39ca4348923",
                        "expiration": "2020-06-01",
                        "nfe_key": "7c614331-423c-4c51-95ce-7b3962e65359",
                        "nfe_url": "https://google.com",
                        "our_number": 545847,
                        "participant_control_number": null,
                        "payer_postal_code": "15800020",
                        "protest_status": "not_protested"
                    }
                ],
                "file_info": {
                    "beneficiary_code": "1234567",
                    "beneficiary_name": "QI SOCIEDADE DE CREDITO DIRETO",
                    "file_type_identifier": 1,
                    "file_type_literal": "REMESSA",
                    "service_code": 1,
                    "service_literal": "COBRANCA",
                    "wrote_at": 180520
                },
                "occurrence_stats": {
                    "bank_slip_edit": 0,
                    "bankruptcy_protest_request": 0,
                    "cancel_rebate": 0,
                    "extension": 0,
                    "notary_office_entry": 0,
                    "notary_office_exit": 0,
                    "notary_office_payment": 0,
                    "payment": 0,
                    "protest_cancel_and_write_off_request": 0,
                    "protest_cancel_request": 0,
                    "protest_request": 0,
                    "rebate": 0,
                    "registration": 1,
                    "write_off": 0
                },
                "semantic_errors": []
            }
        }
    },
    scr: {
        post: {
            personal_request: {
                "person_type": "natural",
                "name": "Joao Ninguem",
                "document_number": "41184562067",
                "email": "joao.ninguem@yopmail.com",
                "report_start_date": "2019-02",
                "report_end_date": "2020-03"
            },
            company_request: {
                "person_type": "legal",
                "name": "Padaria do Joao Ninguem",
                "document_number": "05305188000108",
                "signers": [
                    {
                        "name": "Diretor 1",
                        "document_number": "41184562067",
                        "email": "diretor1@email.com"
                    },
                    {
                        "name": "Diretor 2",
                        "document_number": "18631260070",
                        "email": "diretor2@email.com"
                    }
                ],
                "report_start_date": "2019-02",
                "report_end_date": "2020-03",
                "check_representatives": true
            },
            status_200: {
                "webhook_type": "scr",
                "key": "OPERATION_KEY",
                "status": "pending_signature",
                "event_datetime": "EVENT_DATE_TIME"
            }
        },
        get: {
            request: "SCR_KEY",
            status_200: {
                "consent_term": null,
                "consulted_at": null,
                "created_at": "2020-04-24",
                "report_end_date": "2020-03",
                "report_start_date": "2020-01",
                "result_document": null,
                "origin_key": "SCR_KEY",
                "scr_status": "pending_signature",
                "signers": [
                    {
                        "name": "Diretor 1",
                        "document_number": "03030230074",
                        "email": "diretor1@email.com"
                    },
                    {
                        "name": "Diretor 2",
                        "document_number": "03030230074",
                        "email": "diretor2@email.com"
                    }
                ],
                "subject_document_number": "05305188000108",
                "subject_name": "Padaria do Joao Ninguem",
                "subject_person_type": "legal"
            }
        },
        list: {
            query: {
                origin_key: "3c061264-923b-451b-a02d-20e342f4b709",
                subject_person_type: "legal",
                subject_document_number: "05305188000108",
                created_at_start_date: "2019-12-31",
                created_at_end_date: "2020-05-03",
                consulted_at_start_date: "2019-12-31",
                consulted_at_end_date: "2020-05-03",
                scr_status: "pending_signature",
                page: 1,
                page_size: 500
            },
            status_200: {
                "data": [
                    {
                        "consent_term": null,
                        "consulted_at": null,
                        "created_at": "2020-04-24",
                        "report_end_date": "2020-03",
                        "report_start_date": "2020-01",
                        "result_document": null,
                        "origin_key": "SCR_KEY",
                        "scr_status": "pending_signature",
                        "signers": [
                            {
                                "name": "Diretor 1",
                                "document_number": "03030230074",
                                "email": "diretor1@email.com"
                            },
                            {
                                "name": "Diretor 2",
                                "document_number": "03030230074",
                                "email": "diretor2@email.com"
                            }
                        ],
                        "subject_document_number": "05305188000108",
                        "subject_name": "Padaria do Joao Ninguem",
                        "subject_person_type": "legal"
                    }
                ],
                "pagination": {
                    "current_page": 1,
                    "next_page": null,
                    "rows_per_page": 100,
                    "total_pages": 1,
                    "total_rows": 55
                }
            }
        },
        delete: {
            request: {
                "scr_key": "SCR_KEY",
                "requester_person_key": "1da2dbd0-af45-4b4d-b685-896e449fa216"
            },
            status_200: {
                "consent_term": null,
                "consulted_at": null,
                "created_at": "2020-04-24",
                "report_end_date": "2020-03",
                "report_start_date": "2020-01",
                "result_document": null,
                "origin_key": "SCR_KEY",
                "scr_status": "canceled",
                "signers": [
                    {
                        "name": "Diretor 1",
                        "document_number": "03030230074",
                        "email": "diretor1@email.com"
                    },
                    {
                        "name": "Diretor 2",
                        "document_number": "03030230074",
                        "email": "diretor2@email.com"
                    }
                ],
                "subject_document_number": "05305188000108",
                "subject_name": "Padaria do Joao Ninguem",
                "subject_person_type": "legal"
            },
            status_400: {},
            status_404: {}
        },
        postRedo: {
            request: {
                "report_start_date": "2019-01",
                "report_end_date": "2019-02",
                "origin_key": "bf6b5e8b-93df-4443-b1fc-d760db6ea4ff"
            },
            status_200: {
                "consent_term": "https://urldasassinaturas.com/assinaturas.zip",
                "consulted_at": "2020-05-08",
                "created_at": "2020-05-08",
                "origin_key": "OPERATION_KEY",
                "report_end_date": "2020-03",
                "report_start_date": "2019-02",
                "result_document": "https://urldodocumento.com/documento_consulta.pdf",
                "scr_key": "SCR_KEY",
                "scr_status": "consulted",
                "signers": [
                    {
                        "document_number": "41184562067",
                        "email": "joao.ninguem@yopmail.com",
                        "name": "Joao Ninguem"
                    }
                ],
                "subject_document_number": "41184562067",
                "subject_name": "Joao Ninguem",
                "subject_person_type": "natural"
            }
        },
        postSigned: {
            request: {
                "person_type": "natural",
                "name": "Felipe Marques da Silva",
                "document_number": "04772395792",
                "email": "felipe.silva@qitech.com.br",
                "report_start_date": "2020-01",
                "report_end_date": "2020-06",
                "signatures": [
                    {
                        "signer": {
                            "name": "Felipe Marques da Silva",
                            "email": "felipe.silva@qitech.com.br",
                            "phone": {
                                "number": "991722315",
                                "area_code": "16",
                                "country_code": "055"
                            },
                            "document_number": "04772395792"
                        },
                        "authenticity": {
                            "ip_address": "179.104.42.245",
                            "session_id": "ddb1d063-4fdf-4330-af9c-3316e9142ff3",
                            "fingerprint": {
                                "campo": "livre"
                            },
                            "third_party_access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5d",
                            "third_party_additional_data": {
                                "campo": "livre"
                            }
                        },
                        "signable_object": {
                            "raw_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum erat et tempus dapibus. Donec eu sapien tortor. Pellentesque et tortor eget erat pulvinar mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ornare diam arcu, sit amet auctor lorem varius quis. Ut pretium venenatis magna sed ultrices. Donec quis tortor odi."
                        }
                    }
                ]
            },
            status_200: {
                "webhook_type": "scr",
                "key": "OPERATION_KEY",
                "status": "pending_signature",
                "event_datetime": "EVENT_DATE_TIME"
            }
        }
    },
    transfer: {
        post: {
            request: {
                "source_account": {
                    "account_branch": "0001",
                    "account_digit": "3",
                    "account_number": "24339",
                    "owner_document_number": "32402502000135"
                },
                "target_account": {
                    "account_branch": "0001",
                    "account_digit": "6",
                    "account_number": "78340",
                    "financial_institution_code": "329",
                    "owner_document_number": "32402502000135",
                    "owner_name": "QI Tech",
                    "target_account_type": "checking_account"
                },
                "transaction_amount": 19000,
                "schedule_date": "2020-08-04"
            },
            ordinary_account_status_200: {
                "data": {
                    "source_account": {
                        "account_branch": "0001",
                        "account_digit": "3",
                        "account_number": "24339",
                        "owner_document_number": "32402502000135"
                    },
                    "target_account": {
                        "account_branch": "0001",
                        "account_digit": "6",
                        "account_number": "78340",
                        "financial_institution_code": "329",
                        "owner_document_number": "32402502000135",
                        "owner_name": "QI Tech"
                    },
                    "transaction_key": "TRANSACTION_KEY",
                    "transaction_amount": 1891268.97
                },
                "event_datetime": "2019-11-28 19:22:04",
                "key": "OPERATION_KEY",
                "status": "success",
                "webhook_type": "wire_transfer"
            },
            escrow_account_status_200: {
                "data": {
                    "requester_document_number": "32402502000135",
                    "source_account": {
                        "account_branch": "0001",
                        "account_digit": "3",
                        "account_number": "24339",
                        "owner_document_number": "32402502000135"
                    },
                    "target_account": {
                        "account_branch": "0001",
                        "account_digit": "6",
                        "account_number": "78340",
                        "financial_institution_code": "329",
                        "owner_document_number": "32402502000135",
                        "owner_name": "QI Tech"
                    },
                    "transaction_amount": 1891268.97
                },
                "event_datetime": "2019-11-28 19:22:04",
                "key": "OPERATION_KEY",
                "status": "waiting_approval",
                "webhook_type": "wire_transfer"
            }
        },
        postApproval: {
            request: {
                "operation_key_list": ["0e241203-8c6b-4e0a-ac42-e0d2a2fc2d37"],
                "feedback": true
            },
            status_200: {
                "data": {
                    "error_list": [],
                    "successful_feedback_list": [
                        {
                            "account_key": "003307e9-d4fd-487d-a07b-84ceab4ad4a9",
                            "approval_feedback": true,
                            "movement_amount": 10,
                            "movement_data": {
                                "agent_person_key": "0bb61530-7f2e-4fe8-819d-8dcfde478a4c",
                                "origin_key": "027944cc-4e15-451e-8a58-330f41ef0f9d",
                                "origin_type": "movement_request",
                                "schedule_date": "2020-08-06",
                                "source_account_key": "003307e9-d4fd-487d-a07b-84ceab4ad4a9",
                                "source_subtype": "outgoing_funds_transfer",
                                "target_account_key": "003307e9-d4fd-487d-a07b-84ceab4ad4a9",
                                "transaction_amount": 10
                            },
                            "movement_date": "2020-08-06",
                            "movement_info": null,
                            "movement_request_key": "027944cc-4e15-451e-8a58-330f41ef0f9d",
                            "movement_status": "approved",
                            "movement_type": "transaction_schedule",
                            "requester_key": "ba99b7f1-3db6-4a63-a386-ba2c7f31e784"
                        },
                        {
                            "account_key": "003307e9-d4fd-487d-a07b-84ceab4ad4a9",
                            "approval_feedback": true,
                            "movement_amount": 10,
                            "movement_data": {
                                "agent_key": "0bb61530-7f2e-4fe8-819d-8dcfde478a4c",
                                "agent_person_key": "0bb61530-7f2e-4fe8-819d-8dcfde478a4c",
                                "observation": "QI TED",
                                "schedule_date": "2020-08-06",
                                "source_account_key": "003307e9-d4fd-487d-a07b-84ceab4ad4a9",
                                "target_data": {
                                    "account": {
                                        "account": "30409",
                                        "account_digit": "6",
                                        "branch": "0001",
                                        "branch_digit": null,
                                        "target_account_type": "checking_account"
                                    },
                                    "bank_code": "123",
                                    "bank_ispb": "11236120",
                                    "person": {
                                        "document_number": "03030230074",
                                        "name": "João Ninguem",
                                        "person_type": "natural"
                                    }
                                },
                                "transaction_amount": 10
                            },
                            "movement_date": "2020-08-06",
                            "movement_info": null,
                            "movement_request_key": "bddcf1ca-181a-49a8-a493-452ebd422814",
                            "movement_status": "approved",
                            "movement_type": "transaction_schedule",
                            "requester_key": "ba99b7f1-3db6-4a63-a386-ba2c7f31e784"
                        }
                    ]
                },
                "event_datetime": "2019-11-28 18:24:26",
                "key": "OPERATION_KEY",
                "status": true,
                "webhook_type": "wire_transfer_approval"
            }
        },
        listPending: {
            status_200: {
                "data": {
                    "movement_request_list": [
                        {
                            "account_key": "003307e9-d4fd-487d-a07b-84ceab4ad4a9",
                            "approval_feedback": null,
                            "movement_amount": 1013.0,
                            "movement_data": {
                                "agent_person_key": "0bb61530-7f2e-4fe8-819d-8dcfde478a4c",
                                "origin_key": "0cc9efd2-5d53-4ac7-8ab3-a2f65c0c5e3b",
                                "origin_type": "movement_request",
                                "source_account_key": "003307e9-d4fd-487d-a07b-84ceab4ad4a9",
                                "source_subtype": "internal_funds_transfer",
                                "target_account_key": "ec87ea6c-31f4-47f1-b16a-11fc39572cb5",
                                "transaction_amount": 1013
                            },
                            "movement_date": "2020-08-04",
                            "movement_info": null,
                            "movement_request_key": "0cc9efd2-5d53-4ac7-8ab3-a2f65c0c5e3b",
                            "movement_status": "submitted",
                            "movement_type": "transaction",
                            "requester_key": "ba99b7f1-3db6-4a63-a386-ba2c7f31e784"
                        },
                        {
                            "account_key": "21af482f-b8ac-48dd-8f9a-ea23429d28be",
                            "approval_feedback": null,
                            "movement_amount": 10.0,
                            "movement_data": {
                                "digitable_line": "65590000020048550000321310771007283400000001000",
                                "resource_account_key": "21af482f-b8ac-48dd-8f9a-ea23429d28be"
                            },
                            "movement_date": "2020-08-05",
                            "movement_info": null,
                            "movement_request_key": "09729b67-8853-4688-ae16-1b878b6629f8",
                            "movement_status": "submitted",
                            "movement_type": "bank_slip_payment",
                            "requester_key": "ba99b7f1-3db6-4a63-a386-ba2c7f31e784"
                        }
                    ]
                },
                "status": "waiting_approval",
                "webhook_type": "pending_movement"
            }
        },
        getReceipt: {
            request: "transaction_key",
            query: {
                pdf: true
            },
            status_200: {
                "origin_key": "f17c219a-e11d-4b5c-b00a-8ee2135f581a",
                "pdf_encoded_string": pdfSampleFile.toString(),
                "source_account": {
                    "account_branch": "0001",
                    "account_digit": "3",
                    "account_number": "00022",
                    "financial_institution_compe_number": 329,
                    "financial_institution_name": "QI Sociedade de Crédito Direto S.A",
                    "owner_document_number": "32402502000135",
                    "owner_document_number_formatted": "32.402.502/0001-35",
                    "owner_name": "QI SCD S.A."
                },
                "source_subtype": "incoming_credit_card_settlement",
                "target_account": {
                    "account_branch": "0001",
                    "account_digit": "0",
                    "account_number": "07834",
                    "financial_institution_compe_number": 329,
                    "financial_institution_name": "QI Sociedade de Crédito Direto S.A",
                    "owner_document_number": "99195609000120",
                    "owner_document_number_formatted": "99.195.609/0001-20",
                    "owner_name": "Giba"
                },
                "transacted_at": "2020-08-07 14:45:51",
                "transacted_at_br": "2020-08-07 11:45:51",
                "transacted_at_br_formatted": "07/08/2020, 11:45:51",
                "transacted_at_formatted": "07/08/2020, 14:45:51",
                "transaction_amount": 93.84,
                "transaction_amount_formatted": "R$ 93,84",
                "transaction_key": "bcebffa1-bab5-45b0-b0a2-894f45fcc004"
            }
        }
    },
    request:
    {
        privateKey: privateKeyFilePath,
        publicKey: publicKeyFilePath,
        upload: {
            request: pdfSampleFilePath,
            status_201_encoded: {
                encoded_body: "eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudF9rZXkiOiI1OGMyNmY4NC04N2VmLTRiYzYtYmJlYi1lMGM1NDQ4NDhmZDUiLCJkb2N1bWVudF9tZDUiOiIxMDlkOWUzM2QxYzFjYmI3ZjNjZTA0OGVmZGM3ODExNyJ9.AcYVYC1oBkUqI_PqO5DPliTdJjd9XIqawSFfzO6zPaXO1xY5fkj9YlYB79RCoiABsses9k6fFjFkd-PLh3SrLdoqAJKSaH1h0rNuSiJSTIIvDjOf3T9v_RiYmlkYiOcmhVraiWptssNzp4sHOlZrrdhcmbXh7PMWI_kXltHMIZAD8hbE"
            },
            status_201: {
                document_key: "58c26f84-87ef-4bc6-bbeb-e0c544848fd5",
                document_md5: "109d9e33d1c1cbb7f3ce048efdc78117"
            },
            status_500: {
                message: "server error"
            }
        }
    }
};
