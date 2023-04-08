import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = "http://localhost:8080/customer/";

  constructor(private httpClient : HttpClient) { }

  createCustomer(customer : Customer): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl + "save"}`, customer);
  }

  getAllCustomers() : Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseUrl + "getAll"}`);
  }
  
}
