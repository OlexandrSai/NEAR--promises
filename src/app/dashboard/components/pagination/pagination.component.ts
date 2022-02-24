import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() public current:number = 0;
  @Output() public currentChange = new EventEmitter<number>();
  @Input() public length: any = null;
  public pages = 1;
  constructor() { }

  ngOnInit(): void {
    this.countPages();
  }

  async countPages() {
    this.pages = Math.round(this.length / 5);
  }

  quantity(length: number) {
    return Array(length);
  }

  handleMove(i: any) {
    this.current = i;
    this.currentChange.emit(this.current);
  }

  handleStep(i: any) {
    this.handleMove(i>0 ? ++this.current : --this.current);
  }
}
