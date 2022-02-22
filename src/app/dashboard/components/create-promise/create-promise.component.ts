import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PromiseService} from "../../services/promise.service";

@Component({
  selector: 'app-create-promise',
  templateUrl: './create-promise.component.html',
  styleUrls: ['./create-promise.component.css']
})
export class CreatePromiseComponent implements OnInit {
  public promiseForm = new FormGroup({
    title: new FormControl(''),

  })
  constructor(public promiseService: PromiseService) { }

  ngOnInit(): void {
  }

  async submit() {
    console.log(this.promiseForm)
    await this.promiseService.handleAddNewExtendedPromise({what: this.promiseForm.value.title, viewers: [], voters: []})
    console.log('da')
  }
}
