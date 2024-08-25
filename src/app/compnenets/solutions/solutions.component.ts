import { Component, OnInit } from '@angular/core';
import { soutionsMock } from '../../mock/soutionsMock';
import { Services } from '../../models/Services';
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {
  solutions: Services[] = soutionsMock;

  constructor() { }

 
  ngOnInit(): void {
    this.solutions =soutionsMock; 
  }
}
