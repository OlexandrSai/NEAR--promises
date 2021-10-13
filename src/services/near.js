import { keyStores, Near, WalletConnection } from "near-api-js";
//utils
import BN from "bn.js";

export const CONTRACT_ID = "dev-1634079752210-92309146803272";
const gas = new BN("70000000000000");

export const near = new Near({
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });

export const wallet = new WalletConnection(near, "promises");


//function  to get all  my promises
export const getPromises = (param) => {
    const  res = wallet.account().functionCall({
        contractId: CONTRACT_ID,
        methodName: "getPromises",
        gas,
        args: {accountId:"alxndrsai.testnet",target:param}
    });
console.log(res)
  return res
}

//function to add new promise
export const makeExtendedPromise = async ({what, viewers, voters}) => {
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: "makeExtendedPromise",
    gas,
    args: {what, viewers, voters}
});
}