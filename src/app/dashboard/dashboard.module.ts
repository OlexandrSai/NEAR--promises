import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CreatePromiseComponent } from './components/create-promise/create-promise.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CreatePromiseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
