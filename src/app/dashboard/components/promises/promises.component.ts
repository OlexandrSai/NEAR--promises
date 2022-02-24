import {Component, Input, OnInit} from '@angular/core';
import {format, fromUnixTime} from "date-fns";

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
  @Input() promises: any[] = [];
  public isOpenStatus = false;
  public currentOpen: any = 0;
  constructor() { }

  ngOnInit(): void {
  }

  formatDate(data: any) {
    return format(new Date(fromUnixTime(parseInt(data.substring(0, 10)))), "MMMM do yyyy")
  }

  toggleStatus(i: any) {
    this.isOpenStatus = !this.isOpenStatus;
  }

  isOpenStatusCheck(index: any) {
    console.log(index);
    return index === this.currentOpen && this.isOpenStatus;
  }
}
