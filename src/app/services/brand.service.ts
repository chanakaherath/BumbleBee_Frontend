import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private baseUrl = "http://localhost:8080/brand/";

  constructor(private httpClient : HttpClient) { }

  getBrandList() : Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(`${this.baseUrl + "getAllActive"}`);
  }

  createBrand(brand : Brand): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl + "save"}`, brand);
  }

  getBrandById(id : string): Observable<Brand> {
    return this.httpClient.get<Brand>(`${this.baseUrl}` + "getById/" + `${id}`);
  }

  updateBrand(brand : Brand): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl + "update"}`, brand)
  }

  deleteBrand(id : string): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl + "deleteById/" + id}`);
  }

}
