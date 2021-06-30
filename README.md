[![Build Status](https://travis-ci.com/anaue/qitech.svg?branch=main)](https://travis-ci.com/anaue/qitech)
# QI Tech NodeJs

NodeJs wrapper for QI Tech API.

## Install

```
npm install qitech-wrapper --save
```

## Configuration

Use env vars to config the integration

```
export QITECH_API_CLIENT_KEY=[[QI Tech API Client_Key]]
export QITECH_API_PRIVATE_KEY_PATH=[[client private file path]]
```

## Production Enviroment 

The sandbox environment is default for any value for QITECH_ENV, except `production`

```
## production environment
export QITECH_ENV=production
```


## Example

### POST - UPLOAD

```
const qitech = require('qitech-wrapper');
let filePath = [[document file path]];
qitech.upload.post(filePath, [fileContent])
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

### GET - DEBT 

```
const qitech = require('qitech-wrapper');
query = {};
qitech.debt.get(query)
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

### POST - DEBT SIMULATION

```
const qitech = require('qitech-wrapper');
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
qitech.debt_simulation.post(data)
    .then(response => console.log(response))
    .catch(error => console.error(error));
```


## Content

### UPLOAD
#### POST - UPLOAD
    qitech-wrapper.upload.post(filePath, [fileContent], options)

### Debt
#### POST - Create Debt 
    qitech-wrapper.debt.post(data, options)
#### GET - Show Debt 
    qitech-wrapper.debt.get(query, options)
#### GET - List Debts 
    qitech-wrapper.debt.list(query, options)


### Signed Debt
#### POST - Create Signed Debt 
    qitech-wrapper.signed_debt.post(data, options)
#### GET - Show Signed Debt 
    qitech-wrapper.signed_debt.get(query, options)
#### GET - List Signed Debts 
    qitech-wrapper.signed_debt.list(query, options)

### Debt Simulation
#### POST - Debt Simulation
    qitech-wrapper.debt_simulation.post(data, options)

### Account 
#### POST - Create Account 
    qitech-wrapper.account.post(data, options)
#### GET - List Accounts 
    qitech-wrapper.account.list(query, options)

### Escrow Account 
#### POST - Create Escrow account
    qitech-wrapper.escrow.post(data, options)

### Financial Institute
#### GET - List Financial Institutes
    qitech-wrapper.financial_institute.list(query, options)
