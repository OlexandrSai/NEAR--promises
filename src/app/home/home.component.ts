import { Component, OnInit } from '@angular/core';
import {PromiseService} from "../dashboard/services/promise.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public promiseService: PromiseService, public router: Router) { }

  ngOnInit(): void {
    if (this.promiseService.nearService.accountId !== '') {
      this.router.navigate(['dashboard']);
    }
  }
}
