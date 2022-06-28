import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cb-main-reservations-details',
  templateUrl: './cb-main-reservations-details.component.html',
  styleUrls: ['./cb-main-reservations-details.component.scss'],
})
export class CbMainReservationsDetailsComponent implements OnInit {

  @Input() reservation ;

  elementType = 'url';
  value = '' ;

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {
    this.value = JSON.stringify({text: 'qsàçqsdçà)qsd)àq;)àçsqdà)çq@@@@@@@@)àçqsàçdqsàd)', id: this.reservation.id});
  }

  close() {
    this.modalController.dismiss();
  }
}
