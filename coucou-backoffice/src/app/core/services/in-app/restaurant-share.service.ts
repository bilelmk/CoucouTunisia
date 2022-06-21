import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantShareService {

  private restaurant;

  constructor() { }

  getRestaurant() {
    return this.restaurant
  }

  setRestaurant(restaurant) {
    return this.restaurant = restaurant
  }
}
