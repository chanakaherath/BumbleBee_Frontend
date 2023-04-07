import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit{

  category : Category = new Category();

  constructor(private categoryService : CategoryService,
    private router : Router) {}

  ngOnInit(): void {
      
  }

  onSubmit() {
    this.saveCategory();
  }

  saveCategory() {
    this.categoryService.createCategory(this.category).subscribe(data=> {
      console.log(data);
      this.goToCategoryList();
    },
    error => console.log(error));
  }

  goToCategoryList() {
    this.router.navigate(['/category']);
  }

}
