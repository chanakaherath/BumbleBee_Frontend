import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  products : Product[] = [];

  constructor(private productService : ProductService,
    private router : Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productService.getProductList().subscribe(data=>{
      this.products = data;
    });
  }

  updateProduct(id : string) {
    this.router.navigate(['/product/update-product', id])
  }

  deleteProduct(id : string) {
    this.productService.deleteProduct(id).subscribe(data => {
      console.log("Product deleted successfully...")
      this.getProducts();
    })
  }

}
