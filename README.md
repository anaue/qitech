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

All API calls returns a Promisse

### GET - DEBT 

```
const qitech_wrapper = require('qitech-wrapper');
query = {};
qitech_wrapper.debt.get(query)
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

Or it can be used with async/await

### POST - DEBT SIMULATION

```
const qitech_wrapper = require('qitech-wrapper');
async function getSimulation() {
  try {
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
    const response = await qitech_wrapper.debt_simulation.post(data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
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
    qitech-wrapper.upload.post(filePath, [fileContent], options);

### Debt
#### POST - Create Debt 
    qitech-wrapper.debt.post(data, options);
#### GET - Show Debt 
    qitech-wrapper.debt.get(query, options);
#### GET - List Debts 
    qitech-wrapper.debt.list(query, options);

### Signed Debt
#### POST - Create Signed Debt 
    qitech-wrapper.signed_debt.post(data, options);
#### GET - Show Signed Debt 
    qitech-wrapper.signed_debt.get(query, options);
#### GET - List Signed Debts 
    qitech-wrapper.signed_debt.list(query, options);

### Debt Simulation
#### POST - Debt Simulation
    qitech-wrapper.debt_simulation.post(data, options);

### Account 
#### POST - Create Account 
    qitech-wrapper.account.post(data, options);
#### GET - List Accounts 
    qitech-wrapper.account.list(query, options);

### Escrow Account 
#### POST - Create Escrow account
    qitech-wrapper.escrow.post(data, options);

### Financial Institute
#### GET - List Financial Institutes
    qitech-wrapper.financial_institute.list(query, options);

### SCR
#### POST - Request SCR Consultation
    qitech-wrapper.scr.post(data, options);
#### POST - Redo SCR Consultation
    qitech-wrapper.scr.post_redo(data, options);
#### GET - List Consultations
    qitech-wrapper.scr.list(query, options);
#### GET - Show Consultation
    qitech-wrapper.scr.get(scr_key, options);
#### DELETE - Cancel Ongoing Consultation
    qitech-wrapper.scr.delete(data, options);

### Bankslip
#### GET - Show Bankslip
    qitech-wrapper.bank_slip.get(bank_slip_key, options);
#### GET - List Bankslips 
    qitech-wrapper.bank_slip.list(person_key, query, options);
#### GET - Get Payments Received Report (Francesinha) 
    qitech-wrapper.bank_slip.report(requester_profile_code, query, options);

### Bankslip Duplicate Balance
#### GET - Get Duplicates Balance 
    qitech-wrapper.bank_slip_duplicate_balance.get(query, options);
#### GET - Get Duplicates Balance - Excel format
    qitech-wrapper.bank_slip_duplicate_balance.get_excel(query, options);

### Bankslip PDF
#### POST - Create Bankslip PDF file
    qitech-wrapper.bank_slip_pdf.post(bank_slip_key, options);
#### GET - List Bankslip PDF files
    qitech-wrapper.bank_slip_pdf.list(bank_slip_key, options);

### Multibank
#### POST - Send Multibank Instructions
    qitech-wrapper.multibank.post_instruction(data, options);
#### POST - Upload CNAB file
    qitech-wrapper.multibank.upload_cnab(filePath, fileContent, options);
#### GET - List CNAB files
    qitech-wrapper.multibank.list_cnab(person_key, options);


### Transfer
#### POST - Request Wire Transfer
    qitech-wrapper.transfer.post(data, options);
#### POST - Approve Escrow Account's Wire Transfer
    qitech-wrapper.transfer.post_approval(data, options);
#### GET - List Pending Transactions
    qitech-wrapper.transfer.list_pending(options);
#### GET - Get Transaction Receipt
    qitech-wrapper.transfer.get_receipt(transaction_key, query, options);


### Financial Institute
#### GET - List Financial Institutes
    qitech-wrapper.financial_institute.list(query, options);
