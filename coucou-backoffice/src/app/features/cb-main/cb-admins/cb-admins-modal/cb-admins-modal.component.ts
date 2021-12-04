import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { AdminsService } from '../../../../core/services/http/admins.service';

@Component({
  selector: 'app-cb-admins-modal',
  templateUrl: './cb-admins-modal.component.html',
  styleUrls: ['./cb-admins-modal.component.scss']
})
export class CbAdminsModalComponent {

  form: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<CbAdminsModalComponent>,
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
        firstname: new FormControl(data.item.firstname, Validators.required),
        lastname:  new FormControl(data.item.lastname, Validators.required),
        password: new FormControl(data.item.password, Validators.required),
        confirm: new FormControl(data.item.password, Validators.required),
        username: new FormControl(data.item.username, Validators.required),
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
        this.snackbarService.openSnackBar('Administrateur ajouté avec succès', 'green-snackbar');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        console.log(err)
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout de l\'administrateur', 'red-snackbar');
        this.spinnerService.deactivate();
      }
    );
  }

  update() {

  }
}
