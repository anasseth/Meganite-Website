import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgwWowModule } from 'ngx-wow';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';


@NgModule({
  declarations: [
    // NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NgwWowModule
  ]
})
export class NewsModule { }
