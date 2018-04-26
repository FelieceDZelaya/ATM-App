"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtmClient_1 = require("./AtmClient");
var atm = new AtmClient_1.AtmClient();
atm.setInitialBalance("123456010220001", 500);
atm.withdrawMoney("123456010220001", 50);
atm.showBalance("123456010220001");
atm.showBalance("123456010220002");
atm.showBalance("123456010220003");
