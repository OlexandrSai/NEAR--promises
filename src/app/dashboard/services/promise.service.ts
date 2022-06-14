import { Injectable } from '@angular/core';
import { NearService } from "../../shared/services/near.service";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class PromiseService {
  public isLoading = false;
  public promisesOfMe: any = [];
  public promisesOfOthers: any[] = [];
  public err: any = null;

  constructor(public nearService: NearService, private toastr: ToastrService) {
  }

  async loadPromises() {
    this.isLoading = true;
    try {
      this.promisesOfMe = await this.nearService.getPromises("me");
      this.promisesOfOthers = await this.nearService.getPromises("others")
    } catch (e) {
      this.err = e;
    } finally {
      this.isLoading = false;
    }
  }

  async handleAddNewExtendedPromise({ what, viewers, voters }: { what: any, viewers: any, voters: any }) {
    this.isLoading = true;
    try {
      await this.nearService.makeExtendedPromise({ what, viewers, voters });
      await this.loadPromises();
    } catch (e) {
      this.err = e;
      console.log(this.err)
    } finally {
      this.isLoading = false;
    }
  };

  async delete(index: any) {
    this.isLoading = true;
    try {
      await this.nearService.handleDelete(index);
      await this.loadPromises();
    } catch (e: any) {
      let message = this.err = e.kind ? e?.kind?.ExecutionError : e.message
      this.toastr.error(message.length > 26 ? message.slice(0, message.match(', filename').index) : message);
    } finally {
      this.isLoading = false;
    }
    this.isLoading = false;
  }

  async edit(index: any) {
    this.isLoading = true;
    await this.nearService.handleEdit(index);
    this.isLoading = false;
  }

  async requestHandler(callback: Function) {
    this.isLoading = true;
    try {
      await callback();
    } catch (e: any) {
      let message = this.err = e.kind ? e?.kind?.ExecutionError : e.message
      this.toastr.error(message.length > 26 ? message.slice(0, message.match(', filename').index) : message);
    } finally {
      this.isLoading = false;
    }
  }
}
