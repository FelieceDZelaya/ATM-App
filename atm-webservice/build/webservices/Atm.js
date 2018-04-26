"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Accounts_1 = require("../database/Accounts");
const atm_model_1 = require("../models/atm.model");
class Atm {
    constructor() {
        this.express = express();
        this.transactionList = new atm_model_1.TransactionList();
        this.mountRoutes();
    }
    mountRoutes() {
        const atm = express.Router();
        const atmAccount = express.Router();
        const atmWithdraw = express.Router();
        const atmDeposit = express.Router();
        const acctTransactions = express.Router();
        atm.get('/atm', (req, resp) => {
            resp.json({
                status: 0,
                message: 'OK'
            });
        });
        atmAccount.get('/atm/:account', (req, resp) => {
            resp.json({
                account: req.params.account,
                balance: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].bal,
                name: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].name
            });
        });
        atmWithdraw.get('/atm/withdraw/:account/amount/:amount', (req, resp) => {
            //Set Transaction Details
            let newTransaction = new atm_model_1.TransactionModel();
            newTransaction.accountNumber = req.params.account;
            newTransaction.amount = Number(req.params.amount);
            newTransaction.transactionType = 'A10 - ATM Withdrawal';
            //Record Transaction
            this.transactionList.transactions.push(newTransaction);
            console.log(this.transactionList.transactions);
            resp.json({
                account: req.params.account,
                previousbalance: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].bal,
                balance: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].bal - Number(req.params.amount),
                name: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].name,
                status: 0,
                message: 'OK'
            });
        });
        atmDeposit.get('/atm/deposit/:account/amount/:amount', (req, resp) => {
            //Set Transaction Details
            let newTransaction = new atm_model_1.TransactionModel();
            newTransaction.accountNumber = req.params.account;
            newTransaction.amount = Number(req.params.amount);
            newTransaction.transactionType = 'A20 - ATM Deposit';
            //Record Transaction
            this.transactionList.transactions.push(newTransaction);
            console.log(this.transactionList.transactions);
            resp.json({
                account: req.params.account,
                previousbalance: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].bal,
                balance: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].bal + Number(req.params.amount),
                name: Accounts_1.accounts.filter(acc => {
                    return acc.account === req.params.account;
                })[0].name,
                status: 0,
                message: 'OK'
            });
        });
        acctTransactions.get('/atm/acctTransactions/:account', (req, resp) => {
            let txnList = new atm_model_1.TransactionList();
            let acctNum = req.params.account;
            txnList.transactions = this.transactionList.transactions.filter(model => {
                return model.accountNumber == acctNum;
            });
            console.log(txnList.transactions);
            resp.json({
                account: req.params.account,
                lastTransactions: txnList.transactions,
                status: 0,
                message: 'OK'
            });
        });
        this.express.use('/', atm);
        this.express.use('/', atmAccount);
        this.express.use('/', atmWithdraw);
        this.express.use('/', atmDeposit);
        this.express.use('/', acctTransactions);
    }
}
exports.default = new Atm().express;
