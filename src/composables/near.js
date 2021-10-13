import { ref, onMounted } from "vue";
import {
    getPromises,
    makeExtendedPromise,
} from "../services/near";
//import store from '../store/store.js'

export const usePromises = () => {
    const promisesOfMe = ref([]);
    const promisesOfOthers = ref([]);
    const  err = ref(null)
    onMounted(async () => {
      try {
        //let  res = []
        getPromises("me").then(promises => {
          console.log('fetched my promises: ', promises.length);
        })
        //console.log(await getPromises("me").then(promises=>console.log(promises.length)))
        promisesOfOthers.value  = await getPromises("others")
      } catch (e) {
        err.value = e;
        console.log(err.value);
      }
    });
  
    const handleAddNewExtendedPromise = async ({ what, viewers, voters}) => {
      return await makeExtendedPromise({ what, viewers, voters });
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
  
    return {
        promisesOfMe,
        promisesOfOthers,
        makeExtendedPromise:handleAddNewExtendedPromise
    };
  };