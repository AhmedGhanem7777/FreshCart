import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule  } from '@angular/material/input';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatIconModule  } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
