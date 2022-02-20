import { Component, OnInit } from '@angular/core';
import {RestaurantShareService} from "../../../../../core/services/in-app/restaurant-share.service";

@Component({
  selector: 'app-cb-restaurants-avis',
  templateUrl: './cb-restaurants-avis.component.html',
  styleUrls: ['./cb-restaurants-avis.component.scss']
})
export class CbRestaurantsAvisComponent implements OnInit {

  restaurant ;

  constructor(private restaurantShareService: RestaurantShareService) { }

  ngOnInit(): void {
    this.restaurant = this.restaurantShareService.getRestaurant()
  }

}
