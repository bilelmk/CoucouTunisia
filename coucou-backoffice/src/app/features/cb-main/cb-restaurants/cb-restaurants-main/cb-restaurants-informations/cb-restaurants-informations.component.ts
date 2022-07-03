import { Component, OnInit } from '@angular/core';
import { RestaurantShareService } from "../../../../../core/services/in-app/restaurant-share.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SpinnerService } from "../../../../../core/services/in-app/spinner.service";
import { SnackbarService } from "../../../../../core/services/in-app/snackbar.service";
import { RestaurantService } from "../../../../../core/services/http/restaurant.service";

@Component({
  selector: 'app-cb-restaurants-informations',
  templateUrl: './cb-restaurants-informations.component.html',
  styleUrls: ['./cb-restaurants-informations.component.scss']
})
export class CbRestaurantsInformationsComponent implements OnInit {

  restaurant ;
  initialRestaurant ;

  informationsForm: FormGroup;

  isEditMode = false ;

  constructor(private restaurantShareService: RestaurantShareService,
              private spinnerService: SpinnerService,
              private snackbarService: SnackbarService,
              private restaurantService: RestaurantService) {
    this.informationsForm = new FormGroup({
      name: new FormControl('', Validators.required ),
      description: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      webSite: new FormControl('', [Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
      responsable: new FormControl('', Validators.required),
      smsMessage: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.disableFields() ;
    this.restaurant = {...this.restaurantShareService.getRestaurant()}
    this.initialRestaurant = {...this.restaurantShareService.getRestaurant()}

    this.informationsForm.patchValue({
      name: this.restaurant.name ,
      description: this.restaurant.description,
      phone: this.restaurant.phone ,
      email: this.restaurant.email,
      webSite: this.restaurant.webSite ,
      responsable: this.restaurant.responsable,
      smsMessage: this.restaurant.smsMessage,
    });
  }

  enableEdit() {
    this.isEditMode = true ;
    this.enableFields()
  }

  disableFields() {
    this.informationsForm.get('name').disable()
    this.informationsForm.get('description').disable()
    this.informationsForm.get('phone').disable()
    this.informationsForm.get('email').disable()
    this.informationsForm.get('webSite').disable()
    this.informationsForm.get('responsable').disable()
    this.informationsForm.get('smsMessage').disable()
  }

  enableFields() {
    this.informationsForm.get('name').enable()
    this.informationsForm.get('description').enable()
    this.informationsForm.get('phone').enable()
    this.informationsForm.get('email').enable()
    this.informationsForm.get('webSite').enable()
    this.informationsForm.get('responsable').enable()
    this.informationsForm.get('smsMessage').enable()
  }

  update(){
    this.spinnerService.activate();
    let restaurant = {
      ...this.informationsForm.value ,
      id: this.restaurant.id
    }
    this.restaurantService.update(restaurant).subscribe(
      res => {
        this.initialRestaurant = { ...restaurant , image:this.restaurant.image } ;
        this.spinnerService.deactivate();
        this.isEditMode = false ;
        this.disableFields();
      },
      error => {
        this.spinnerService.deactivate();
      }
    )
  }

  cancel() {
    this.isEditMode = false ;
    this.disableFields();
    this.restaurant = {...this.initialRestaurant}
    this.informationsForm.patchValue({
      name: this.restaurant.name ,
      description: this.restaurant.description,
      phone: this.restaurant.phone ,
      email: this.restaurant.email,
      webSite: this.restaurant.webSite ,
      responsable: this.restaurant.responsable,
      smsMessage: this.restaurant.smsMessage,
    });
  }
}
