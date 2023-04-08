import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

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
    this.router.navigate(['/admin/category']);
  }

}
