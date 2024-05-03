import ArLocal from "arlocal";
import {topUpWalletBalance} from "./script";
import * as dotenv from 'dotenv';
import * as process from "node:process";

dotenv.config();

const arLocal = new ArLocal(Number(process.env.APP_PORT) || 1984);
(async () => {
    await arLocal.start();

    await topUpWalletBalance();
})();