import { Component, OnInit } from '@angular/core';
import {PromiseService} from "./services/promise.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public isOpen = false;
  public myProm: any[] = [];
  public otherProm: any[] = [];
  public loadedProm: any = [];
  public loadedOtherProm: any = [];
  public current:number = 1;
  constructor(public promiseService: PromiseService) { }

  ngOnInit(): void {
    this.loadPromises();
  }

  async loadPromises() {
    await this.promiseService.loadPromises();
    this.loadedProm = this.promiseService.promisesOfMe;
    this.loadedOtherProm = this.promiseService.promisesOfOthers;
    console.log(this.loadedProm)
    console.log(this.loadedOtherProm)
    await this.pick(this.current)
  }

  async pick(i: any) {
    // TODO: Make change depends on which table we use
    this.current = i;
    this.myProm = this.loadedProm.slice((this.current * 5) - 5 , this.current*5);
    this.otherProm = this.loadedOtherProm.slice((this.current * 5) - 5 , this.current*5);

  }

  toggleCreate() {
    this.isOpen = !this.isOpen
  }

  async signOut() {
    await this.promiseService.nearService.handleSignOut();
  }

  async changeCurrent(e: any) {
    console.log(e)
    await this.pick(e + 1);
  }
}
