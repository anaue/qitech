[![Build Status](https://travis-ci.com/anaue/qitech.svg?branch=main)](https://travis-ci.com/anaue/qitech)
# QI Tech NodeJs

NodeJs wrapper for QI Tech API.

## Install

```
npm install qitech-wrapper --save
```

## Lib Configuration

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

All API calls returns a Promisse

### GET - DEBT 

```
const qitech_wrapper = require('qitech-wrapper');
let debt_key = [DEBT_KEY];
qitech_wrapper.debt.get(debt_key)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  })
  .then(function () {
    // always executed
  });
```

### POST - DEBT SIMULATION

```
const qitech_wrapper = require('qitech-wrapper');
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
qitech_wrapper.debt_simulation.post(data)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  })
  .then(function () {
    // always executed
  });
```

### POST - UPLOAD

```
const qitech_wrapper = require('qitech-wrapper');
let filePath = [[document file path]];
qitech_wrapper.upload.post(filePath, [fileContent])
    .then(response => console.log(response))
    .catch(error => console.error(error));
```


## Content

### UPLOAD
#### POST - UPLOAD
    qitech_wrapper.upload.post(filePath, [fileContent], options);

### Debt
#### POST - Create Debt 
    qitech_wrapper.debt.post(data, options);
#### GET - Show Debt 
    qitech_wrapper.debt.get(debt_key, options);
#### GET - List Debts 
    qitech_wrapper.debt.list(query, options);

### Signed Debt
#### POST - Create Signed Debt 
    qitech_wrapper.signed_debt.post(data, options);
#### GET - Show Signed Debt 
    qitech_wrapper.signed_debt.get(debt_key, options);
#### GET - List Signed Debts 
    qitech_wrapper.signed_debt.list(query, options);

### Debt Simulation
#### POST - Debt Simulation
    qitech_wrapper.debt_simulation.post(data, options);

### Account 
#### POST - Create Account 
    qitech_wrapper.account.post(data, options);
#### GET - List Accounts 
    qitech_wrapper.account.list(query, options);

### Escrow Account 
#### POST - Create Escrow account
    qitech_wrapper.escrow.post(data, options);

### Financial Institute
#### GET - List Financial Institutes
    qitech_wrapper.financial_institute.list(query, options);

### SCR
#### POST - Request SCR Consultation
    qitech_wrapper.scr.post(data, options);
#### POST - Redo SCR Consultation
    qitech_wrapper.scr.post_redo(data, options);
#### GET - List Consultations
    qitech_wrapper.scr.list(query, options);
#### GET - Show Consultation
    qitech_wrapper.scr.get(scr_key, options);
#### DELETE - Cancel Ongoing Consultation
    qitech_wrapper.scr.delete(data, options);

### Bankslip
#### GET - Show Bankslip
    qitech_wrapper.bank_slip.get(bank_slip_key, options);
#### GET - List Bankslips 
    qitech_wrapper.bank_slip.list(person_key, query, options);
#### GET - Get Payments Received Report (Francesinha) 
    qitech_wrapper.bank_slip.report(requester_profile_code, query, options);

### Bankslip Duplicate Balance
#### GET - Get Duplicates Balance 
    qitech_wrapper.bank_slip_duplicate_balance.get(query, options);
#### GET - Get Duplicates Balance - Excel format
    qitech_wrapper.bank_slip_duplicate_balance.get_excel(query, options);

### Bankslip PDF
#### POST - Create Bankslip PDF file
    qitech_wrapper.bank_slip_pdf.post(bank_slip_key, options);
#### GET - List Bankslip PDF files
    qitech_wrapper.bank_slip_pdf.list(bank_slip_key, options);

### Multibank
#### POST - Send Multibank Instructions
    qitech_wrapper.multibank.post_instruction(data, options);
#### POST - Upload CNAB file
    qitech_wrapper.multibank.upload_cnab(filePath, fileContent, options);
#### GET - List CNAB files
    qitech_wrapper.multibank.list_cnab(person_key, options);


### Transfer
#### POST - Request Wire Transfer
    qitech_wrapper.transfer.post(data, options);
#### POST - Approve Escrow Account's Wire Transfer
    qitech_wrapper.transfer.post_approval(data, options);
#### GET - List Pending Transactions
    qitech_wrapper.transfer.list_pending(options);
#### GET - Get Transaction Receipt
    qitech_wrapper.transfer.get_receipt(transaction_key, query, options);


### Financial Institute
#### GET - List Financial Institutes
    qitech_wrapper.financial_institute.list(query, options);
