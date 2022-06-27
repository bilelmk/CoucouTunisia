import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ImageCroppedEvent } from "ngx-image-cropper";
import { Helpers } from "../../../../../../shared/helpers/helpers";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SnackbarService } from "../../../../../../core/services/in-app/snackbar.service";
import { SpinnerService } from "../../../../../../core/services/in-app/spinner.service";
import { MenusService } from "../../../../../../core/services/http/menus.service";

@Component({
  selector: 'app-cb-restaurants-menus-add',
  templateUrl: './cb-restaurants-menus-add.component.html',
  styleUrls: ['./cb-restaurants-menus-add.component.scss']
})
export class CbRestaurantsMenusAddComponent implements OnInit {

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

  constructor(public matDialogRef: MatDialogRef<CbRestaurantsMenusAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private snackbarService: SnackbarService,
              private spinnerService: SpinnerService,
              private menusService: MenusService) { }

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
    console.log(this.form.value)
    this.spinnerService.activate() ;
    const data =  new FormData()

    const menu = {
      name: this.form.value.name ,
      description: this.form.value.description ,
      restaurantId: this.data.id
    }
    data.append('image' , this.fileToReturn)
    data.append('menu' , JSON.stringify(menu))

    this.menusService.add(data).subscribe(
      res => {
        Helpers.addToArray(res , this.data.array)
        this.snackbarService.openSnackBar('Menu ajoutée avec succès','success') ;
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
