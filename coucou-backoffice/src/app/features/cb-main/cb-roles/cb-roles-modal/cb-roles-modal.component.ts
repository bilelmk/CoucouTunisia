import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { Permission } from '../../../../core/models/permission';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Helpers } from '../../../../shared/helpers/helpers';
import { RoleService } from '../../../../core/services/http/role.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cb-roles-modal',
  templateUrl: './cb-roles-modal.component.html',
  styleUrls: ['./cb-roles-modal.component.scss']
})
export class CbRolesModalComponent implements OnInit {

  form: FormGroup;
  permissions: Permission[] = [] ;
  errors ;

  constructor(public dialog: MatDialog,
              public matDialogRef: MatDialogRef<CbRolesModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ,
              private snackbarService: SnackbarService ,
              private roleService: RoleService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/other/errors.json').subscribe((data : any) => {
      this.errors = data;
    });

    if(!this.data.isEditMode) {
      this.form = new FormGroup({
        description: new FormControl(""),
        name: new FormControl("", Validators.required),
      });
    }
    else {
      this.form = new FormGroup({
        name: new FormControl(this.data.item.name, Validators.required),
        description: new FormControl(this.data.item.description || ''),
      });
    }
  }

  add()  {
    this.roleService.add(this.form.value).subscribe(
      (res) => {
        Helpers.addToArray(res , this.data.array)
        this.snackbarService.openSnackBar('Role ajoutée avec succès', 'success');
        this.matDialogRef.close();
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout de role', 'fail');
      }
    );
  }

  update() {
    this.roleService.update(this.form.value , this.data.item.id).subscribe(
      (res) => {
        Helpers.updateFields(this.form.value ,this.data.item )
        this.snackbarService.openSnackBar('Role modifier avec succès', 'success');
        this.matDialogRef.close();
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de la modification de role', 'fail');
      }
    );
  }
}
