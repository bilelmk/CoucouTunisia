import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // const isAuth = this.authService.getIsAuth();
    // // const role = this.authService.getAuthData().role ;
    // if (!isAuth) {
    //   this.router.navigate(['/login']);
    // }
    // return isAuth;
    return true ;
  }

}





