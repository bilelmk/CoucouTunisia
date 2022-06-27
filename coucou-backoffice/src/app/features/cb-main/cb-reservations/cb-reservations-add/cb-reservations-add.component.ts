import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RestaurantService } from "../../../../core/services/http/restaurant.service";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { MatDialog } from "@angular/material/dialog";
import { ReservationsService } from "../../../../core/services/http/reservations.service";

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
              private reservationService: ReservationsService) {
    this.form = new FormGroup({
      restaurant: new FormControl(""),
      note: new FormControl(""),
      date: new FormControl("", Validators.required),
      time: new FormControl("", Validators.required),
      adultNumber: new FormControl("", Validators.required),
      childrenNumber: new FormControl("", Validators.required),
      babeNumber: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {
    this.spinnerService.activate();
    this.restaurantsService.getAllLite().subscribe(
      res => {
        console.log(res)
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

}
