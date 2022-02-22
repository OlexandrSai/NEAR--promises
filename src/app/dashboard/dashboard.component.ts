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
  constructor(public promiseService: PromiseService) { }

  ngOnInit(): void {
    this.loadPromises();
  }

  async loadPromises() {
    await this.promiseService.loadPromises();
    this.myProm = this.promiseService.promisesOfMe;
  }

  toggleCreate() {
    this.isOpen = !this.isOpen
  }

  async signOut() {
    await this.promiseService.nearService.handleSignOut();
  }
}
