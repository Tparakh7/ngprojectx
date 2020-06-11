import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
 title = 'Indian Bikes';
 bikes = [
   {
     bikecompany:'Yamaha',
     bikename:'R15 V2',
     topspeed:'135km/hr',
     instock:5,
   },
   {
     bikecompany:'Bajaj',
     bikename:'NS200',
     topspeed:'145km/hr',
     instock:7,
   },
   {
     bikecompany:'TVS',
     bikename:'Apache RR310',
     topspeed:'160km/hr',
     instock:0,
   }

 ]
}
