import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { PromiseService } from "../../services/promise.service";

@Component({
  selector: 'app-create-promise',
  templateUrl: './create-promise.component.html',
  styleUrls: ['./create-promise.component.css']
})
export class CreatePromiseComponent {
  @Input() public isOpen = false
  @Output() public isOpenChange = new EventEmitter<boolean>();
  public promiseForm = new FormGroup({
    title: new FormControl(''),
    voters: new FormControl('')
  })

  constructor(public promiseService: PromiseService) {
  }

  async submit() {
    let args: any = {
      what: this.promiseForm.value.title
    }

    if (this.promiseForm.value.voters) {
      args.viewers = args.voters = [this.promiseForm.value.voters];
    }

    await this.promiseService.handleAddNewExtendedPromise(args)
    this.toggle();
  }

  toggle() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }
}
