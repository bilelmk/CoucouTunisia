import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ImageCroppedEvent } from "ngx-image-cropper";
import { Helpers } from "../../../../../../shared/helpers/helpers";
import { SnackbarService } from "../../../../../../core/services/in-app/snackbar.service";
import { SpinnerService } from "../../../../../../core/services/in-app/spinner.service";
import { ImagesService } from "../../../../../../core/services/http/images.service";

@Component({
  selector: 'app-cb-restaurants-images-add',
  templateUrl: './cb-restaurants-images-add.component.html',
  styleUrls: ['./cb-restaurants-images-add.component.scss']
})
export class CbRestaurantsImagesAddComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<CbRestaurantsImagesAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private snackbarService: SnackbarService,
              private spinnerService: SpinnerService,
              private imageService: ImagesService) { }

  imageChangedEvent: any = '';
  croppedImage: any = null;
  fileToReturn ;

  ngOnInit(): void {
  }

  onPickImage(event : any){
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
    const gallery = {
      restaurantId: this.data.id
    }
    data.append('image' , this.fileToReturn)
    data.append('gallery' , JSON.stringify(gallery))

    this.imageService.add(data).subscribe(
      res => {
        Helpers.addToArray(res , this.data.array)
        this.snackbarService.openSnackBar('Image ajouté avec succès','success') ;
        this.spinnerService.deactivate() ;
        this.matDialogRef.close()
      },
      error => {
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout', 'fail');
        this.spinnerService.deactivate() ;
        console.log(error)
      }
    )
  }

}
