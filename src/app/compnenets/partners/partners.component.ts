import { Component, OnInit } from '@angular/core';
import { partnersMock } from '../../mock/partnersMock';
import { Soutions } from '../../models/Soutions';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  partners: Soutions[] = partnersMock;

  constructor() { }

  

  ngOnInit(): void {
    this.partners =partnersMock; 
  }
}
