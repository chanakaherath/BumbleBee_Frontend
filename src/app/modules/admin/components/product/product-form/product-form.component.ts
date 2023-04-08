import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product : Product = new Product();

  constructor(private productService : ProductService,
    private router : Router) {}

  ngOnInit(): void {
      
  }

  onSubmit() {
    this.saveProduct();
  }

  saveProduct() {
    this.productService.createProduct(this.product).subscribe(data=> {
      console.log(data);
      this.goToProductList();
    },
    error => console.log(error));
  }

  goToProductList() {
    this.router.navigate(['/admin/product']);
  }

}
