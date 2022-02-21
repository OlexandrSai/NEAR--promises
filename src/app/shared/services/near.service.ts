import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {keyStores, Near, utils, WalletConnection} from "near-api-js";
import {Router} from "@angular/router";

// @ts-ignore
import BN from "bn.js";


@Injectable({
  providedIn: 'root'
})
export class NearService {
  public accountId = '';
  public CONTRACT_ID = environment.NG_APP_CONTRACT_ID;
  public gas = new BN(environment.NG_APP_gas);
  public near = new Near({
    networkId: environment.NG_APP_networkId,
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: environment.NG_APP_nodeUrl,
    walletUrl: environment.NG_APP_walletUrl,
    headers: {}
  });
  public wallet = new WalletConnection(this.near, "communite");

  constructor(private router: Router) {
    this.accountId = this.wallet.getAccountId();
  }

  async handleSignIn() {
    await this.wallet.requestSignIn({
      contractId: this.CONTRACT_ID,
      methodNames: [] // add methods names to restrict access
    })
  };

  handleSignOut() {
    this.wallet.signOut()
    this.accountId = ''
    this.router.navigate(['']);
  };


  //function  to get all  my promises
  async getPromises(param: any) {
    const res = this.wallet.account().functionCall({
      contractId: this.CONTRACT_ID,
      methodName: "getPromises",
      gas: this.gas,
      args: {accountId: this.wallet.getAccountId(), target: param}
    });
    console.log(res)
    return res
  }

  //function to add new promise
  async makeExtendedPromise({what, viewers, voters}: { what: any, viewers: any, voters: any }) {
    return this.wallet.account().functionCall({
      contractId: this.CONTRACT_ID,
      methodName: "makeExtendedPromise",
      gas: this.gas,
      args: {what, viewers, voters}
    });
  }
}