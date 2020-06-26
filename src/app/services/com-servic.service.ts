import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComServicService {

  constructor(private http:Http) {}
  getbiKes(){
    return this.http
    .get('./../../assets/API/bikes.json')
    .pipe(map((response)=> response.json().apiData));
  }
} 
 