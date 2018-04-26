export declare class AccountModel {
    accountNumber: string;
    accountBalance: number;
}
export declare class AccountList {
    accounts: Array<AccountModel>;
}
export declare class TransactionModel {
    accountNumber: string;
    dateOfTransaction: Date;
    transactionType: string;
    amount: number;
}
export declare class TransactionList {
    transactions: Array<TransactionModel>;
}
