import { Component, OnInit } from '@angular/core';
import {RestaurantShareService} from "../../../../../core/services/in-app/restaurant-share.service";

@Component({
  selector: 'app-cb-restaurants-reservations',
  templateUrl: './cb-restaurants-reservations.component.html',
  styleUrls: ['./cb-restaurants-reservations.component.scss']
})
export class CbRestaurantsReservationsComponent implements OnInit {

  restaurant ;

  constructor(private restaurantShareService: RestaurantShareService) { }

  ngOnInit(): void {
    this.restaurant = this.restaurantShareService.getRestaurant()
  }

}
