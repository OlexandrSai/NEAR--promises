import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CreatePromiseComponent } from './components/create-promise/create-promise.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoaderComponent} from "../shared/components/loader/loader.component";



@NgModule({
  declarations: [
    DashboardComponent,
    CreatePromiseComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
