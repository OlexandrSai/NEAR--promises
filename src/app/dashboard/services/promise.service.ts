import { Injectable } from '@angular/core';
import {NearService} from "../../shared/services/near.service";

@Injectable({
  providedIn: 'root'
})
export class PromiseService {
  public promisesOfMe = [];
  public promisesOfOthers = [];
  public err:any = null;

  constructor(public nearService: NearService) { }

//   onMounted(async () => {
//   try {
//   //let  res = []
//   getPromises("me").then(promises => {
//   console.log('fetched my promises: ', promises.length);
// })
// //console.log(await getPromises("me").then(promises=>console.log(promises.length)))
// promisesOfOthers.value  = await getPromises("others")
// } catch (e) {
//   err.value = e;
//   console.log(err.value);
// }
// });

async handleAddNewExtendedPromise({ what, viewers, voters}: { what: any, viewers: any, voters: any}) {
  return await this.nearService.makeExtendedPromise({ what, viewers, voters });
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
