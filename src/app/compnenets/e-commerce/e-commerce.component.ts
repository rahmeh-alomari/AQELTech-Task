import { Component, OnInit } from '@angular/core';
import { eCommercesMock } from '../../mock/eCommerceMock';
import { Services } from '../../models/Services';
@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent implements OnInit {
  eCommerces: Services[] = eCommercesMock;

  constructor() { }

  ngOnInit(): void {
  }

}
