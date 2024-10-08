import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { AdminsService } from '../../../../core/services/http/admins.service';
import { RoleService } from '../../../../core/services/http/role.service';
import { Role } from '../../../../core/models/role';
import { Helpers } from '../../../../shared/helpers/helpers';

@Component({
  selector: 'app-cb-admins-modal',
  templateUrl: './cb-admins-modal.component.html',
  styleUrls: ['./cb-admins-modal.component.scss']
})
export class CbAdminsModalComponent implements OnInit {

  form: FormGroup;
  roles : Role[] = [] ;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<CbAdminsModalComponent>,
              private snackbarService: SnackbarService ,
              private adminService: AdminsService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private roleService: RoleService ) {
    if(!this.data.isEditMode) {
      this.form = new FormGroup({
        firstname: new FormControl("", Validators.required),
        lastname:  new FormControl("", Validators.required),
        password: new FormControl("", Validators.required),
        confirm: new FormControl("", Validators.required),
        username: new FormControl("", Validators.required),
        roleId: new FormControl("", Validators.required),
      });
    }
    else {
      this.form = new FormGroup({
        firstname: new FormControl(data.item.firstname, Validators.required),
        lastname:  new FormControl(data.item.lastname, Validators.required),
        username: new FormControl(data.item.username, Validators.required),
        roleId: new FormControl(data.item.role, Validators.required),
      });
    }
  }

  ngOnInit() {
    this.roleService.getAll().subscribe(
      res => {
        this.roles = res ;
      },
      error => {
        console.log(error)
      }
    )
  }

  add() {
    this.spinnerService.activate();
    this.form.value.roleId = this.form.value.roleId.id
    this.adminService.add(this.form.value).subscribe(
      (res) => {
        Helpers.addToArray(res , this.data.array)
        this.snackbarService.openSnackBar('Administrateur ajouté avec succès', 'success');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        console.log(err)
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout de l\'administrateur', 'fail');
        this.spinnerService.deactivate();
      }
    );
  }

  update() {
    this.form.value.roleId = this.form.value.roleId.id
    this.adminService.update(this.form.value , this.data.item.id).subscribe(
      res => {
        Helpers.updateFields(this.form.value ,this.data.item )
        this.snackbarService.openSnackBar('Administrateur modifier avec succès', 'success');
        this.matDialogRef.close();
      },
      error => {
          this.snackbarService.openSnackBar("Erreur lors de la modification de l'administrateur",'fail');
      }
    )
  }

  compareFn( optionOne, optionTwo ) : boolean {
    return optionOne.id === optionTwo.id;
  }

}
