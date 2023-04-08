import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[] = [];

  constructor(private categoryService : CategoryService,
    private router : Router) {}

    ngOnInit(): void {
      this.getCategories();
    }
  
    private getCategories() {
      this.categoryService.getCategoryList().subscribe(data=>{
        this.categories = data;
      });
    }
  
    updateCategory(id : string) {
      this.router.navigate(['/admin/category/update-category', id])
    }
  
    deleteCategory(id : string) {
      this.categoryService.deleteCategory(id).subscribe(data => {
        console.log("Category deleted successfully...")
        this.getCategories();
      })
    }

}
