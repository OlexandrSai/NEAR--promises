import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { Contract, keyStores, Near, WalletConnection } from "near-api-js";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class NearService {
  public accountId = '';
  public CONTRACT_ID = environment.CONTRACT_ID;
  public near: Near;
  public wallet: WalletConnection;
  public promisesContract: any;

  constructor(private router: Router) {
    // connecting to NEAR
    this.near = new Near({
      networkId: environment.NETWORK_ID,
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: environment.NODE_URL,
      walletUrl: environment.WALLET_URL,
      headers: {}
    });

    // create wallet connection
    this.wallet = new WalletConnection(this.near, "promises");
    this.accountId = this.wallet.getAccountId();
    // get contracts
    this.promisesContract = this.getPromisesContract();
  }

  private getPromisesContract() {
    return new Contract(
      this.wallet.account(),
      environment.CONTRACT_ID,
      {
        viewMethods: ['getPromises'],
        changeMethods: ['makePromise', 'deletePromise', 'vote']
      }
    )
  }

  // get all  my promises
  async getPromises(param: any) {
    return await this.promisesContract.getPromises({ accountId: this.accountId, target: param });
  }

  // add new promise
  async makeExtendedPromise({ what, viewers, voters }: { what: any, viewers: any, voters: any }) {
    return await this.promisesContract.makePromise({ what, viewers, voters });
  }

  async handleDelete(index: any) {
    return await this.promisesContract.deletePromise({ promiseId: index });
  }

  async handleEdit(index: any) {
    return await this.promisesContract.editPromise({ id: index });
  }

  async handleVote(index: any, value: any) {
    return await this.promisesContract.vote({ promiseId: index, value: value });
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
}
