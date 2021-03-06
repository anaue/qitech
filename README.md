[![Build Status](https://travis-ci.com/anaue/qitech.svg?branch=main)](https://app.travis-ci.com/github/anaue/qitech)
[![codecov](https://codecov.io/gh/anaue/qitech/branch/main/graph/badge.svg?token=L82OW8J1C8)](https://codecov.io/gh/anaue/qitech)
[![npm version](https://badge.fury.io/js/qitech-wrapper.svg)](https://badge.fury.io/js/qitech-wrapper)

# QI Tech NodeJs

NodeJs wrapper for QI Tech API.

## Install

```
npm install qitech-wrapper --save
```

## Lib Configuration

You have two ways to do the configuration:

1 - Or you can call `qitech_wrapper.setup` method
```
const QITtech = require('qitech-wrapper');
let qitech_wrapper = QITtech({
    clientKey: "QI Tech API Client_Key", 
    privateKey: "user private file path or key", 
    publicKey: "QITECH public file path or key"
});
```

2 - Or you can define env vars directly.
```
export QITECH_API_CLIENT_KEY="QI Tech API Client_Key"
export QITECH_API_PRIVATE_KEY="client private file path or USER PRIVATE KEY"
export QITECH_API_QI_PUBLIC_KEY="QITECH public file path or QI TECH PUBLIC KEY"
```

## Production Environment 

The sandbox environment is default for any value for QITECH_ENV, except `production`

```
## production environment
export QITECH_ENV=production
```

You can either define it in class constructor.
```
const QITtech = require('qitech-wrapper');
let qitech_wrapper = QITtech({
    environment: "production"
});
```


## Example

API calls return a Promisse and optionally accept http options

### GET - DEBT 

You can use async/await
```
const QITtech = require('qitech-wrapper');
let qitech_wrapper = QITtech({
    clientKey: "QI Tech API Client_Key", 
    privateKey: "user private file path or key", 
    publicKey: "QITECH public file path or key"
});
let debtKey = [DEBT_KEY];
async function getDebtSimulation(debtKey) {
    try {
        const response = await qitech_wrapper.debt.get(debtKey);
        console.log(response.decoded.data);
      } catch (error) {
        console.error(error);
      }
}
```

### POST - DEBT SIMULATION

Or you can use then/catch

```
const QITtech = require('qitech-wrapper');
let qitech_wrapper = QITtech({
    clientKey: "QI Tech API Client_Key", 
    privateKey: "user private file path or key", 
    publicKey: "QITECH public file path or key"
});
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
  .then(response => {
    // handle success
    console.log(response.decoded);
  })
  .catch(error => {
    // handle error
    console.error(error.decoded);
  })
  .then(() => {
    // always executed
  });
```

### POST - UPLOAD

```
const QITtech = require('qitech-wrapper');
let qitech_wrapper = QITtech({
    clientKey: "QI Tech API Client_Key", 
    privateKey: "user private file path or key", 
    publicKey: "QITECH public file path or key"
});
let filePath = [path to file, using fs.readFileSync()];
let fileContent = [alternatively, pass the content file];

qitech_wrapper.upload.post(filePath)
    .then(console.log)
    .catch(console.error);
```


## Content

### UPLOAD
#### POST - UPLOAD
    qitech_wrapper.upload.post(filePath, fileContent, options);

### Debt
#### POST - Create Debt 
    qitech_wrapper.debt.post(data, options);
#### GET - Show Debt 
    qitech_wrapper.debt.get(debt_key, options);
#### GET - List Debts 
    qitech_wrapper.debt.list(query, options);
#### POST - Create Signed Debt 
    qitech_wrapper.debt.postSigned(query, options);


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

### SCR
#### POST - Request SCR Consultation
    qitech_wrapper.scr.post(data, options);
#### POST - Redo SCR Consultation
    qitech_wrapper.scr.postRedo(data, options);
#### POST - Record SCR's Signed Authorization
    qitech_wrapper.scr.postSigned(data, options);
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
    qitech_wrapper.bank_slip_duplicate_balance.getExcel(query, options);

### Bankslip PDF
#### POST - Create Bankslip PDF file
    qitech_wrapper.bank_slip_pdf.post(bank_slip_key, options);
#### GET - List Bankslip PDF files
    qitech_wrapper.bank_slip_pdf.list(bank_slip_key, options);

### Multibank
#### POST - Send Multibank Instructions
    qitech_wrapper.multibank.postInstruction(data, options);
#### POST - Upload CNAB file
    qitech_wrapper.multibank.uploadCnab(filePath, fileContent, options);
#### GET - List CNAB files
    qitech_wrapper.multibank.listCnab(person_key, options);


### Transfer
#### POST - Request Wire Transfer
    qitech_wrapper.transfer.post(data, options);
#### POST - Approve Escrow Account's Wire Transfer
    qitech_wrapper.transfer.postApproval(data, options);
#### GET - List Pending Transactions
    qitech_wrapper.transfer.listPending(options);
#### GET - Get Transaction Receipt
    qitech_wrapper.transfer.getReceipt(transaction_key, query, options);


### Financial Institute
#### GET - List Financial Institutes
    qitech_wrapper.financial_institute.list(query, options);
