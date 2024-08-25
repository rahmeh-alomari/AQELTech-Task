import { Component, OnInit } from '@angular/core';
import { Services } from '../../models/Services';
import { servicesMock } from '../../mock/servicesMock';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  service: Services[] = [];

  ngOnInit(): void {
    this.service =servicesMock; 
  }
}
