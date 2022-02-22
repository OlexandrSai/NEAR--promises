import { Injectable } from '@angular/core';
import {NearService} from "../../shared/services/near.service";
import {parseJson} from "@angular/cli/utilities/json-file";

@Injectable({
  providedIn: 'root'
})
export class PromiseService {
  public promisesOfMe: any = [];
  public promisesOfOthers: any[] = [];
  public err:any = null;

  constructor(public nearService: NearService) { }

  async loadPromises() {
    try {
      this.promisesOfMe = await this.nearService.getPromises("me");
      console.log(this.promisesOfMe)
      // this.promisesOfMe = this.promisesOfMe.receipts_outcome[0].outcome.logs.map((x:any) => JSON.parse(x));
      // this.promisesOfMe = JSON.parse(this.promisesOfMe);
      // console.log(await this.nearService.getPromises("me"));
//console.log(await getPromises("me").then(promises=>console.log(promises.length)))
//       this.promisesOfOthers = await this.nearService.getPromises("others")

      // console.log(this.promisesOfMe)
      // console.log(this.promisesOfOthers)
    } catch (e) {
      this.err = e;
      console.log(this.err);
    }
  }

async handleAddNewExtendedPromise({ what, viewers, voters}: { what: any, viewers: any, voters: any}) {
    try {
      await this.nearService.makeExtendedPromise({ what, viewers, voters });
    } catch (e) {
      this.err = e;
      console.log(this.err)
    }

};

// const handleVoteForComplaint = async (id) => {
//   const  idToInt = parseInt(id)
//   await voteComplaint(idToInt).then(async function()  {
//     alert('here')
//     complaints.value=await  getComplaints()
//   });
// };

// const handleRemoveVoteForComplaint = async (id) => {
//   const  idToInt = parseInt(id)
//   await removeVote(idToInt).then(async function()  {
//     complaints.value=await  getComplaints()
//   }).then(async function()  {
//     complaints.value=await alreadyVoted(store.state.accountId)
//   })
// };
}
