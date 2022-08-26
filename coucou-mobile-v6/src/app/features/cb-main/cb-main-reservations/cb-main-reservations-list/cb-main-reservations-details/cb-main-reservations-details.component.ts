import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpinnerService } from '../../../../../../../../coucou-mobile-v6/src/app/core/services/in-app/spinner.service';
import { ToastService } from '../../../../../../../../coucou-mobile-v6/src/app/core/services/in-app/toast.service';
import { ReservationService } from '../../../../../../../../coucou-mobile-v6/src/app/core/services/http/reservation.service';

@Component({
  selector: 'app-cb-main-reservations-details',
  templateUrl: './cb-main-reservations-details.component.html',
  styleUrls: ['./cb-main-reservations-details.component.scss'],
})
export class CbMainReservationsDetailsComponent implements OnInit {

  @Input() reservation ;

  elementType = 'url';
  value = '' ;

  constructor(private modalController: ModalController,
              private spinnerService: SpinnerService,
              private toastService: ToastService,
              private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.value = JSON.stringify({text: 'qsàçqsdçà)qsd)àq;)àçsqdà)çq@@@@@@@@)àçqsàçdqsàd)', id: this.reservation.id});
  }

  close() {
    this.modalController.dismiss();
  }

  getSateColor(state: string) {
    if (state === 'checking') {
      return 'state-info' ;
    }
    else {
      return 'state-success' ;
    }
  }

  getSateName(state: string) {
    switch (state) {
      case 'checking':
        return 'En cours' ;
      case 'checked':
        return 'Validée' ;
      case 'confirmed':
        return 'Confirmée' ;
      case 'arrived':
        return 'Arrivée' ;
      case 'finished':
        return 'Finis' ;
      default:
        return '' ;
    }
  }

  cancel(reservation) {
    this.spinnerService.activate();
    const canceled = {
      id: reservation.id ,
      canceled: true
    };
    this.reservationService.updateCanceled(canceled).subscribe(
        res => {
          this.toastService.show('Votre réservation est annulée', 'success');
          this.modalController.dismiss({id: reservation.id});
          this.spinnerService.deactivate() ;
        },
        error => {
          this.toastService.show('Erreur lors de l\'annulation', 'danger');
          this.spinnerService.deactivate() ;
        }
    );
  }

  confirm(reservation) {
    this.spinnerService.activate();
    const state = {
      id: reservation.id ,
      state: 'confirmed'
    };
    this.reservationService.updateState(state).subscribe(
        res => {
          this.toastService.show('Votre réservation est confirmée', 'success');
          this.modalController.dismiss();
          reservation.state = 'confirmed' ;
          this.spinnerService.deactivate() ;
        },
        error => {
          this.toastService.show('Erreur lors de la confirmation', 'danger');
          this.spinnerService.deactivate() ;
        }
    );
  }
}
