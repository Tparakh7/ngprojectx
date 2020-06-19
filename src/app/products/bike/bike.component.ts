import { Component, OnInit } from '@angular/core';
import { biKes } from './bike'
import { BIKES } from './mock-data';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styles: [
  ]  
})
export class BikeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.biKes = BIKES;
  }
  title = 'Super-Bikes';
  biKes : biKes[];
   calcProd(){
    let tot = 0;
    for (let bike of this.biKes){
      tot = tot + bike.instock;
    }
    return tot;
   }

   upQuantity(bike){
    if( bike.quantity < bike.instock)bike.quantity++;
   }
   downQuantity(bike){
    if(bike.quantity != 0)bike.quantity--;
   } 

}
