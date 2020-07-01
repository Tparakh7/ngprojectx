import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl:'./nav.component.html',
  styles: [
  ]
})
export class NavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    localStorage.removeItem("username");
    this.router.navigate(["/home"]);
  }
}
