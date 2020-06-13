import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html' ,
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Super-Bikes';
  bikes = [
    {
      bikecompany:'yamaha',
      bikename:'r1-m',
      topspeed:'280km/hr',
      instock:5,
      canpurchase:true,
     
    },
    {
      bikecompany:'bmw',
      bikename:'1000rr',
      topspeed:'299km/hr',
      instock:7,
      canpurchase:false,
      
    },
    {
      bikecompany:'kawasaki',
      bikename:'ninja h2r',
      topspeed:'320km/hr',
      instock:0,
      canpurchase:true,
      
 
    }
   ]
 }
 
