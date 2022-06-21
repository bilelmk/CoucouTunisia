import { Component, OnInit } from '@angular/core';
import {RestaurantShareService} from "../../../../../core/services/in-app/restaurant-share.service";

@Component({
  selector: 'app-cb-restaurants-clients',
  templateUrl: './cb-restaurants-clients.component.html',
  styleUrls: ['./cb-restaurants-clients.component.scss']
})
export class CbRestaurantsClientsComponent implements OnInit {

  restaurant ;

  constructor(private restaurantShareService: RestaurantShareService) { }

  ngOnInit(): void {
    this.restaurant = this.restaurantShareService.getRestaurant()
  }

}
