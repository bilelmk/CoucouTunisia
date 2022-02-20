import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantShareService } from "../services/in-app/restaurant-share.service";

@Injectable({
  providedIn: 'root'
})
export class RestaurantGuard implements CanActivate {

  constructor(private restaurantShareService: RestaurantShareService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.restaurantShareService.getRestaurant()) {
      return true;
    }
    this.router.navigate( ['/main/restaurants/'] )
    return false ;
  }

}
