import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BrandComponent } from './components/brand/brand.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { BrandFormComponent } from './components/brand/brand-form/brand-form.component';
import { BrandFormUpdateComponent } from './components/brand/brand-form-update/brand-form-update.component';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { CategoryFormUpdateComponent } from './components/category/category-form-update/category-form-update.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ProductFormUpdateComponent } from './components/product/product-form-update/product-form-update.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    BrandComponent,
    CategoryComponent,
    ProductComponent,
    BrandFormComponent,
    BrandFormUpdateComponent,
    CategoryFormComponent,
    CategoryFormUpdateComponent,
    ProductFormComponent,
    ProductFormUpdateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AdminModule { }
