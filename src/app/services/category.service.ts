import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = "http://localhost:8080/category/";

  constructor(private httpClient : HttpClient) { }

  getCategoryList() : Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.baseUrl + "getAllActive"}`);
  }

  createCategory(category : Category): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl + "save"}`, category);
  }

  getCategoryById(id : string): Observable<Category> {
    return this.httpClient.get<Category>(`${this.baseUrl}` + "getById/" + `${id}`);
  }

  updateCategory(category : Category): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl + "update"}`, category)
  }

  deleteCategory(id : string): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl + "deleteById/" + id}`);
  }
  
}
