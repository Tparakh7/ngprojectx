import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthaGuard implements CanActivate {
  constructor(private router: Router) {}
  routes: any;


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    debugger;
    if (localStorage.getItem('username') != null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
