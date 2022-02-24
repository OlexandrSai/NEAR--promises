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
  public loadedProm: any = [];
  public current:number = 1;
  constructor(public promiseService: PromiseService) { }

  ngOnInit(): void {
    this.loadPromises();
  }

  async loadPromises() {
    await this.promiseService.loadPromises();
    this.loadedProm = this.promiseService.promisesOfMe;
    await this.pick(this.current)
  }

  async pick(i: any) {
    this.current = i;
    this.myProm = this.loadedProm.slice((this.current * 5) - 5 , this.current*5)
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
