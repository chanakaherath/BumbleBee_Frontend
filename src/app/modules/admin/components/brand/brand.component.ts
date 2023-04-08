import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands : Brand[] = [];

  constructor(private brandService : BrandService,
    private router : Router) {}

  ngOnInit(): void {
    this.getBrands();
  }

  private getBrands() {
    this.brandService.getBrandList().subscribe(data=>{
      this.brands = data;
    });
  }

  updateBrand(id : string) {
    this.router.navigate(['/admin/brand/update-brand', id])
  }

  deleteBrand(id : string) {
    this.brandService.deleteBrand(id).subscribe(data => {
      console.log("Brand deleted successfully...")
      this.getBrands();
    })
  }

}
