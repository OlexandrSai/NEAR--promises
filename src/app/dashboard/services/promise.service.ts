import { Injectable } from '@angular/core';
import {NearService} from "../../shared/services/near.service";

@Injectable({
  providedIn: 'root'
})
export class PromiseService {
  public isLoading = false;
  public promisesOfMe: any = [];
  public promisesOfOthers: any[] = [];
  public err:any = null;

  constructor(public nearService: NearService) { }

  async loadPromises() {
    this.isLoading = true;
    try {
      this.promisesOfMe = await this.nearService.getPromises("me");
      // this.promisesOfOthers = await this.nearService.getPromises("others")
    } catch (e) {
      this.err = e;
      console.log(this.err);
      this.isLoading = false;
    }
    this.isLoading = false;
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
