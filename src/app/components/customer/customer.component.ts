import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers : Customer[] = [];

  constructor(private customerService : CustomerService,
    private router : Router) {}

    ngOnInit(): void {
      this.getCustomers();
    }
  
    private getCustomers() {
      this.customerService.getAllCustomers().subscribe(data=>{
        this.customers = data;
      });
    }

}
