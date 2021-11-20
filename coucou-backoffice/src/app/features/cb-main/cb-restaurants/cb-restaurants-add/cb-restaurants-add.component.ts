import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';

@Component({
  selector: 'app-cb-restaurants-add',
  templateUrl: './cb-restaurants-add.component.html',
  styleUrls: ['./cb-restaurants-add.component.scss']
})
export class CbRestaurantsAddComponent implements OnInit {

  addForm: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<CbRestaurantsAddComponent>,
              private snackbarService: SnackbarService ,) {
    this.addForm = new FormGroup({
      name: new FormControl("", Validators.required),
      description:  new FormControl("", Validators.required),
      phone:  new FormControl("", Validators.required),

      monday :  new FormControl("", Validators.required),
      mondayOpen:  new FormControl({value: '', disabled: false}, Validators.required),
      mondayClose:  new FormControl({value: '', disabled: false}, Validators.required),
      tuesday:  new FormControl("", Validators.required),
      tuesdayOpen:  new FormControl({value: '', disabled: false}, Validators.required),
      tuesdayClose:  new FormControl({value: '', disabled: false}, Validators.required),
      wednesday:  new FormControl("", Validators.required),
      wednesdayOpen:  new FormControl({value: '', disabled: false}, Validators.required),
      wednesdayClose:  new FormControl({value: '', disabled: false}, Validators.required),
      thursday:  new FormControl("", Validators.required),
      thursdayOpen:  new FormControl({value: '', disabled: false}, Validators.required),
      thursdayClose:  new FormControl({value: '', disabled: false}, Validators.required),
      friday:  new FormControl("", Validators.required),
      fridayOpen:  new FormControl({value: '', disabled: false}, Validators.required),
      fridayClose:  new FormControl({value: '', disabled: false}, Validators.required),
      saturday:  new FormControl("", Validators.required),
      saturdayOpen:  new FormControl({value: '', disabled: false}, Validators.required),
      saturdayClose:  new FormControl({value: '', disabled: false}, Validators.required),
      sunday:  new FormControl("", Validators.required),
      sundayOpen:  new FormControl({value: '', disabled: false}, Validators.required),
      sundayClose:  new FormControl({value: '', disabled: false}, Validators.required),
      // description:  new FormControl("", Validators.required),
      // description:  new FormControl("", Validators.required),
      // description:  new FormControl("", Validators.required),
      // description:  new FormControl("", Validators.required),
      // description:  new FormControl("", Validators.required),
      // description:  new FormControl("", Validators.required),
      // description:  new FormControl("", Validators.required),
      // description:  new FormControl("", Validators.required),
      // description:  new FormControl("", Validators.required),
      // description:  new FormControl("", Validators.required),

    });
  }

  ngOnInit(): void {
  }

  handleDayChange(day: string , event) {
    if(event.checked) {
      this.addForm.get(day + "Open").disable()
      this.addForm.get(day + "Close").disable()
    }
    else {
      this.addForm.get(day + "Open").enable()
      this.addForm.get(day + "Close").enable()
    }
  }

}
