import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../models/brand';
import { BrandService } from '../../../services/brand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.css']
})
export class BrandFormComponent implements OnInit {

  brand : Brand = new Brand();

  constructor(private brandService : BrandService,
    private router : Router) {}

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.saveBrand();
  }

  saveBrand() {
    this.brandService.createBrand(this.brand).subscribe(data=> {
      console.log(data);
      this.goToBrandList();
    },
    error => console.log(error));
  }

  goToBrandList() {
    this.router.navigate(['/admin/brand']);
  }

}
