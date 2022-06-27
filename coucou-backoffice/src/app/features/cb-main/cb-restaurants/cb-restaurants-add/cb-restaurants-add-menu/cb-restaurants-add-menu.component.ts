import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Helpers } from '../../../../../shared/helpers/helpers';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cb-restaurants-add-menu',
  templateUrl: './cb-restaurants-add-menu.component.html',
  styleUrls: ['./cb-restaurants-add-menu.component.scss']
})
export class CbRestaurantsAddMenuComponent implements OnInit {

  form: FormGroup;
  public Editor = ClassicEditor;
  public config = {
    language: 'en' ,
    toolbar: [ 'heading', '|', 'bold', 'italic', '|', 'link', '|', 'outdent', 'indent', '|',
      'bulletedList', 'numberedList', '|', 'undo', 'redo']
  };
  description ;

  imageChangedEvent: any = '';
  croppedImage: any = null;
  fileToReturn ;

  constructor(public matDialogRef: MatDialogRef<CbRestaurantsAddMenuComponent>) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      description: new FormControl(""),
    })
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
    let menu = {
      name: this.form.value.name ,
      description: this.form.value.description ,
      image: this.croppedImage,
      fileToReturn: this.fileToReturn,
    }
    this.matDialogRef.close(menu)
  }
}
