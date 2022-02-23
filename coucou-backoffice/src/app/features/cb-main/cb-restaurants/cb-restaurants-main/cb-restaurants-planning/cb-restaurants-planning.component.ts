import { Component, OnInit } from '@angular/core';
import { RestaurantShareService } from "../../../../../core/services/in-app/restaurant-share.service";
import { FormControl, FormGroup } from "@angular/forms";
import { SpinnerService } from "../../../../../core/services/in-app/spinner.service";
import { SnackbarService } from "../../../../../core/services/in-app/snackbar.service";
import { PlanningService } from "../../../../../core/services/http/planning.service";

@Component({
  selector: 'app-cb-restaurants-planning',
  templateUrl: './cb-restaurants-planning.component.html',
  styleUrls: ['./cb-restaurants-planning.component.scss']
})
export class CbRestaurantsPlanningComponent implements OnInit {

  restaurant ;
  planningForm: FormGroup;

  isEditMode = false ;

  constructor(private restaurantShareService: RestaurantShareService,
              private spinnerService: SpinnerService ,
              private snackbarService: SnackbarService ,
              private planningService: PlanningService) {
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
    this.disableFields() ;
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

  enableEdit() {
    this.isEditMode = true ;
    this.enableFields();
  }

  update() {
    this.spinnerService.activate();
    this.planningService.update(this.planningForm.value, this.restaurant.planning.id).subscribe(
      res => {
        this.disableFields() ;
        this.isEditMode = false ;
        this.spinnerService.deactivate();
        console.log(res)
      },
      error => {
        this.spinnerService.deactivate();
        console.log(error)
      }
    )
  }

  disableFields() {
    this.planningForm.get('monday').disable()
    this.planningForm.get('mondayOpen').disable()
    this.planningForm.get('mondayClose').disable()
    this.planningForm.get('tuesday').disable()
    this.planningForm.get('tuesdayOpen').disable()
    this.planningForm.get('tuesdayClose').disable()
    this.planningForm.get('wednesday').disable()
    this.planningForm.get('wednesdayOpen').disable()
    this.planningForm.get('wednesdayClose').disable()
    this.planningForm.get('thursday').disable()
    this.planningForm.get('thursdayOpen').disable()
    this.planningForm.get('thursdayClose').disable()
    this.planningForm.get('friday').disable()
    this.planningForm.get('fridayOpen').disable()
    this.planningForm.get('fridayClose').disable()
    this.planningForm.get('saturday').disable()
    this.planningForm.get('saturdayOpen').disable()
    this.planningForm.get('saturdayClose').disable()
    this.planningForm.get('sunday').disable()
    this.planningForm.get('sundayOpen').disable()
    this.planningForm.get('sundayClose').disable()
  }

  enableFields() {
    this.planningForm.get('monday').enable()
    this.planningForm.get('tuesday').enable()
    this.planningForm.get('wednesday').enable()
    this.planningForm.get('thursday').enable()
    this.planningForm.get('friday').enable()
    this.planningForm.get('saturday').enable()
    this.planningForm.get('sunday').enable()
    if(this.planningForm.value.monday) {
      this.planningForm.get('mondayOpen').enable()
      this.planningForm.get('mondayClose').enable()
    }
    if(this.planningForm.value.tuesday) {
      this.planningForm.get('tuesdayOpen').enable()
      this.planningForm.get('tuesdayClose').enable()
    }
    if(this.planningForm.value.wednesday) {
      this.planningForm.get('wednesdayOpen').enable()
      this.planningForm.get('wednesdayClose').enable()
    }
    if(this.planningForm.value.thursday) {
      this.planningForm.get('thursdayOpen').enable()
      this.planningForm.get('thursdayClose').enable()
    }
    if(this.planningForm.value.friday) {
      this.planningForm.get('fridayOpen').enable()
      this.planningForm.get('fridayClose').enable()
    }
    if(this.planningForm.value.saturday) {
      this.planningForm.get('saturdayOpen').enable()
      this.planningForm.get('saturdayClose').enable()
    }
    if(this.planningForm.value.sunday) {
      this.planningForm.get('sundayOpen').enable()
      this.planningForm.get('sundayClose').enable()
    }
  }

}
