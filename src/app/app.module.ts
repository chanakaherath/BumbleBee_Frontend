import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { BrandComponent } from './components/brand/brand.component';
import { HomeComponent } from './components/home/home.component';
import { BrandFormComponent } from './components/brand/brand-form/brand-form.component';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { BrandFormUpdateComponent } from './components/brand/brand-form-update/brand-form-update.component';
import { CategoryFormUpdateComponent } from './components/category/category-form-update/category-form-update.component';
import { ProductFormUpdateComponent } from './components/product/product-form-update/product-form-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    CategoryComponent,
    BrandComponent,
    HomeComponent,
    BrandFormComponent,
    CategoryFormComponent,
    ProductFormComponent,
    BrandFormUpdateComponent,
    CategoryFormUpdateComponent,
    ProductFormUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
