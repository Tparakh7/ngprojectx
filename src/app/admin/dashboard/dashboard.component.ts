import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
    prods = [];
    addProd(newProd: string) {
      if (newProd) {
        this.prods.push(newProd);
      }
    }
  }


