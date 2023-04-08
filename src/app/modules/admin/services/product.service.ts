import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/product/";

  constructor(private httpClient : HttpClient) { }

  getProductList() : Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl + "getAllActive"}`);
  }

  createProduct(product : Product): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl + "save"}`, product);
  }

  getProductById(id : string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}` + "getById/" + `${id}`);
  }

  updateProduct(product : Product): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl + "update"}`, product)
  }

  deleteProduct(id : string): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl + "deleteById/" + id}`);
  }
  
}
