import { Component, OnInit } from '@angular/core';
import {RestaurantShareService} from "../../../../../core/services/in-app/restaurant-share.service";

@Component({
  selector: 'app-cb-restaurants-menu',
  templateUrl: './cb-restaurants-menu.component.html',
  styleUrls: ['./cb-restaurants-menu.component.scss']
})
export class CbRestaurantsMenuComponent implements OnInit {

  restaurant ;

  constructor(private restaurantShareService: RestaurantShareService) { }

  ngOnInit(): void {
    this.restaurant = this.restaurantShareService.getRestaurant()
  }

}
