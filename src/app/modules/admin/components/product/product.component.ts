import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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
    this.router.navigate(['/admin/product/update-product', id])
  }

  deleteProduct(id : string) {
    this.productService.deleteProduct(id).subscribe(data => {
      console.log("Product deleted successfully...")
      this.getProducts();
    })
  }

}
