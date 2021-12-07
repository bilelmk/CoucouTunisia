import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Helpers } from '../../../../shared/helpers/helpers';
import { CbRestaurantsAddMenuComponent } from './cb-restaurants-add-menu/cb-restaurants-add-menu.component';
import { CbRestaurantsAddRoomComponent } from './cb-restaurants-add-room/cb-restaurants-add-room.component';
import { CbRestaurantsAddImageComponent } from './cb-restaurants-add-image/cb-restaurants-add-image.component';
import { RestaurantService } from '../../../../core/services/http/restaurant.service';

@Component({
  selector: 'app-cb-restaurants-add',
  templateUrl: './cb-restaurants-add.component.html',
  styleUrls: ['./cb-restaurants-add.component.scss']
})
export class CbRestaurantsAddComponent implements OnInit {

  informationsForm: FormGroup;
  planningForm: FormGroup;

  imageChangedEvent: any = '';
  croppedImage: any = null;

  formData;

  restaurants ;
  menus = [] ;
  rooms = [] ;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<CbRestaurantsAddComponent>,
              private snackbarService: SnackbarService ,
              private restaurantService: RestaurantService) {
    this.informationsForm = new FormGroup({
      name: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      webSite: new FormControl("", [Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
      responsable: new FormControl("", Validators.required),
    })
    this.planningForm = new FormGroup({
      monday :  new FormControl(""),
      mondayOpen:  new FormControl({value: '', disabled: true}),
      mondayClose:  new FormControl({value: '', disabled: true}),
      tuesday:  new FormControl(""),
      tuesdayOpen:  new FormControl({value: '', disabled: true}),
      tuesdayClose:  new FormControl({value: '', disabled: true}),
      wednesday:  new FormControl(""),
      wednesdayOpen:  new FormControl({value: '', disabled: true}),
      wednesdayClose:  new FormControl({value: '', disabled: true}),
      thursday:  new FormControl(""),
      thursdayOpen:  new FormControl({value: '', disabled: true}),
      thursdayClose:  new FormControl({value: '', disabled: true}),
      friday:  new FormControl(""),
      fridayOpen:  new FormControl({value: '', disabled: true}),
      fridayClose:  new FormControl({value: '', disabled: true}),
      saturday:  new FormControl(""),
      saturdayOpen:  new FormControl({value: '', disabled: true}),
      saturdayClose:  new FormControl({value: '', disabled: true}),
      sunday:  new FormControl(""),
      sundayOpen:  new FormControl({value: '', disabled: true}),
      sundayClose:  new FormControl({value: '', disabled: true}),
    });
  }

  ngOnInit(): void {
    this.formData = new FormData() ;
  }

  onPickImage(event : any){
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    // Preview
    this.croppedImage = event.base64;
    let fileToReturn = Helpers.base64ToFile(
      event.base64,
      this.imageChangedEvent.target.files[0].name,
    )
    this.formData.append('image' ,   fileToReturn ) ;
  }

  // cancel() {
  //   this.imageChangedEvent = '';
  //   this.croppedImage = null;
  //   this.formData = new FormData();
  // }

  handleDayChange(day: string , event) {
    if(!event.checked) {
      this.planningForm.get(day + "Open").disable()
      this.planningForm.get(day + "Close").disable()
    }
    else {
      this.planningForm.get(day + "Open").enable()
      this.planningForm.get(day + "Close").enable()
    }
  }



  addMenu() {
    const dialogRef = this.dialog.open( CbRestaurantsAddMenuComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '600px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        if(res) {
          this.menus.push({
            description: res.description ,
            name: res.name
          })
          this.formData.append('menuImages' , res.image )
        }
      }
    );
  }

  addRoom() {
    const dialogRef = this.dialog.open( CbRestaurantsAddRoomComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '500px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        if(res) {
          this.rooms.push({
            description: res.description ,
            name: res.name,
            minPlace: res.description ,
            maxPlace: res.name ,
            packPrice: res.description ,
            packChildrenPrice: res.name
          })
          this.formData.append('roomImages' , res.image )
        }
      }
    );
  }

  addImage() {
    const dialogRef = this.dialog.open( CbRestaurantsAddImageComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '500px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
      }
    );
  }

  addRestaurant() {
    let restaurant = {
      name: this.informationsForm.value.name ,
      description:  this.informationsForm.value.description ,
      phone:  this.informationsForm.value.phone,
      email: this.informationsForm.value.email,
      webSite: this.informationsForm.value.webSite ,
      responsable: this.informationsForm.value.responsable ,
      planning : {
        monday :  this.planningForm.value.monday ,
        mondayOpen:  this.planningForm.value.mondayOpen ,
        mondayClose:  this.planningForm.value.mondayClose ,
        tuesday: this.planningForm.value.tuesday ,
        tuesdayOpen:  this.planningForm.value.tuesdayOpen ,
        tuesdayClose:  this.planningForm.value.tuesdayClose ,
        wednesday:  this.planningForm.value.wednesday ,
        wednesdayOpen:  this.planningForm.value.wednesdayOpen ,
        wednesdayClose: this.planningForm.value.wednesdayClose ,
        thursday:  this.planningForm.value.thursday ,
        thursdayOpen:  this.planningForm.value.thursdayOpen ,
        thursdayClose:  this.planningForm.value.thursdayClose ,
        friday:  this.planningForm.value.friday ,
        fridayOpen: this.planningForm.value.fridayOpen ,
        fridayClose:  this.planningForm.value.fridayClose ,
        saturday:  this.planningForm.value.saturday ,
        saturdayOpen: this.planningForm.value.saturdayOpen ,
        saturdayClose: this.planningForm.value.saturdayClose ,
        sunday:  this.planningForm.value.sunday ,
        sundayOpen:  this.planningForm.value.sundayOpen ,
        sundayClose:  this.planningForm.value.sundayClose ,
      },
      image:'',
      rooms: this.rooms,
      menus: this.menus
    }
    this.formData.append('restaurant', JSON.stringify(restaurant));
    this.restaurantService.add(this.formData).subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      },
    )
  }


  saveInformation() {

  }

  savePlanning() {

  }
}
