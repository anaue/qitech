const defineEnv = function(clientKey, privateKey, publicKey){
    process.env.QITECH_API_CLIENT_KEY = clientKey;
    process.env.QITECH_API_PRIVATE_KEY = privateKey;
    process.env.QITECH_API_QI_PUBLIC_KEY = publicKey;
};

module.exports = {
    setup: defineEnv,
    request: require('./src/request'),
    upload: require('./src/upload'),
    debt: require('./src/debt'),
    signed_debt: require('./src/signed-debt'),
    debt_simulation: require('./src/debt-simulation'),
    account: require('./src/account'),
    escrow: require('./src/escrow'),
    scr: require('./src/scr'),
    bank_slip: require('./src/bank-slip'),
    bank_slip_duplicate_balance: require('./src/bank-slip-duplicate-balance'),
    bank_slip_pdf: require('./src/bank-slip-pdf'),
    multibank: require('./src/multibank'),
    transfer: require('./src/wire-transfer'),
    financial_institute: require('./src/financial-institute')
};
