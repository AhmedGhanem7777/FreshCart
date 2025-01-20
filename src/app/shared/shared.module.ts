import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CuttextPipe } from './pipes/cuttext.pipe';
import { RatingPipe } from './pipes/rating.pipe';
import { SearchProductsPipe } from './pipes/search-products.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    CuttextPipe,
    RatingPipe,
    SearchProductsPipe,
    LoadingComponent,
    ScrollToTopComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    SearchProductsPipe,
    CuttextPipe,
    LoadingComponent,
    ScrollToTopComponent
  ]
})
export class SharedModule { }
