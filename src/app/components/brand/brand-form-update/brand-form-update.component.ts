import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-form-update',
  templateUrl: './brand-form-update.component.html',
  styleUrls: ['./brand-form-update.component.css']
})
export class BrandFormUpdateComponent implements OnInit{

  id : string = "";
  brand : Brand = new Brand();

  constructor(private brandService : BrandService,
    private route : ActivatedRoute,
    private router : Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.brandService.getBrandById(this.id).subscribe(data=> {
      this.brand = data;
      console.log(this.brand);
    },
    error=> console.log(error));
  }

  onSubmit() {
    this.brandService.updateBrand(this.brand).subscribe(data=> {
      console.log(this.brand);
      this.goToBrandList();
    },
    error => console.log(error));
  }

  goToBrandList() {
    this.router.navigate(['/brand']);
  }

}
