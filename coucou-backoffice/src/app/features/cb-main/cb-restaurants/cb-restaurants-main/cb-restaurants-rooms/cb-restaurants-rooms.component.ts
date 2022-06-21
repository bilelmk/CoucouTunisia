import { Component, OnInit } from '@angular/core';
import { RestaurantShareService } from "../../../../../core/services/in-app/restaurant-share.service";

@Component({
  selector: 'app-cb-restaurants-rooms',
  templateUrl: './cb-restaurants-rooms.component.html',
  styleUrls: ['./cb-restaurants-rooms.component.scss']
})
export class CbRestaurantsRoomsComponent implements OnInit {

  restaurant ;

  constructor(private restaurantShareService: RestaurantShareService) { }

  ngOnInit(): void {
    this.restaurant = this.restaurantShareService.getRestaurant()
  }

}
