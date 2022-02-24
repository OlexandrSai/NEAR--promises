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
    this.isLoading = true;
    try {
      await this.nearService.makeExtendedPromise({ what, viewers, voters });
      await this.loadPromises();
    } catch (e) {
      this.err = e;
      console.log(this.err)
    }
    this.isLoading = false;
};
}
