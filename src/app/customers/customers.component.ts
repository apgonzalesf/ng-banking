import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customer = 'ADS Company'
  constructor() { }

  ngOnInit() {
  }

}
