import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../../core/services/http/reservation.service';

@Component({
  selector: 'app-cb-main-reservations-list',
  templateUrl: './cb-main-reservations-list.component.html',
  styleUrls: ['./cb-main-reservations-list.component.scss'],
})
export class CbMainReservationsListComponent implements OnInit {

  limit = 10 ;
  offset = 0 ;

  reservations ;

  constructor(private reservationsService: ReservationService) { }

  ngOnInit() {
    const searchRequest = {
      offset: this.offset ,
      limit : this.limit ,
    };
    this.reservationsService.getAllByClient(searchRequest).subscribe(
        (res: any) => {
          this.reservations = res.rows;
          console.log(this.reservations);
        }, error => {
          console.log(error) ;
        }
    );
  }

  close() {
    // this.modalController.dismiss();
  }

  loadData(event: any) {
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

  getSateColor(state: any) {
    if (state === 'IN_PROGRESS' || state === 'WAITING_FOR_PART') {
      return 'state-info' ;
    }
    else if (state === 'REPARED') {
      return 'state-success' ;
    }
    else if (state === 'PART_UNAVAILABLE' || state === 'NON_REPARABLE') {
      return 'state-danger' ;
    }
    else {
      return '' ;
    }
  }
}
