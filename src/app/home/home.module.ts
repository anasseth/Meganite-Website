import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwWowModule } from 'ngx-wow';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    // HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgwWowModule
  ]
})
export class HomeModule { }
