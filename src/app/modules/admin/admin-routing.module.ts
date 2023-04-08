import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { CustomerComponent } from 'src/app/components/customer/customer.component';

const routes: Routes = [
  {path:'', component:AdminDashboardComponent, children: [
    {path:'', redirectTo:'brand', pathMatch:'full'},
    {path:'brand', component:BrandComponent},
    {path:'category', component:CategoryComponent},
    {path:'product', component:ProductComponent},
    {path:'customers', component:CustomerComponent},
    {path:'', children:[
      {path:'brand/create-brand', component:BrandFormComponent},
      {path:'brand/update-brand/:id', component:BrandFormUpdateComponent},
      {path:'category/create-category', component:CategoryFormComponent},
      {path:'category/update-category/:id', component:CategoryFormUpdateComponent},
      {path:'product/create-product', component:ProductFormComponent},
      {path:'product/update-product/:id', component:ProductFormUpdateComponent}
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
