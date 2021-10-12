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
export const getPromises = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "getPromises", {target:"me"})
}

//function to add new promise
export const makeExtendedPromise = ({what, viewers, voters}) => {
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: "makeExtendedPromise",
    gas,
    args: {what, viewers, voters}
});
}

// export const getComplaints = () => {
//   return wallet.account().viewFunction(CONTRACT_ID, "getComplaints")
// }

// export const alreadyVoted = (userId) => {
//   return wallet.account().viewFunction(CONTRACT_ID, "hasAlreadyVoted", {accountId:userId})
// }

// //function to add new complaint
// export const addNewComplaint = ({title, description, category, location}) => {
//   return wallet.account().functionCall({
//     contractId: CONTRACT_ID,
//     methodName: "addNewComplaint",
//     gas,
//     args: {title, description, category, location}
// });
// }

// //function to vote
// export const voteComplaint = (id) => {
//   return wallet.account().functionCall({
//     contractId: CONTRACT_ID,
//     methodName: "voteComplaint",
//     args: {id:id}
// });
// }