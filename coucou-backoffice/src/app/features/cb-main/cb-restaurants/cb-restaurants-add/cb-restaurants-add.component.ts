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
import {RestaurantService} from '../../../../core/services/http/restaurant.service';

@Component({
  selector: 'app-cb-restaurants-add',
  templateUrl: './cb-restaurants-add.component.html',
  styleUrls: ['./cb-restaurants-add.component.scss']
})
export class CbRestaurantsAddComponent implements OnInit {

  addForm: FormGroup;

  imageChangedEvent: any = '';
  croppedImage: any = null;

  formData = new FormData() ;

  restaurants ;
  menus = [] ;
  rooms = [] ;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<CbRestaurantsAddComponent>,
              private snackbarService: SnackbarService ,
              private restaurantService: RestaurantService) {
    this.addForm = new FormGroup({

      name: new FormControl("", Validators.required),
      description:  new FormControl("", Validators.required),
      phone:  new FormControl("", Validators.required),
      email: new FormControl("", Validators.required) ,
      webSite:  new FormControl("", Validators.required),
      responsable: new FormControl("", Validators.required) ,

      monday :  new FormControl("", Validators.required),
      mondayOpen:  new FormControl({value: '', disabled: false}, Validators.required),
      mondayClose:  new FormControl({value: '', disabled: false}, Validators.required),
      tuesday:  new FormControl("", Validators.required),
      tuesdayOpen:  new FormControl({value: '', disabled: false}, Validators.required),
      tuesdayClose:  new FormControl({value: '', disabled: false}, Validators.required),
      wednesday:  new FormControl("", Validators.required),
      wednesdayOpen:  new FormControl({value: '', disabled: false}, Validators.required),
      wednesdayClose:  new FormControl({value: '', disabled: false}, Validators.required),
      thursday:  new FormControl("", Validators.required),
      thursdayOpen:  new FormControl({value: '', disabled: false}, Validators.required),
      thursdayClose:  new FormControl({value: '', disabled: false}, Validators.required),
      friday:  new FormControl("", Validators.required),
      fridayOpen:  new FormControl({value: '', disabled: false}, Validators.required),
      fridayClose:  new FormControl({value: '', disabled: false}, Validators.required),
      saturday:  new FormControl("", Validators.required),
      saturdayOpen:  new FormControl({value: '', disabled: false}, Validators.required),
      saturdayClose:  new FormControl({value: '', disabled: false}, Validators.required),
      sunday:  new FormControl("", Validators.required),
      sundayOpen:  new FormControl({value: '', disabled: false}, Validators.required),
      sundayClose:  new FormControl({value: '', disabled: false}, Validators.required),

    });
  }

  ngOnInit(): void {
  }

  handleDayChange(day: string , event) {
    if(!event.checked) {
      this.addForm.get(day + "Open").disable()
      this.addForm.get(day + "Close").disable()
    }
    else {
      this.addForm.get(day + "Open").enable()
      this.addForm.get(day + "Close").enable()
    }
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

  cancel() {
    this.imageChangedEvent = '';
    this.croppedImage = null;
    this.formData = new FormData();
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
        }
        this.formData.append('menuImages' , res.image )
        // this.dataSource = new MatTableDataSource<Admin>(this.admins);
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
        }
        this.formData.append('roomImages' , res.image )
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
      name: this.addForm.value.name ,
      description:  this.addForm.value.description ,
      phone:  this.addForm.value.phone,
      email: this.addForm.value.email,
      webSite: this.addForm.value.webSite ,
      responsable: this.addForm.value.responsable ,
      planning : {
        monday :  this.addForm.value.monday ,
        mondayOpen:  this.addForm.value.mondayOpen ,
        mondayClose:  this.addForm.value.mondayClose ,
        tuesday: this.addForm.value.tuesday ,
        tuesdayOpen:  this.addForm.value.tuesdayOpen ,
        tuesdayClose:  this.addForm.value.tuesdayClose ,
        wednesday:  this.addForm.value.wednesday ,
        wednesdayOpen:  this.addForm.value.wednesdayOpen ,
        wednesdayClose: this.addForm.value.wednesdayClose ,
        thursday:  this.addForm.value.thursday ,
        thursdayOpen:  this.addForm.value.thursdayOpen ,
        thursdayClose:  this.addForm.value.thursdayClose ,
        friday:  this.addForm.value.friday ,
        fridayOpen: this.addForm.value.fridayOpen ,
        fridayClose:  this.addForm.value.fridayClose ,
        saturday:  this.addForm.value.saturday ,
        saturdayOpen: this.addForm.value.saturdayOpen ,
        saturdayClose: this.addForm.value.saturdayClose ,
        sunday:  this.addForm.value.sunday ,
        sundayOpen:  this.addForm.value.sundayOpen ,
        sundayClose:  this.addForm.value.sundayClose ,
      },
      rooms: this.rooms,
      menus: this.menus
    }
    const blob = new Blob([JSON.stringify(restaurant)], {type: 'application/json'});
    this.formData.append('restaurant', blob);

    console.log(this.formData)
  }


}
