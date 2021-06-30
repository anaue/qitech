module.exports = {
    request: require('./lib/request'),
    upload: require('./lib/upload'),
    debt: require('./lib/debt'),
    signed_debt: require('./lib/signed-debt'),
    debt_simulation: require('./lib/debt-simulation'),
    account: require('./lib/account'),
    escrow: require('./lib/escrow'),
    scr: require('./lib/scr'),
    bank_slip: require('./lib/bank-slip'),
    bank_slip_duplicate_balance: require('./lib/bank-slip-duplicate-balance'),
    bank_slip_pdf: require('./lib/bank-slip-pdf'),
    multibank: require('./lib/multibank'),
    transfer: require('./lib/wire-transfer'),
    financial_institute: require('./lib/financial-institute'),
    printMsg : function() {
        console.log("This is a message from the demo package");
    }
};