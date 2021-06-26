
### POST - UPLOAD


```
const index = require('./index');
let filePath = [[document file path]];
let callback = (response,statusCode) => {
    console.log(statusCode, response);
};
let error = error => {
    console.error('error',error);
};
index.upload(filePath, callback, error);
```

### GET - DEBT 


```
const index = require('./index');
let callback = (response,statusCode) => {
    console.log(statusCode, response);
};
let error = error => {
    console.error('error',error);
}
query = {};
index.debt.get_signed(query, callback, error);
```

### POST - DEBT SIMULATION


```
const index = require('./index');
let data = {
    "borrower": {
        "person_type": "natural"
    },
    "financial": {
        "amount": 5000,
        "interest_type": "pre_price",
        "credit_operation_type": "ccb",
        "annual_interest_rate": 2.32,
        "disbursement_date": "2021-08-06",
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
};
let callback = response => {
    console.log(response);
};
let error = error => {
    console.error('error',error);
}
index.debt.post_simulation(data, callback, error);
```

### POST - DEBT 


```
const index = require('./index');
let data = {
    "borrower":{
       "address":{
          "city":"Teresina",
          "complement":"complemento",
          "neighborhood":"Gurupi",
          "number":"6080",
          "postal_code":"64091210",
          "state":"PI",
          "street":"Br 343"
       },
       "cnae_code":"6499-9/99",
       "company_document_number":"89940878025962",
       "company_representatives":[
          {
             "address":{
                "city":"Recife",
                "complement":null,
                "neighborhood":"Fundão",
                "number":"137",
                "postal_code":"52221110",
                "state":"PE",
                "street":"Rua Camapuã"
             },
             "birth_date":"1972-02-02",
             "document_identification_number":"339122924",
             "email":"pedro.alves@yopmail.com",
             "individual_document_number":"94632180173",
             "is_pep":false,
             "marital_status":"single",
             "mother_name":"Sueli Isadora Alves",
             "name":"Pedro Felipe Henrique Alves",
             "nationality":"Brasileira",
             "person_type":"natural",
             "phone":{
                "area_code":"88",
                "country_code":"055",
                "number":"995924634"
             },
             "profession":"Empresário",
             "property_system":null,
             "spouse":null,
             "wedding_certificate":null,
             "document_identification":"5b18208b-474b-4847-8004-60b117fad1e8",
             "proof_of_residence":"c1b55716-97c2-4bbb-a7d0-15ec24ebdb80"
          }
       ],
       "company_statute":"c1b55716-97c2-4bbb-a7d0-15ec24ebdb80",
       "company_type":"ltda",
       "directors_election_minute":"5b18208b-474b-4847-8004-60b117fad1e8",
       "email":"parmalat@yopmail.com",
       "foundation_date":"2012-01-01",
       "name":"Parmalat",
       "person_type":"legal",
       "phone":{
          "area_code":"11",
          "country_code":"055",
          "number":"999999999"
       },
       "trading_name":"Parmalat"
    },
    "guarantors":[
       {
          "person_type":"natural",
          "name":"Patrícia Tereza Bernardes",
          "mother_name":"Maria Mariane",
          "birth_date":"1990-05-06",
          "profession":"Deputada",
          "nationality":"Brasileira",
          "marital_status":"married",
          "is_pep":true,
          "property_system":"total_communion_of_goods",
          "individual_document_number":"34651104630",
          "document_identification_number":"232479719",
          "email":"patricia.tereza@yopmail.com",
          "phone":{
             "country_code":"055",
             "area_code":"11",
             "number":"9128281359"
          },
          "address":{
             "street":"Passagem Mariana",
             "state":"PA",
             "city":"Ananindeua",
             "neighborhood":"Águas Lindas",
             "number":"660",
             "postal_code":"67118003",
             "complement":"complemento"
          },
          "spouse":null,
          "wedding_certificate":"c1b55716-97c2-4bbb-a7d0-15ec24ebdb80",
          "document_identification":"5b18208b-474b-4847-8004-60b117fad1e8",
          "proof_of_residence":"c1b55716-97c2-4bbb-a7d0-15ec24ebdb80"
       }
    ],
    "disbursement_bank_accounts":[
       {
          "bank_code":"341",
          "branch_number":"7071",
          "account_number":"15570",
          "account_digit":"4",
          "document_number":"94632180173",
          "name":"Pedro Felipe Henrique Alves",
          "percentage_receivable":100
       }
    ],
    "financial":{
       "amount":10000000,
       "annual_interest_rate":2.32,
       "cdi_percentage":100,
       "credit_operation_type":"ccb",
       "disbursement_date":"2021-07-26",
       "issue_date":"2021-07-26",
       "fine_configuration":{
          "contract_fine_rate":0.02,
          "interest_base":"calendar_days",
          "monthly_rate":0.01
       },
       "interest_grace_period":0,
       "interest_type":"cdi_plus",
       "number_of_installments":10,
       "principal_grace_period":0,
       "rebates":[
          {
             "fee_type":"tac",
             "amount_type":"absolute",
             "amount":500
          }
       ]
    },
    "purchaser_document_number":"49194383000175"
};
let callback = response => {
    console.log(response);
};
let error = error => {
    console.error('error',error);
}
index.debt.post(data, callback, error);

```


### POST - ACCOUNT 


```
const index = require('./index');
let data = {
    "account_owner": {
        "address":{
            "city":"Ananindeua",
            "complement":"complemento",
            "neighborhood":"Águas Lindas",
            "number":"660",
            "postal_code":"67118003",
            "state":"PA",
            "street":"Passagem Mariana"
        },
        "birth_date":"1990-05-06",
        "document_identification":"3c98fc2e-41cf-4cc8-852d-7ce6801327ee",
        "email":"aurora.nogueira@yopmail.com",
        "individual_document_number":"08141163701",
        "is_pep":false,
        "mother_name":"Maria Mariane",
        "name":"Aurora Simone Catarina Nogueira",
        "nationality":"Brasileira",
        "person_type":"natural",
        "phone":{
            "area_code":"11",
            "country_code":"055",
            "number":"9128281359"
        },
        "proof_of_residence":"51a26c92-27b8-4b3e-a560-467873e997a6"
    },
    "automatic_transfer_config":{
        "transfer_cronstring": "*/5 * * * *",
        "rule": "split_equal",
        "rule_configuration":{
            "destinations":[
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
};
let callback = response => {
    console.log(response);
};
let error = error => {
    console.error('error',error);
}
index.account.post_account(data, callback, error);
```

### GET - List ACCOUNT 


```
const index = require('./index');
let query = {
};
let callback = (response,statusCode) => {
    console.log(statusCode, response);
};
let error = error => {
    console.error('error',error);
}
index.account.list_accounts(query, callback, error);
```

### POST - ESCROW ACCOUNT


```
const index = require('./index');
let data = {
	"account_manager":{
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
				"email":"aurora.nogueira@yopmail.com",
                "individual_document_number":"08141163701",
                "is_pep":false,
                "mother_name":"Maria Mariane",
                "name":"Aurora Simone Catarina Nogueira",
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
	"destination_list":[
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
    "automatic_transfer_config":{
        "transfer_cronstring": "*/5 * * * *",
        "rule": "split_equal",
        "rule_configuration":{
            "destinations":[
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
};
let callback = response => {
    console.log(response);
};
let error = error => {
    console.error('error',error);
}
index.account.post_escrow(data, callback, error);
```

### POST - Wire Transfer


```
const index = require('./index');
let data = {
	"source_account":{
		"account_branch": "0001",
		"account_digit": "3",
		"account_number": "24339",
		"owner_document_number": "32402502000135"
	},
	"target_account":{
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
};
let callback = response => {
    console.log(response);
};
let error = error => {
    console.error('error',error);
}
index.transfer.post_transfer(data, callback, error);
```


### POST - Wire Transfer Approval

Needed for escrow accounts only

```
const index = require('./index');
let data = {
	"operation_key_list": ["0e241203-8c6b-4e0a-ac42-e0d2a2fc2d37"],
	"feedback": true
};
let callback = response => {
    console.log(response);
};
let error = error => {
    console.error('error',error);
}
index.transfer.post_approval(data, callback, error);
```


### GET - List Pending Transfers


```
const index = require('./index');
let callback = response => {
    console.log(response);
};
let error = error => {
    console.error('error',error);
}
index.transfer.list_pending(callback, error);
```


### GET - get Transfer Receipt


```
const index = require('./index');
let transaction_key = "f17c219a-e11d-4b5c-b00a-8ee2135f581a";
let query = {
    pdf: true
};
let callback = response => {
    console.log(response);
};
let error = error => {
    console.error('error',error);
}
index.transfer.get_receipt(transaction_key, query, callback, error);
```


### POST - SCR


```
const index = require('./index');
let data = {
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
	"report_end_date": "2021-03" ,
    "check_representatives": true
};
let callback = response => {
    console.log(response);
};
let error = error => {
    console.error('error',error);
}
index.scr.post(data, callback, error);
```

### GET - List SCR


```
const index = require('./index');
let query = {};
let callback = response => {
    console.log(response);
};
let error = error => {
    console.error('error',error);
}
index.scr.list(data, callback, error);
```

### GET - SCR


```
const index = require('./index');
let scr_key = "5b18208b-474b-4847-8004-60b117fad1e8";
let query = {};
let callback = response => {
    console.log(response);
};
let error = error => {
    console.error('error',error);
}
index.scr.get(scr_key, query, callback, error);
```

### DELETE - SCR : Cancel ongoing SCR request


```
const index = require('./index');
let data = {
  "scr_key": "5b18208b-474b-4847-8004-60b117fad1e8",
  "requester_person_key": "1da2dbd0-af45-4b4d-b685-896e449fa216"
};
let callback = response => {
    console.log(response);
};
let error = error => {
    console.error('error',error);
}
index.scr.delete(data, callback, error);
```

### POST - REDO SCR


```
const index = require('./index');
let data = {
	"report_start_date": "2019-01",
    "report_end_date": "2019-02",
    "origin_key": "bf6b5e8b-93df-4443-b1fc-d760db6ea4ff"
};
let callback = response => {
    console.log(response);
};
let error = error => {
    console.error('error',error);
}
index.scr.post_redo(data, callback, error);
```

### POST - multibank_instruction 


```
const index = require('./index');
let data = {
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
            "requester_profile_code": "329-01-0001-0000002",
            "notification": [
                {
                    "document_number": "41651730841",
                    "send_on_protest": true,
                    "phone": {
                        "number": "991453747",
                        "area_code": "17",
                        "country_code": "55"
                    },
                    "email": "beatriz.carvalho@qitech.com.br",
                    "send_before_due_date": true,
                    "name": "graziela couto de carvalho",
                    "send_after_due_date": true,
                    "send_2_way": true
                }
            ]
        }
    ]
};
let callback = response => {
    console.log(response);
};
let error = error => {
    console.error('error',error);
}
index.multibank.post_instruction(data, callback, error);
```


### POST - Multibank CNAB : UPLOAD CNAB


```
const index = require('./index');
let filePath = [[document file path]];
let callback = (response,statusCode) => {
    console.log(statusCode, response);
};
let error = error => {
    console.error('error',error);
};
index.multibank.post_instruction(filePath, callback, error);
```


### GET - cnab requester discharge


```
const index = require('./index');
let person_key = "5b18208b-474b-4847-8004-60b117fad1e8";
let callback = (response,statusCode) => {
    console.log(statusCode, response);
};
let error = error => {
    console.error('error',error);
}
index.multibank.get_cnab(person_key, callback, error);
```

### GET - Show bank slip


```
const index = require('./index');
let bank_slip_key = "5b18208b-474b-4847-8004-60b117fad1e8";
let callback = (response,statusCode) => {
    console.log(statusCode, response);
};
let error = error => {
    console.error('error',error);
}
index.multibank.get_bank_slip(bank_slip_key, callback, error);
```

### GET - List bank slips


```
const index = require('./index');
let person_key = "5b18208b-474b-4847-8004-60b117fad1e8";
let query = {
};
let callback = (response,statusCode) => {
    console.log(statusCode, response);
};
let error = error => {
    console.error('error',error);
}
index.multibank.list_bank_slip(person_key, query, callback, error);
```

### POST - 2-way bank slip - generate PDF

```
const index = require('./index');
let bank_slip_key = "5b18208b-474b-4847-8004-60b117fad1e8";
let callback = (response,statusCode) => {
    console.log(statusCode, response);
};
let error = error => {
    console.error('error',error);
}
index.multibank.post_2way_bank_slip(bank_slip_key, callback, error);
```

### GET - 2-way bank slip - get PDF

```
const index = require('./index');
let bank_slip_key = "5b18208b-474b-4847-8004-60b117fad1e8";
let callback = (response,statusCode) => {
    console.log(statusCode, response);
};
let error = error => {
    console.error('error',error);
}
index.multibank.get_2way_bank_slip(bank_slip_key, callback, error);
```


### GET - little french report

```
const index = require('./index');
let requester_profile_code = "5b18208b-474b-4847-8004-60b117fad1e8";
let callback = (response,statusCode) => {
    console.log(statusCode, response);
};
let error = error => {
    console.error('error',error);
}
index.multibank.get_little_french(requester_profile_code, callback, error);
```


### GET - duplicates balance report

```
const index = require('./index');
let query = {};
let callback = (response,statusCode) => {
    console.log(statusCode, response);
};
let error = error => {
    console.error('error',error);
}
index.multibank.get_bank_slip_duplicates_balance(query, callback, error);
```

### GET - duplicates balance excel report

```
const index = require('./index');
let query = {};
let callback = (response,statusCode) => {
    console.log(statusCode, response);
};
let error = error => {
    console.error('error',error);
}
index.multibank.get_bank_slip_duplicates_balance_exce(query, callback, error);
```

### GET - List Financial Institute 


```
const index = require('./index');
let callback = (response,statusCode) => {
    console.log(statusCode, response);
};
let error = error => {
    console.error('error',error);
}
query = {
    ispb_number: "00000000",
    compe_number: "001"
};
index.financial_institute(query, callback, error);
```
