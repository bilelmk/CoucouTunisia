import { Component, OnInit } from '@angular/core';
import { RestaurantShareService } from "../../../../../core/services/in-app/restaurant-share.service";

@Component({
  selector: 'app-cb-restaurants-images',
  templateUrl: './cb-restaurants-images.component.html',
  styleUrls: ['./cb-restaurants-images.component.scss']
})
export class CbRestaurantsImagesComponent implements OnInit {

  restaurant ;

  constructor(private restaurantShareService: RestaurantShareService) { }

  ngOnInit(): void {
    this.restaurant = this.restaurantShareService.getRestaurant()
    console.log(this.restaurant)
  }

}
