import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { BrandsComponent } from './brands/brands.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'brands', pathMatch: 'full' },
  { path: 'brands', component: BrandsComponent },
  { path: 'brand-details/:id', component: BrandDetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsRoutingModule { }
