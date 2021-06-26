# QI Tech NodeJs

NodeJs wrapper for QI Tech API.

## Configuration

Use env vars to config the integration

```
export QITECH_API_CLIENT_KEY=[[QI Tech API Client_Key]]
export QITECH_API_PRIVATE_KEY_PATH=[[client private file path]]
```

## Production Enviroment 

The sandbox environemt is default for any value for QITECH_ENV, except `production`

```
## production environment
export QITECH_ENV=production
```


## Example

### POST - UPLOAD


```
const qitech = require('qitech-wrapper');
let filePath = [[document file path]];
let callback = (response,statusCode) => {
    console.log(statusCode, response);
};
let error = error => {
    console.error('error',error);
};
qitech.upload(filePath, callback, error);
```

### GET - DEBT 


```
const qitech = require('qitech-wrapper');
let callback = (response,statusCode) => {
    console.log(statusCode, response);
};
let error = error => {
    console.error('error',error);
}
query = {};
qitech.debt.get_signed(query, callback, error);
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
let callback = response => {
    console.log(response);
};
let error = error => {
    console.error('error',error);
}
qitech.debt.post_simulation(data, callback, error);
```
