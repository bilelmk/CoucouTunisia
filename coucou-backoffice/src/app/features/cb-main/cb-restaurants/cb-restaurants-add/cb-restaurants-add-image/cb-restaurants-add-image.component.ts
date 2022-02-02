import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Helpers } from '../../../../../shared/helpers/helpers';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-cb-restaurants-add-image',
  templateUrl: './cb-restaurants-add-image.component.html',
  styleUrls: ['./cb-restaurants-add-image.component.scss']
})
export class CbRestaurantsAddImageComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<CbRestaurantsAddImageComponent>) { }

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

  add(){
    let image = {
      image: this.croppedImage,
      fileToReturn: this.fileToReturn,
    }
    this.matDialogRef.close(image)
  }
}
