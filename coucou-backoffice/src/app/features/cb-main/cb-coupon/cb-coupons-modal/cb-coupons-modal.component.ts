import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { RestaurantService } from '../../../../core/services/http/restaurant.service';
import { CouponsService } from '../../../../core/services/http/coupons.service';
import * as moment from 'moment';
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-cb-coupons-modal',
  templateUrl: './cb-coupons-modal.component.html',
  styleUrls: ['./cb-coupons-modal.component.scss']
})
export class CbCouponsModalComponent implements OnInit {

  form: FormGroup;
  restaurants = []

  constructor(private restaurantService: RestaurantService,
              private couponsService: CouponsService,
              private spinnerService: SpinnerService,
              private snackbarService: SnackbarService,
              public matDialogRef: MatDialogRef<CbCouponsModalComponent>) {
    this.form = new FormGroup({
      number: new FormControl("", Validators.required),
      expirationDate:  new FormControl("", Validators.required),
      reduction: new FormControl(0, [Validators.required, Validators.pattern(/^[1-9][0-9]?$|^100$/)]),
      general: new FormControl(false, Validators.required),
      restaurantId: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.restaurantService.getAllLite().subscribe(
      res => {
        this.restaurants = res
      },
      error => {
       console.log(error)
      })
  }

  generate() {
    this.spinnerService.activate();
    // format the date ( pick only date )
    this.form.value.expirationDate = moment(this.form.value.expirationDate).format("DD-MM-YYYY");
    this.couponsService.generateCoupons(this.form.value).subscribe(
      res => {
        this.snackbarService.openSnackBar('Coupons ajouté avec succès', 'success');
        this.spinnerService.deactivate()
        this.matDialogRef.close()
      }, error => {
        this.snackbarService.openSnackBar('Erreur lors de création des coupons', 'fail');
        this.spinnerService.deactivate()
        console.log(error)
      }
    )
  }

}
