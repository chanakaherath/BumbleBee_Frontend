import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category/category';
import { CategoryService } from 'src/app/services/category.service';

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
      this.router.navigate(['/category/update-category', id])
    }
  
    deleteCategory(id : string) {
      this.categoryService.deleteCategory(id).subscribe(data => {
        console.log("Category deleted successfully...")
        this.getCategories();
      })
    }

}
