import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../servicios/auth.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth: AuthService, private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //return false;
    //return this._auth.isLogguedIn;
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      console.log('hola',localStorage.getItem('currentUser'))
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/portal'], { queryParams: { returnUrl: state.url }});
    return false;





    }

  }
