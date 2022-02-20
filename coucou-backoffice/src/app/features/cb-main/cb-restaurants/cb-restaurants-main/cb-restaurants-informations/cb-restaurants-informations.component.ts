import { Component, OnInit } from '@angular/core';
import { RestaurantShareService } from "../../../../../core/services/in-app/restaurant-share.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-cb-restaurants-informations',
  templateUrl: './cb-restaurants-informations.component.html',
  styleUrls: ['./cb-restaurants-informations.component.scss']
})
export class CbRestaurantsInformationsComponent implements OnInit {

  restaurant ;
  informationsForm: FormGroup;

  constructor(private restaurantShareService: RestaurantShareService) {
    this.informationsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      webSite: new FormControl('', [Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
      responsable: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.restaurant = this.restaurantShareService.getRestaurant()
    this.informationsForm.patchValue({
      name: this.restaurant.name ,
      description: this.restaurant.description,
      phone: this.restaurant.phone ,
      email: this.restaurant.email,
      webSite: this.restaurant.webSite ,
      responsable: this.restaurant.responsable,
    });
  }

}
