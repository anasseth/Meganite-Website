import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FranchiseComponent } from './franchise/franchise.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { HomeComponent } from './home/home.component';
import { InspirationCommercialComponent } from './inspiration-commercial/inspiration-commercial.component';
import { InspirationEducationComponent } from './inspiration-education/inspiration-education.component';
import { NewsComponent } from './news/news.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductShowcaseComponent } from './product-showcase/product-showcase.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'products',
    component: ProductShowcaseComponent,
  },
  {
    path: 'product/detail',
    component: ProductDetailComponent,
  },
  {
    path: 'franchise',
    component: FranchiseComponent,
  },
  {
    path: 'healthcare',
    component: HealthcareComponent
  },
  {
    path: 'inspiration/education',
    component: InspirationEducationComponent
  },
  {
    path: 'inspiration/commercial',
    component: InspirationCommercialComponent
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
