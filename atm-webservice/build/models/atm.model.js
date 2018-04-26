"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountModel {
    constructor() {
        this.accountNumber = '';
        this.accountBalance = 0;
    }
}
exports.AccountModel = AccountModel;
class AccountList {
    constructor() {
        this.accounts = [];
    }
}
exports.AccountList = AccountList;
class TransactionModel {
    constructor() {
        this.accountNumber = '';
        this.dateOfTransaction = new Date();
        this.transactionType = '';
        this.amount = 0;
    }
}
exports.TransactionModel = TransactionModel;
class TransactionList {
    constructor() {
        this.transactions = [];
    }
}
exports.TransactionList = TransactionList;
