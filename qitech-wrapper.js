"use strict";

var Request = require("./src/request");

class QiTech {
    constructor(_opts) {
        let opts = _opts || {};
        this.clientKey = opts.clientKey;
        this.privateKey = opts.privateKey;
        this.publicKey = opts.publicKey;
        this.setupRequest();
    }
    setupRequest() {
        this.request = new Request({
            clientKey: this.clientKey,
            privateKey: this.privateKey,
            publicKey: this.publicKey
        });
    }
    upload() {
        var Upload = require("./src/upload");
        return new Upload(this.request);
    }
    debt() {
        var Debt = require("./src/debt");
        return new Debt(this.request);
    }
    signedDebt() {
        var SignedDebt = require("./src/signed-debt");
        return new SignedDebt(this.request);
    }
    debtSimulation() {
        var DebtSimulation = require("./src/debt-simulation");
        return new DebtSimulation(this.request);
    }
    account() {
        var Account = require("./src/account");
        return new Account(this.request);
    }
    escrow() {
        var Escrow = require("./src/escrow");
        return new Escrow(this.request);
    }
    scr() {
        var Scr = require("./src/scr");
        return new Scr(this.request);
    }
    bankSlip() {
        var BankSlip = require("./src/bank-slip");
        return new BankSlip(this.request);
    }
    bankSlipDuplicateBalance() {
        var BankSlipDuplicateBalance = require("./src/bank-slip-duplicate-balance");
        return new BankSlipDuplicateBalance(this.request);
    }
    bankSlipPdf() {
        var BankSlipPdf = require("./src/bank-slip-pdf");
        return new BankSlipPdf(this.request);
    }
    multibank() {
        var Multibank = require("./src/multibank");
        return new Multibank(this.request);
    }
    transfer() {
        var Transfer = require("./src/wire-transfer");
        return new Transfer(this.request);
    }
    financialInstitute() {
        var FinancialInstitute = require("./src/financial-institute");
        return new FinancialInstitute(this.request);
    }
}
module.exports = function QiTechFn(opts) {
    const _qiTech = new QiTech(opts);
    return {
        upload: _qiTech.upload(),
        debt: _qiTech.debt(),
        signed_debt: _qiTech.signedDebt(),
        debt_simulation: _qiTech.debtSimulation(),
        account: _qiTech.account(),
        escrow: _qiTech.escrow(),
        scr: _qiTech.scr(),
        bank_slip: _qiTech.bankSlip(),
        bank_slip_duplicate_balance: _qiTech.bankSlipDuplicateBalance(),
        bank_slip_pdf: _qiTech.bankSlipPdf(),
        multibank: _qiTech.multibank(),
        transfer: _qiTech.transfer(),
        financial_institute: _qiTech.financialInstitute()
    };
};
