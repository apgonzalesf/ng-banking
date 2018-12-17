import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS} from './mock-customers';

@Component({
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers = CUSTOMERS;
  selectedCustomer: Customer;

  constructor() { }

  ngOnInit() {
  }

  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }

}
