import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ReservationService } from '../../core/services/http/reservation.service';
import {
  CbMainReservationsDetailsComponent
} from './cb-main-reservations-details/cb-main-reservations-details.component';
import { ModalController } from '@ionic/angular';
import { LoadingService } from '../../core/services/in-app/loading.service';

@Component({
  selector: 'app-cb-reservation',
  templateUrl: './cb-reservation.page.html',
  styleUrls: ['./cb-reservation.page.scss'],
})
export class CbReservationPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner,
              private reservationService: ReservationService,
              private modalController: ModalController,
              private loadingService: LoadingService) { }

  ngOnInit() {
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      const id = JSON.parse(barcodeData.text).id ;
      this.loadingService.activate() ;
      this.reservationService.getById(id).subscribe(
          res => {
            this.openDetailsModal(res);
            this.loadingService.deactivate() ;
          },
          error => {
            this.loadingService.deactivate() ;
            console.log(error);
          }
      );
    }).catch(err => {
      console.log('Error', err);
    });
  }

  openDetailsModal(reservation) {
    this.modalController.create({
      component: CbMainReservationsDetailsComponent ,
      componentProps: {
        reservation,
      }
    }).then(modal => {modal.present(); });
  }
}
