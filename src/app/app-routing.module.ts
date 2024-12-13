import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { authGuard } from './Guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'orders', canActivate:[authGuard] , component: OrdersComponent },



  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgetPass', loadChildren: () => import('./Components/forget-pass/forget-pass.module').then(m => m.ForgetPassModule) },
  { path: '**', component: NotFoundComponent }
=======
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',loadChildren:()=>import('./features/auth/auth.module').then((m)=>m.AuthModule)},
  {path:'**',component:NotFoundComponent},
>>>>>>> aa8958825740aca69001405535fd348ee176c20e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
