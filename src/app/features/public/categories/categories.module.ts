import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../../../shared/shared.module';
import { CategoryDetailsComponent } from './category-details/category-details.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
