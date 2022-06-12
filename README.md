#  🎓 NCD.L2.NCD.L2.sample--promises dApp
This repository contains a complete frontend applications (Vue.js, React) to work with
<a href="https://github.com/Learn-NEAR/NCD.L1.sample--promises" target="_blank">NCD.L1.sample--promises smart contract</a> targeting the NEAR platform:
1. Vue.Js (main branch)
2. React (react branch)
2. Angular (angular branch)

The goal of this repository is to make it as easy as possible to get started writing frontend with Vue.js, React and Angular for AssemblyScript contracts built to work with NEAR Protocol.


## ⚠️ Warning
Any content produced by NEAR, or developer resources that NEAR provides, are for educational and inspiration purposes only. NEAR does not encourage, induce or sanction the deployment of any such applications in violation of applicable laws or regulations.


## ⚡  Usage
![image](https://user-images.githubusercontent.com/15414351/173224374-85c2b8ba-fafb-4cae-967c-a8174d1e5278.png)
<a href="" target="_blank">UI walkthrough</a>

You can use this app with contract ids which were deployed by the creators of this repo. It will be better to use it till the moment when we will update smart contract repo.

## Project setup
To deploy sample--promises to your account visit <a href="https://github.com/Learn-NEAR/NCD.L1.sample--promises" target="_blank">this repo (smart contract deployment instructions are inside):</a>


```
CONTRACT_ID = "put your contract id here"
...
```

After you fill up environment.ts file, you need to:

1. Install Angular CLI (if previously you didn't)
```
npm i -g @angular/cli
```

2. Install all dependencies
```
npm i
```
3. Run the project locally
```
npm run serve
```

Other commands:

Compiles and minifies for production
```
npm run build
```
Lints and fixes files
```
npm run lint
```

## 👀 Code walkthrough for Near university students

<a href="" >Code walk-through video | TBA |</a>

### -- Contract's --

To work with museum, and meme contracts we have separate functions inside ``` src/app/shared/services/near.service.ts```.
```
  private getPromisesContract() {
    return new Contract(
      this.wallet.account(),
      environment.CONTRACT_ID,
      {
        viewMethods: ['getPromises' ],
        changeMethods: ['makeExtendedPromise', 'deletePromise']
      }
    )
  }
```

### -- Near Service --

We are using ```near-api-js``` to work with NEAR blockchain. In ``` src/app/shared/services/near.service.ts ``` we are importing classes, functions and configs which we are going to use:
```
import { keyStores, Near, Contract, utils, WalletConnection } from "near-api-js";
```

Class contains two variables
```
public near: Near;
public wallet: WalletConnection;
```

Then in ``` constructor() ``` we are connecting to NEAR:
```
this.near = new Near({
  networkId: environment.NETWORK_ID,
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: environment.NODE_URL,
  walletUrl: environment.WALLET_URL,
  headers: {}
});
``` 
and creating wallet connection
```
// create wallet connection
this.wallet = new WalletConnection(this.near, "promises");
```


### -- Promise Service --

``` src/app/dashboard/services/promise.service.ts ``` represent the main functional class of dApp

We use that container to encapsulate all data and function's related to Museum and Complaint's:
```
  public promisesOfMe: any = [];
  public promisesOfOthers: any[] = [];
  ...
  
  async handleAddNewExtendedPromise({ what, viewers, voters }: { what: any, viewers: any, voters: any }) {...};
  handleVoteForComplaint() {...};
```

With dependency injection we are able to share everything with components. ``` src/app/dashboard/components/promises.component.ts ``` as an example :
```
  constructor(public promService: PromiseService) { }
  }

  async delete(index: any) {
    await this.promService.delete(index);

  }

  async edit(index: any) {
    await this.promService.edit(index);
  }
```

## Examples
``` src/app/services/near.service.ts ```
### - Function | No Parameters -
```
handleSignOut() {...}
```

### - Function | With Parameters -
```
// delete promise
async handleDelete(index: any) {...}
```
