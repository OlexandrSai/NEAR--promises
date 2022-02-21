import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'dashboard', component: DashboardComponent},
  // {path: 'create', component: CreateComplaintComponent, canActivate: [AuthGuard], data: {layout: Layouts.Main, isCreate: true}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
