import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminsService } from '../../../../core/services/http/admins.service';

@Component({
  selector: 'app-cb-admins-add',
  templateUrl: './cb-admins-add.component.html',
  styleUrls: ['./cb-admins-add.component.scss']
})
export class CbAdminsAddComponent {

  form: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<CbAdminsAddComponent>,
              private snackbarService: SnackbarService ,
              private adminService: AdminsService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if(!this.data.edit) {
      this.form = new FormGroup({
        firstname: new FormControl("", Validators.required),
        lastname:  new FormControl("", Validators.required),
        password: new FormControl("", Validators.required),
        confirm: new FormControl("", Validators.required),
        username: new FormControl("", Validators.required),
      });
    }
    else {
      this.form = new FormGroup({
        firstname: new FormControl(data.admin.firstname, Validators.required),
        lastname:  new FormControl(data.admin.lastname, Validators.required),
        password: new FormControl(data.admin.password, Validators.required),
        confirm: new FormControl(data.admin.password, Validators.required),
        username: new FormControl(data.admin.username, Validators.required),
      });
    }

  }

  add() {
    this.spinnerService.activate();
    this.adminService.add(this.form.value).subscribe(
      (res) => {
        if (!this.data.array) {
          this.data = [];
        }
        this.data.array.push(res)
        // this.snackbarService.openSnackBar('Contract Type added successfully', 'green-snackbar');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        console.log(err)
        // this.snackbarService.openSnackBar('Error when adding contract type', 'red-snackbar');
        this.spinnerService.deactivate();
      }
    );
  }

}
