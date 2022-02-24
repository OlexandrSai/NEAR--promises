import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CreatePromiseComponent } from './components/create-promise/create-promise.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoaderComponent} from "../shared/components/loader/loader.component";
import { PaginationComponent } from './components/pagination/pagination.component';
import { PromisesComponent } from './components/promises/promises.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CreatePromiseComponent,
    LoaderComponent,
    PaginationComponent,
    PromisesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
