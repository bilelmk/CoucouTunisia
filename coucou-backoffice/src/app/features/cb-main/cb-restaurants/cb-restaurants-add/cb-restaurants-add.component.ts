import {Component, Inject, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SnackbarService } from '../../../../core/services/in-app/snackbar.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Helpers } from '../../../../shared/helpers/helpers';
import { CbRestaurantsAddMenuComponent } from './cb-restaurants-add-menu/cb-restaurants-add-menu.component';
import { CbRestaurantsAddRoomComponent } from './cb-restaurants-add-room/cb-restaurants-add-room.component';
import { CbRestaurantsAddImageComponent } from './cb-restaurants-add-image/cb-restaurants-add-image.component';
import { RestaurantService } from '../../../../core/services/http/restaurant.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-cb-restaurants-add',
  templateUrl: './cb-restaurants-add.component.html',
  styleUrls: ['./cb-restaurants-add.component.scss']
})
export class CbRestaurantsAddComponent implements OnInit {

  // Informations
  informationsForm: FormGroup;
  imageChangedEvent: any = '';
  croppedImage: any = null;
  image ;

  // Planning
  planningForm: FormGroup;

  // menus
  menus = [] ;

  // rooms
  rooms = [] ;

  // galerie
  images = [] ;

  // Location
  map ;
  marker ;
  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  });


  // restaurant to add
  formData;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<CbRestaurantsAddComponent>,
              private snackbarService: SnackbarService ,
              private restaurantService: RestaurantService ,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.informationsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      webSite: new FormControl('', [Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
      responsable: new FormControl('', Validators.required),
      smsMessage: new FormControl('', Validators.required),
    });
    this.planningForm = new FormGroup({
      monday :  new FormControl(''),
      mondayOpen:  new FormControl({value: '', disabled: true}),
      mondayClose:  new FormControl({value: '', disabled: true}),
      tuesday:  new FormControl(''),
      tuesdayOpen:  new FormControl({value: '', disabled: true}),
      tuesdayClose:  new FormControl({value: '', disabled: true}),
      wednesday:  new FormControl(''),
      wednesdayOpen:  new FormControl({value: '', disabled: true}),
      wednesdayClose:  new FormControl({value: '', disabled: true}),
      thursday:  new FormControl(''),
      thursdayOpen:  new FormControl({value: '', disabled: true}),
      thursdayClose:  new FormControl({value: '', disabled: true}),
      friday:  new FormControl(''),
      fridayOpen:  new FormControl({value: '', disabled: true}),
      fridayClose:  new FormControl({value: '', disabled: true}),
      saturday:  new FormControl(''),
      saturdayOpen:  new FormControl({value: '', disabled: true}),
      saturdayClose:  new FormControl({value: '', disabled: true}),
      sunday:  new FormControl(''),
      sundayOpen:  new FormControl({value: '', disabled: true}),
      sundayClose:  new FormControl({value: '', disabled: true}),
    });
  }

  ngOnInit(): void {
    this.formData = new FormData() ;
  }

  // informations
  onPickImage(event: any){
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    // Preview
    this.croppedImage = event.base64;
    const fileToReturn = Helpers.base64ToFile(
      event.base64,
      this.imageChangedEvent.target.files[0].name,
    );
    this.image = fileToReturn
  }


  // planning
  handleDayChange(day: string , event) {
    if (!event.checked) {
      this.planningForm.get(day + 'Open').disable();
      this.planningForm.get(day + 'Close').disable();
    }
    else {
      this.planningForm.get(day + 'Open').enable();
      this.planningForm.get(day + 'Close').enable();
    }
  }


  // manus
  addMenu() {
    const dialogRef = this.dialog.open( CbRestaurantsAddMenuComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '600px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        if (res) {
          this.menus.push({
            description: res.description ,
            name: res.name,
            image: res.image
          });
          this.formData.append('menuImages' , res.fileToReturn );
        }
      }
    );
  }


  // rooms
  addRoom() {
    const dialogRef = this.dialog.open( CbRestaurantsAddRoomComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '600px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        if (res) {
          console.log(res)
          this.rooms.push({
            description: res.description ,
            name: res.name,
            minPlace: res.minPlace ,
            maxPlace: res.maxPlace ,
            packPrice: res.packPrice ,
            packChildrenPrice: res.packChildrenPrice,
            image: res.image
          });
          this.formData.append('roomImages' , res.fileToReturn );
        }
      }
    );
  }


  // galerie
  addImage() {
    const dialogRef = this.dialog.open( CbRestaurantsAddImageComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '500px'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        if(res) {
          this.images.push({
            image: res.image
          });
          this.formData.append('restaurantImages' , res.fileToReturn );
        }
      }
    );
  }


  // location
  createMap() {
    const coordinate = { lat: 36.786967, lng: 10.184326 };
    const zoomLevel = 10;
    this.map = L.map('map', {
      center: [coordinate.lat, coordinate.lng],
      zoom: zoomLevel
    });
    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 20,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    mainLayer.addTo(this.map);
    this.map.addEventListener('click' , (e) => this.setMarkerCoordinate(e));
    this.marker = L.marker([coordinate.lat, coordinate.lng], { icon: this.smallIcon });
    this.marker.addTo(this.map);
  }

  setMarkerCoordinate(event: any){
    this.marker.setLatLng([event.latlng.lat, event.latlng.lng]);
  }

  handleTabChange(event: number) {
    // if selected tab is localisation of index 5 create the map
    if (event === 5 && !this.map) {
      setTimeout(() => {this.createMap()}, 500);
    }
  }


  // general
  addRestaurant() {
    this.spinnerService.activate() ;

    this.rooms.forEach(room => room.image = "");
    this.menus.forEach(menu => menu.image = "");
    this.images.forEach(image => image.image = "");
    this.formData.append('image' ,   this.image ) ;

    const restaurant = {
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
      image: '',
      images: this.images ,
      rooms: this.rooms,
      menus: this.menus,
      longitude: this.marker._latlng.lng ,
      latitude: this.marker._latlng.lat
    };
    this.formData.append('restaurant', JSON.stringify(restaurant));
    this.restaurantService.add(this.formData).subscribe(
      res => {
        this.spinnerService.deactivate() ;
        this.matDialogRef.close();
        this.snackbarService.openSnackBar('Restaurant ajouté avec succès', 'success');
      },
      error => {
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout de restaurant', 'fail');
        this.spinnerService.deactivate() ;
        this.formData = new FormData();
      },
    );
  }

  toNextTab(tabGroup) {
    const index = tabGroup.selectedIndex + 1
    tabGroup.selectedIndex = index
    tabGroup._tabs._results[index]._disabled = false
  }
}
