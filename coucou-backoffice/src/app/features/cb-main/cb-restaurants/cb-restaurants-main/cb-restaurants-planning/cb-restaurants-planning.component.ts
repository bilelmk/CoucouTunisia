import { Component, OnInit } from '@angular/core';
import { RestaurantShareService } from "../../../../../core/services/in-app/restaurant-share.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-cb-restaurants-planning',
  templateUrl: './cb-restaurants-planning.component.html',
  styleUrls: ['./cb-restaurants-planning.component.scss']
})
export class CbRestaurantsPlanningComponent implements OnInit {

  restaurant ;
  planningForm: FormGroup;

  constructor(private restaurantShareService: RestaurantShareService) {
    this.planningForm = new FormGroup({
      monday :  new FormControl(''),
      mondayOpen:  new FormControl({value: '', disabled: true}),
      mondayClose:  new FormControl({value: '', disabled: true}),
      tuesday:  new FormControl(''),
      tuesdayOpen:  new FormControl({value: '', disabled: true}),
      tuesdayClose:  new FormControl({value: '', disabled: true}),
      wednesday:  new FormControl(''),
      wednesdayOpen:  new FormControl({value: '', disabled: true}),
      wednesdayClose:  new FormControl({value: '', disabled: true}),
      thursday:  new FormControl(''),
      thursdayOpen:  new FormControl({value: '', disabled: true}),
      thursdayClose:  new FormControl({value: '', disabled: true}),
      friday:  new FormControl(''),
      fridayOpen:  new FormControl({value: '', disabled: true}),
      fridayClose:  new FormControl({value: '', disabled: true}),
      saturday:  new FormControl(''),
      saturdayOpen:  new FormControl({value: '', disabled: true}),
      saturdayClose:  new FormControl({value: '', disabled: true}),
      sunday:  new FormControl(''),
      sundayOpen:  new FormControl({value: '', disabled: true}),
      sundayClose:  new FormControl({value: '', disabled: true}),
    });
  }

  ngOnInit(): void {
    this.restaurant = this.restaurantShareService.getRestaurant()
    this.planningForm.patchValue({
      monday: this.restaurant.planning.monday ,
      mondayOpen: this.restaurant.planning.mondayOpen ,
      mondayClose: this.restaurant.planning.mondayClose ,
      tuesday:this.restaurant.planning.tuesday ,
      tuesdayOpen: this.restaurant.planning.tuesdayOpen ,
      tuesdayClose: this.restaurant.planning.tuesdayClose ,
      wednesday: this.restaurant.planning.wednesday ,
      wednesdayOpen: this.restaurant.planning.wednesdayOpen,
      wednesdayClose: this.restaurant.planning.wednesdayClose,
      thursday: this.restaurant.planning.thursday,
      thursdayOpen: this.restaurant.planning.thursdayOpen,
      thursdayClose: this.restaurant.planning.thursdayClose,
      friday: this.restaurant.planning.friday,
      fridayOpen: this.restaurant.planning.fridayOpen,
      fridayClose: this.restaurant.planning.fridayClose,
      saturday: this.restaurant.planning.saturday,
      saturdayOpen: this.restaurant.planning.saturdayOpen,
      saturdayClose: this.restaurant.planning.saturdayClose,
      sunday: this.restaurant.planning.sunday,
      sundayOpen: this.restaurant.planning.sundayOpen,
      sundayClose: this.restaurant.planning.sundayClose,
    });
  }

  // planning
  handleDayChange(day: string , event) {
    if (!event.checked) {
      this.planningForm.get(day + 'Open').disable();
      this.planningForm.get(day + 'Close').disable();
    }
    else {
      this.planningForm.get(day + 'Open').enable();
      this.planningForm.get(day + 'Close').enable();
    }
  }

}
