import { Component } from '@angular/core';
import { NearService } from "../../../shared/services/near.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public nearService: NearService) {
  }

  async signIn() {
    await this.nearService.handleSignIn();
  }
}
