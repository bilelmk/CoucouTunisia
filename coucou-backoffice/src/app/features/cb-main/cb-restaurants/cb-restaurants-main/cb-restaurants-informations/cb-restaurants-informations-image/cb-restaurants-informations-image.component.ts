import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { SnackbarService } from "../../../../../../core/services/in-app/snackbar.service";
import { SpinnerService } from "../../../../../../core/services/in-app/spinner.service";
import { RestaurantService } from "../../../../../../core/services/http/restaurant.service";
import { ImageCroppedEvent } from "ngx-image-cropper";
import { Helpers } from "../../../../../../shared/helpers/helpers";

@Component({
  selector: 'app-cb-restaurants-informations-image',
  templateUrl: './cb-restaurants-informations-image.component.html',
  styleUrls: ['./cb-restaurants-informations-image.component.scss']
})
export class CbRestaurantsInformationsImageComponent implements OnInit {

  imageChangedEvent: any = '' ;
  croppedImage: any = null ;
  fileToReturn ;

  constructor(public matDialogRef: MatDialogRef<CbRestaurantsInformationsImageComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private snackbarService: SnackbarService,
              private spinnerService: SpinnerService,
              private restaurantService: RestaurantService) { }

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

  changeImage(){
    this.spinnerService.activate() ;
    const data =  new FormData()
    data.append('image' , this.fileToReturn)
    this.restaurantService.changeImage(data, this.data.item.id).subscribe(
      res => {
        this.data.item.image = res.image
        this.snackbarService.openSnackBar('Image modifiée avec succès','success') ;
        this.spinnerService.deactivate() ;
        this.matDialogRef.close()
      },
      error => {
        this.snackbarService.openSnackBar('Erreur lors de modification', 'fail');
        this.spinnerService.deactivate() ;
      }
    )
  }

}
