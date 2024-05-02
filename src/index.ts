import ArLocal from "arlocal";
import {topUpWalletBalance} from "./script";

const arLocal = new ArLocal();
(async () => {
    await arLocal.start();

    await topUpWalletBalance();
})();