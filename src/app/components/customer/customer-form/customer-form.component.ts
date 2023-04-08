import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customer : Customer = new Customer();

  constructor(private customerService : CustomerService,
    private router : Router) {}

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.saveCustomer();
  }

  saveCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(data=> {
      console.log(data);
      alert("Customer Created Successfully..");
      this.goToLogin();
    },
    error => console.log(error));
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
