import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../shared/components/not-found/not-found.component';
import { authGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',loadChildren:()=>import('./home/home.module').then((m)=>m.HomeModule)},
  {path:'products',loadChildren:()=>import('./products/products.module').then((m)=>m.ProductsModule)},
  {path:'brands',loadChildren:()=>import('./brands/brands.module').then((m)=>m.BrandsModule)},
  {path:'categories',loadChildren:()=>import('./categories/categories.module').then((m)=>m.CategoriesModule)},
  {path:'allorders',loadChildren:()=>import('./orders/orders.module').then((m)=>m.OrdersModule),canActivate:[authGuard]},
  {path:'cart',loadChildren:()=>import('./cart/cart.module').then((m)=>m.CartModule),canActivate:[authGuard]},
  {path:'wishlist',loadChildren:()=>import('./wishlist/wishlist.module').then((m)=>m.WishlistModule),canActivate:[authGuard]},
  {path:'profile',loadChildren:()=>import('./profile/profile.module').then((m)=>m.ProfileModule)},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
