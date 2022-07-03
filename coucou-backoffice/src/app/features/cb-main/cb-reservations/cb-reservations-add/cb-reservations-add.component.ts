import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RestaurantService } from "../../../../core/services/http/restaurant.service";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ReservationsService } from "../../../../core/services/http/reservations.service";
import { Helpers } from "../../../../shared/helpers/helpers";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";

@Component({
  selector: 'app-cb-reservations-add',
  templateUrl: './cb-reservations-add.component.html',
  styleUrls: ['./cb-reservations-add.component.scss']
})
export class CbReservationsAddComponent implements OnInit {

  form: FormGroup;
  restaurants;

  constructor(private restaurantsService: RestaurantService,
              private spinnerService: SpinnerService ,
              private dialog: MatDialog,
              private reservationService: ReservationsService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public matDialogRef: MatDialogRef<CbReservationsAddComponent>,
              private snackbarService: SnackbarService ,) {
    if(!this.data.isEditMode) {
      this.form = new FormGroup({
        restaurantId: new FormControl(null, Validators.required),
        note: new FormControl(null),
        date: new FormControl(null, Validators.required),
        time: new FormControl(null, Validators.required),
        adultNumber: new FormControl(null, Validators.required),
        childrenNumber: new FormControl(null, Validators.required),
        babeNumber: new FormControl(null, Validators.required),
        room: new FormControl(null, Validators.required),
        carNumber: new FormControl(null, Validators.required),
        price: new FormControl(null, Validators.required),
        finalPrice: new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required),
        canceled: new FormControl(null, Validators.required),
      });
    }
    else {
      this.form = new FormGroup({
        restaurantId: new FormControl(data.item.restaurant.id, Validators.required),
        note: new FormControl(data.item.note),
        date: new FormControl(data.item.date, Validators.required),
        time: new FormControl(data.item.time, Validators.required),
        adultNumber: new FormControl(data.item.adultNumber, Validators.required),
        childrenNumber: new FormControl(data.item.childrenNumber, Validators.required),
        babeNumber: new FormControl(data.item.babeNumber, Validators.required),
        room: new FormControl(data.item.room, Validators.required),
        carNumber: new FormControl(data.item.carNumber, Validators.required),
        price: new FormControl(data.item.price, Validators.required),
        finalPrice: new FormControl(data.item.finalPrice, Validators.required),
        state: new FormControl(data.item.state, Validators.required),
        canceled: new FormControl(data.item.canceled, Validators.required),
      });
    }
  }

  ngOnInit(): void {
    console.log(this.data)
    this.spinnerService.activate();
    this.restaurantsService.getAllLite().subscribe(
      res => {
        this.spinnerService.deactivate()
        this.restaurants = res ;
      },
      error => {
        this.spinnerService.deactivate()
        console.log(error)
      }
    )
  }

  add() {
  }

  update() {
    const reservation = {
      ...this.form.value ,
      id: this.data.item.id
    }
    this.spinnerService.activate();
    this.reservationService.update(reservation).subscribe(
      res => {
        this.spinnerService.deactivate()
        // search for restaurant ( you need it not the id )
        for(let restaurant of this.restaurants) {
          if(restaurant.id == this.form.value.restaurantId) this.form.value.restaurant = restaurant ;
        }
        Helpers.updateFields(this.form.value ,this.data.item )
        this.snackbarService.openSnackBar('Réservation modifier avec succès', 'success');
        this.matDialogRef.close();
      },
      error => {
        this.spinnerService.deactivate()
        this.snackbarService.openSnackBar("Erreur lors de la modification",'fail');
      }
    )
  }

}
