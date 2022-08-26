import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { RestaurantService } from '../../../../core/services/http/restaurant.service';
import { environment } from '../../../../../environments/environment';
import { CbMainReservationsRdvComponent } from '../../cb-main-reservations/cb-main-reservations-rdv/cb-main-reservations-rdv.component';
import { ModalController } from '@ionic/angular';
// import { CallNumber } from "@ionic-native/call-number/ngx";
// import * as L from 'leaflet';

@Component({
  selector: 'app-cb-main-home-restaurant-details',
  templateUrl: './cb-main-home-restaurant-details.page.html',
  styleUrls: ['./cb-main-home-restaurant-details.page.scss'],
})
export class CbMainHomeRestaurantDetailsPage {

   url = environment.url + 'images/' ;
   restaurant ;

    // // Location
    // map ;
    // marker ;
    // smallIcon = new L.Icon({
    //    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    //    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    //    iconSize:    [25, 41],
    //    iconAnchor:  [12, 41],
    //    popupAnchor: [1, -34],
    //    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    //    shadowSize:  [41, 41]
    // });

    loading = false ;
    error = false ;

  constructor(private route: ActivatedRoute,
              private spinnerService: SpinnerService,
              private restaurantService: RestaurantService,
              private modalController: ModalController,
              private router: Router,
              // private callNumber: CallNumber
  ) {}

  ionViewWillEnter() {
       this.loading = true ;
       this.spinnerService.activate();
       this.restaurantService.getRestaurant(Number (this.route.snapshot.paramMap.get('id'))).subscribe(
           res => {
             this.loading = false ;
             this.spinnerService.deactivate();
             this.restaurant = res ;
             // this.createMap() ;
           },
           error => {
             this.loading = false ;
             this.error = true ;
             this.spinnerService.deactivate();
           }
       );
  }

     // // location
     // createMap() {
     //  console.log(this.restaurant)
     //    if (!this.map) {
     //        const coordinate = {lat: this.restaurant.latitude, lng: this.restaurant.longitude};
     //        const zoomLevel = 10;
     //        this.map = L.map('map', {
     //            center: [coordinate.lat, coordinate.lng],
     //            zoom: zoomLevel
     //        });
     //        const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     //            minZoom: 0,
     //            maxZoom: 20,
     //            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     //        });
     //        mainLayer.addTo(this.map);
     //        this.marker = L.marker([coordinate.lat, coordinate.lng], {icon: this.smallIcon});
     //        this.marker.addTo(this.map);
     //    }
     // }

     // setMarkerCoordinate(event: any){
     //     this.marker.setLatLng([event.latlng.lat, event.latlng.latitude]);
     // }

    openAddReservationModal() {
        this.modalController.create({
            component: CbMainReservationsRdvComponent ,
            componentProps: {
                restaurant: this.restaurant,
            }
        }).then(modal => modal.present());
    }

    close() {
        this.router.navigate(['/main/home']);
    }

    // call() {
    //     this.callNumber.callNumber('50117077', true)
    //         .then(res => console.log('Launched dialer!', res))
    //         .catch(err => console.log('Error launching dialer', err));
    //
    // }
}
