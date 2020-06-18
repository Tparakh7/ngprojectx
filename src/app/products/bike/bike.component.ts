import { Component, OnInit } from '@angular/core';
import { biKes } from './bikes'
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
  }
  title = 'Super-Bikes';
  biKes : biKes[]= BIKES;
   calcProd(){
    let tot = 0;
    for (let bike of this.biKes){
      tot = tot + bike.instock;
    }
    return tot;
   }

}
