import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { PermissionService } from '../../../../core/services/http/permission.service';
import { Helpers } from '../../../../shared/helpers/helpers';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cb-permissions-modal',
  templateUrl: './cb-permissions-modal.component.html',
  styleUrls: ['./cb-permissions-modal.component.scss']
})
export class CbPermissionsModalComponent implements OnInit {

  form: FormGroup;
  errors;

  constructor(public dialog: MatDialog,
              public matDialogRef: MatDialogRef<CbPermissionsModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ,
              private snackbarService: SnackbarService ,
              private permissionService: PermissionService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/other/errors.json').subscribe((data : any) => {
      this.errors = data;
    });

    if(!this.data.isEditMode) {
      this.form = new FormGroup({
        name: new FormControl("", Validators.required),
        description:  new FormControl(""),
      });
    }
    else {
      this.form = new FormGroup({
        name: new FormControl(this.data.item.name, Validators.required),
        description:  new FormControl(this.data.item.description || ''),
      });
    }
  }

  add() {
    this.permissionService.add(this.form.value).subscribe(
      (res) => {
        Helpers.addToArray(res , this.data.array)
        this.snackbarService.openSnackBar('Permission ajoutée avec succès', 'success');
        this.matDialogRef.close();
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout de permission', 'fail');
        console.log(err)
      }
    );
  }

  update() {
    const permission = {
      ...this.form.value ,
      id: this.data.item.id
    }
    this.permissionService.update(permission).subscribe(
      (res) => {
        Helpers.updateFields(this.form.value ,this.data.item )
        this.snackbarService.openSnackBar('Permission modifier avec succès', 'success');
        this.matDialogRef.close();
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de la modification de permission', 'fail');
      }
    );
  }
}
