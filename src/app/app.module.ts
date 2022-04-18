import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgwWowModule } from 'ngx-wow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ProductShowcaseComponent } from './product-showcase/product-showcase.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { InspirationCommercialComponent } from './inspiration-commercial/inspiration-commercial.component';
import { InspirationEducationComponent } from './inspiration-education/inspiration-education.component';
import { AboutMeganiteComponent } from './about-meganite/about-meganite.component';
import { WhereToBuyComponent } from './where-to-buy/where-to-buy.component';
import { AntimicrobialComponent } from './antimicrobial/antimicrobial.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent,
    ProductShowcaseComponent,
    ProductDetailComponent,
    FranchiseComponent,
    HealthcareComponent,
    InspirationCommercialComponent,
    InspirationEducationComponent,
    AboutMeganiteComponent,
    WhereToBuyComponent,
    AntimicrobialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FontAwesomeModule,
    NgwWowModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    AnimateOnScrollModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmW0pz03WIpnH-HDUtU4i8ivLZJjGqcBQ'
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
