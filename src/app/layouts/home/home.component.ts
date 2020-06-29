import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p align="center">
    <img src="../../../assets/img/Welcome2.gif" />
    </p>
  `,

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
