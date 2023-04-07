import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { BrandFormComponent } from './components/brand/brand-form/brand-form.component';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { BrandFormUpdateComponent } from './components/brand/brand-form-update/brand-form-update.component';
import { CategoryFormUpdateComponent } from './components/category/category-form-update/category-form-update.component';
import { ProductFormUpdateComponent } from './components/product/product-form-update/product-form-update.component';

const routes: Routes = [
  {path:'', redirectTo:'brand', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'brand', component:BrandComponent},
  {path:'category', component:CategoryComponent},
  {path:'product', component:ProductComponent},
  {path:'', children:[
    {path:'brand/create-brand', component:BrandFormComponent},
    {path:'brand/update-brand/:id', component:BrandFormUpdateComponent},
    {path:'category/create-category', component:CategoryFormComponent},
    {path:'category/update-category/:id', component:CategoryFormUpdateComponent},
    {path:'product/create-product', component:ProductFormComponent},
    {path:'product/update-product/:id', component:ProductFormUpdateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
