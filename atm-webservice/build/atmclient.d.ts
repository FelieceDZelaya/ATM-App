import { AtmInterface } from './interfaces/AtmInterface';
export declare class AtmClient implements AtmInterface {
    initialBalance: number;
    currentBalance: number;
    accountNumber: string;
    constructor();
    setInitialBalance(acct: string, balance: number): void;
    showBalance(acct: string): void;
    withdrawMoney(acct: string, amount: number): void;
    depositMoney(acct: string, amount: number): void;
}
