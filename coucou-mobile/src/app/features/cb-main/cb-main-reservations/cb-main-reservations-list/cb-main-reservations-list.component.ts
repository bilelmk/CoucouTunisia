import { Component } from '@angular/core';
import { ReservationService } from '../../../../core/services/http/reservation.service';
import { ModalController } from '@ionic/angular';
import {
  CbMainReservationsDetailsComponent
} from './cb-main-reservations-details/cb-main-reservations-details.component';
import { Router } from '@angular/router';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';

@Component({
  selector: 'app-cb-main-reservations-list',
  templateUrl: './cb-main-reservations-list.component.html',
  styleUrls: ['./cb-main-reservations-list.component.scss'],
})
export class CbMainReservationsListComponent {

  limit ;
  offset ;

  reservations;

  loading = false ;
  error = false ;

  constructor(private reservationsService: ReservationService,
              private modalController: ModalController,
              private router: Router ,
              private spinnerService: SpinnerService) { }

  ionViewWillEnter() {
    this.loadData() ;
  }

  loadData() {
    this.limit = 10 ; this.offset = 0 ;
    const searchRequest = {
      offset: this.offset ,
      limit : this.limit ,
    };
    this.loading = true ;
    this.spinnerService.activate();
    this.reservationsService.getAllByClient(searchRequest).subscribe(
        (res: any) => {
          this.loading = false ;
          this.spinnerService.deactivate();
          this.reservations = res.rows;
        }, error => {
          this.loading = false ;
          this.error = true ;
          this.spinnerService.deactivate();
        }
    );
  }

  close() {
    this.router.navigate(['/main/reservations']);
  }

  loadMoreData(event: any) {
    this.offset ++ ;
    const searchRequest = {
      offset: this.offset ,
      limit : this.limit ,
    };
    this.reservationsService.getAllByClient(searchRequest).subscribe(
        (res: any) => {
          this.reservations.push(...res.rows);
          event.target.complete();
          if (this.reservations.length === res.count) {
            event.target.disabled = true;
          }
        }, error => {
          console.log(error) ;
          event.target.complete();
        }
    );
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

  openDetailsModal(reservation) {
    this.modalController.create({
      component: CbMainReservationsDetailsComponent ,
      componentProps: {
        reservation,
      }
    }).then(modal => {
      modal.present() ;
      modal.onWillDismiss().then(
          id => {
            if (id) { this.loadData(); }
          }
      );
    });
  }

}
