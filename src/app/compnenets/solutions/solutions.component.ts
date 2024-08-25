import { Component, OnInit } from '@angular/core';
import { soutionsMock } from '../../mock/soutionsMock';
import { Soutions } from '../../models/Soutions';
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {
  solutions: Soutions[] = soutionsMock;

  constructor() { }

 
  ngOnInit(): void {
    this.solutions =soutionsMock; 
  }
}
