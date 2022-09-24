import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { ClientsService } from "../../../../core/services/http/clients.service";

@Component({
  selector: 'app-cb-clients-modal',
  templateUrl: './cb-clients-modal.component.html',
  styleUrls: ['./cb-clients-modal.component.scss']
})
export class CbClientsModalComponent {

  form: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<CbClientsModalComponent>,
              private snackbarService: SnackbarService ,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private clientsService: ClientsService) {
    if(!this.data.isEditMode) {
      this.form = new FormGroup({
        firstname: new FormControl("", Validators.required),
        lastname: new FormControl("", Validators.required),
        phone: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required),
      });
    }
    else {
      this.form = new FormGroup({
        phone: new FormControl(data.item.phone ,  Validators.required),
        firstname: new FormControl(data.item.phone, Validators.required),
        lastname: new FormControl(data.item.phone, Validators.required),
        email: new FormControl(data.item.phone, Validators.required),
      });
    }
  }

  add() {
    // this.spinnerService.activate();
    // this.form.value.roleId = this.form.value.roleId.id
    // this.clientService.add(this.form.value).subscribe(
    //     (res) => {
    //       Helpers.addToArray(res , this.data.array)
    //       this.snackbarService.openSnackBar('Administrateur ajouté avec succès', 'success');
    //       this.spinnerService.deactivate();
    //       this.matDialogRef.close();
    //     },
    //     err => {
    //       console.log(err)
    //       this.snackbarService.openSnackBar('Erreur lors de l\'ajout de l\'administrateur', 'fail');
    //       this.spinnerService.deactivate();
    //     }
    // );
  }

  update() {
    // this.form.value.roleId = this.form.value.roleId.id
    // this.clientService.update(this.form.value , this.data.item.id).subscribe(
    //     res => {
    //       Helpers.updateFields(this.form.value ,this.data.item )
    //       this.snackbarService.openSnackBar('Administrateur modifier avec succès', 'success');
    //       this.matDialogRef.close();
    //     },
    //     error => {
    //       this.snackbarService.openSnackBar("Erreur lors de la modification de l'administrateur",'fail');
    //     }
    // )
  }

  compareFn( optionOne, optionTwo ) : boolean {
    return optionOne.id === optionTwo.id;
  }

}
