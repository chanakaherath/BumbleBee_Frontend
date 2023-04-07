import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand.service';

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
    this.router.navigate(['/brand']);
  }

}
