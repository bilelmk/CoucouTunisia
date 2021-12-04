import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Helpers } from '../../../../../shared/helpers/helpers';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cb-restaurants-add-room',
  templateUrl: './cb-restaurants-add-room.component.html',
  styleUrls: ['./cb-restaurants-add-room.component.scss']
})
export class CbRestaurantsAddRoomComponent implements OnInit {

  form: FormGroup;

  imageChangedEvent: any = '' ;
  croppedImage: any = null ;
  fileToReturn ;

  constructor(public matDialogRef: MatDialogRef<CbRestaurantsAddRoomComponent>) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      minPlace: new FormControl("", Validators.required),
      maxPlace: new FormControl("", Validators.required),
      packPrice: new FormControl("", Validators.required),
      packChildrenPrice: new FormControl("", Validators.required),
    })
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
    let menu = {
      ...this.form.value ,
      image: this.fileToReturn
    }
    this.matDialogRef.close(menu)
  }

}
