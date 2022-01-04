import { Component, OnInit } from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import {Helpers} from '../../../../../shared/helpers/helpers';

@Component({
  selector: 'app-cb-restaurants-add-image',
  templateUrl: './cb-restaurants-add-image.component.html',
  styleUrls: ['./cb-restaurants-add-image.component.scss']
})
export class CbRestaurantsAddImageComponent implements OnInit {

  constructor() { }

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
}
