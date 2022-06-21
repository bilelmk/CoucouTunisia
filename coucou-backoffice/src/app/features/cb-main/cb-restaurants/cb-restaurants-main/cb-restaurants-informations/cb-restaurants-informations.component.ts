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

  isEditMode = false ;

  constructor(private restaurantShareService: RestaurantShareService) {
    this.informationsForm = new FormGroup({
      name: new FormControl('', Validators.required ),
      description: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      webSite: new FormControl('', [Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
      responsable: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.disableFields() ;
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

  enableEdit() {
    this.isEditMode = true ;
    this.enableFields()
  }

  update() {
    this.isEditMode = false ;

  }

  disableFields() {
    this.informationsForm.get('name').disable()
    this.informationsForm.get('description').disable()
    this.informationsForm.get('phone').disable()
    this.informationsForm.get('email').disable()
    this.informationsForm.get('webSite').disable()
    this.informationsForm.get('responsable').disable()

  }

  enableFields() {
    this.informationsForm.get('name').enable()
    this.informationsForm.get('description').enable()
    this.informationsForm.get('phone').enable()
    this.informationsForm.get('email').enable()
    this.informationsForm.get('webSite').enable()
    this.informationsForm.get('responsable').enable()
  }
}
