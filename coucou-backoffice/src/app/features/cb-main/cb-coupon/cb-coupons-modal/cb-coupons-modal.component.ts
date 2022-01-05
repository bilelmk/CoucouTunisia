import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import { RestaurantService } from '../../../../core/services/http/restaurant.service';
import { CouponsService } from '../../../../core/services/http/coupons.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cb-coupons-modal',
  templateUrl: './cb-coupons-modal.component.html',
  styleUrls: ['./cb-coupons-modal.component.scss']
})
export class CbCouponsModalComponent implements OnInit {

  form: FormGroup;
  restaurants = []

  constructor(private restaurantService: RestaurantService,
              private couponsService: CouponsService) {
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
    // format the date ( pick only date )
    this.form.value.expirationDate = moment(this.form.value.expirationDate).format("DD-MM-YYYY");
    this.couponsService.generateCoupons(this.form.value).subscribe(
      res => {
        console.log(res)
      }, error => {
        console.log(error)
      }
    )
  }

}
