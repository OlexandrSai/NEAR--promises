import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { ThirdSectionComponent } from './components/third-section/third-section.component';
import { FourthSectionComponent } from './components/fourth-section/fourth-section.component';
import { FifthSectionComponent } from './components/fifth-section/fifth-section.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FourthSectionComponent,
    FifthSectionComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
