import { Component, OnInit } from '@angular/core';
import { partnersMock } from '../../mock/partnersMock';
import { Services } from '../../models/Services';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  partners: Services[] = partnersMock;

  constructor() { }

  

  ngOnInit(): void {
    this.partners =partnersMock; 
  }
}
