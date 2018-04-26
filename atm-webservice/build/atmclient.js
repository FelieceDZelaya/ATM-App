"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const got = require("got");
class AtmClient {
    constructor() {
    }
    setInitialBalance(acct, balance) {
        got.get("http://localhost:3000/atm").then((data) => {
            console.log("Data from web backend testing " + data.body);
            let result = JSON.parse(data.body);
            console.log(result);
        }, (err) => {
            console.log("Error from web backend " + err.message);
        });
    }
    showBalance(acct) {
        got.get(`http://localhost:3000/atm/${acct}`).then((data) => {
            console.log("Data from web backend " + data.body);
            let result = JSON.parse(data.body);
            console.log(result);
        }, (err) => {
            console.log("Error from web backend " + err.message);
        });
    }
    withdrawMoney(acct, amount) {
        got.get(`http://localhost:3000/atm/withdraw/${acct}/amount/${amount}`).then((data) => {
            console.log("Data from web backend " + data.body);
            let result = JSON.parse(data.body);
            console.log(result);
        }, (err) => {
            console.log("Error from web backend " + err.message);
        });
    }
    depositMoney(acct, amount) {
        got.get(`http://localhost:3000/atm/deposit/${acct}/amount/${amount}`).then((data) => {
            console.log("Data from web backend " + data.body);
            let result = JSON.parse(data.body);
            console.log(result);
        }, (err) => {
            console.log("Error from web backend " + err.message);
        });
    }
}
exports.AtmClient = AtmClient;
