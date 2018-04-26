"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Atm_1 = require("./webservices/Atm");
const port = process.env.PORT || 3000;
Atm_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});
