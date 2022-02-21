import { Component, OnInit } from '@angular/core';
import {NearService} from "../../../shared/services/near.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public nearService: NearService) { }

  ngOnInit(): void {
  }

  async signIn() {
    await this.nearService.handleSignIn();
  }
}
