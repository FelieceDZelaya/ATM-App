import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AtmInterface } from '../interfaces/atm.interface'; 
import { AccountList,AccountModel,TransactionList,TransactionModel } from '../atm/atm.model';
import { InitialData } from '../atm/atm.data';

@Injectable()
export class AtmServiceService {

  private URLEP = 'http://localhost:3000/atm/';

  constructor( public httpCli : HttpClient) { }//Inject httpt client here

  getBalanace(acct : string){
    return this.httpCli.get<AtmInterface>(this.URLEP + acct);
  }

  performWithdrawal(acct : string, amt : number){
    return this.httpCli.get<AtmInterface>(this.URLEP  + 'withdraw/' + acct + '/amount/' + amt);
  }

  performDeposit(acct : string, amt : number){
    return this.httpCli.get<AtmInterface>(this.URLEP  + 'deposit/' + acct + '/amount/' + amt); 
  }

  getLastTransactions(acct : string) {
    return this.httpCli.get<AtmInterface>(this.URLEP  + 'acctTransactions/' + acct);
  }

}
