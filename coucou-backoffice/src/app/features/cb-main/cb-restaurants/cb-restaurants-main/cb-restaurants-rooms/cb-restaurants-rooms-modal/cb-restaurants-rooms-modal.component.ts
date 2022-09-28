import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { RoomsService } from "../../../../../../core/services/http/rooms.service";
import { SnackbarService } from "../../../../../../core/services/in-app/snackbar.service";
import { SpinnerService } from "../../../../../../core/services/in-app/spinner.service";
import { ImageCroppedEvent } from "ngx-image-cropper";
import { Helpers } from "../../../../../../shared/helpers/helpers";

@Component({
  selector: 'app-cb-restaurants-rooms-modal',
  templateUrl: './cb-restaurants-rooms-modal.component.html',
  styleUrls: ['./cb-restaurants-rooms-modal.component.scss']
})
export class CbRestaurantsRoomsModalComponent implements OnInit {

  form: FormGroup;

  imageChangedEvent: any = '' ;
  croppedImage: any = null ;
  fileToReturn ;

  constructor(public matDialogRef: MatDialogRef<CbRestaurantsRoomsModalComponent>,
              private roomsService: RoomsService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private snackbarService: SnackbarService,
              private spinnerService: SpinnerService
  ) {
    if(!data.isEditMode){
      this.form = new FormGroup({
        name: new FormControl("", Validators.required),
        description: new FormControl("", Validators.required),
        minPlace: new FormControl("", Validators.required),
        maxPlace: new FormControl("", Validators.required),
        packPrice: new FormControl("", Validators.required),
        packChildrenPrice: new FormControl("", Validators.required),
      })
    }
    else {
      this.form = new FormGroup({
        name: new FormControl(this.data.item?.name, Validators.required),
        description: new FormControl(this.data.item?.description, Validators.required),
        minPlace: new FormControl(this.data.item?.minPlace, Validators.required),
        maxPlace: new FormControl(this.data.item?.maxPlace, Validators.required),
        packPrice: new FormControl(this.data.item?.packPrice, Validators.required),
        packChildrenPrice: new FormControl(this.data.item?.packChildrenPrice, Validators.required),
      })
    }
  }

  ngOnInit(): void {
  }

  onPickImage(event : any) {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.fileToReturn = Helpers.base64ToFile(
      event.base64,
      this.imageChangedEvent.target.files[0].name,
    )
  }

  add() {
    this.spinnerService.activate() ;
    const data =  new FormData()
    const room = {
      ...this.form.value ,
      restaurantId: this.data.id
    }
    data.append('image' , this.fileToReturn)
    data.append('room' , JSON.stringify(room))

    this.roomsService.add(data).subscribe(
      res => {
        Helpers.addToArray(res , this.data.array)
        this.snackbarService.openSnackBar('Mise en place ajoutée avec succès','success') ;
        this.spinnerService.deactivate() ;
        this.matDialogRef.close()
      },
      error => {
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout', 'fail');
        this.spinnerService.deactivate() ;
      }
    )
  }

  update() {

  }
}
