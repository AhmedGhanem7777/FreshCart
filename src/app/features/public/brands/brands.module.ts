import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands/brands.component';
import { SharedModule } from '../../../shared/shared.module';
import { BrandDetailsComponent } from './brand-details/brand-details.component';


@NgModule({
  declarations: [
    BrandsComponent,
    BrandDetailsComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    SharedModule
  ]
})
export class BrandsModule { }
