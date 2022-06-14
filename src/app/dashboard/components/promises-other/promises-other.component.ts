import { Component, Input } from '@angular/core';
import { format, fromUnixTime } from "date-fns";
import { PromiseService } from "../../services/promise.service";

@Component({
  selector: 'app-promises-other',
  templateUrl: './promises-other.component.html',
  styleUrls: ['./promises-other.component.css']
})
export class PromisesOtherComponent {
  @Input() promises: any[] = [];
  public isOpenStatus = false;
  public currentOpen: any = 0;

  constructor(public promService: PromiseService) {
  }

  formatDate(data: any) {
    return format(new Date(fromUnixTime(parseInt(data.substring(0, 10)))), "MMMM do yyyy")
  }

  toggleStatus(i: any) {
    this.currentOpen = i;
    this.isOpenStatus = !this.isOpenStatus;
  }

  isOpenStatusCheck(index: any) {
    return index === this.currentOpen && this.isOpenStatus;
  }

  vote(index: any, value: any) {
    return this.promService.vote(index, value)
  }
}
