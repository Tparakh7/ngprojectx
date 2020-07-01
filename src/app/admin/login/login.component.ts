import { Router } from '@angular/router';
import { AuthenService } from './../../services/authen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthenService]
})
export class LoginComponent implements OnInit {

  constructor(private authenService: AuthenService, private router: Router) {}
  message;
  ngOnInit(): void {
  }
  check(uname: string, p: string) {
    var output = this.authenService.checkUserAndPass(uname, p);
    if (output == true) {
      this.router.navigate(['/dashboard']);
    } else {
      this.message = 'Invalid username or password';
    }
  }
}
