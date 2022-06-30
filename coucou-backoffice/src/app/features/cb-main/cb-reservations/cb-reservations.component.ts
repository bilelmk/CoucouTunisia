import { Component, OnInit } from '@angular/core';
import { CbReservationsAddComponent } from "./cb-reservations-add/cb-reservations-add.component";
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { MatDialog } from "@angular/material/dialog";
import { ReservationsService } from "../../../core/services/http/reservations.service";
import { PageEvent } from "@angular/material/paginator";
import { Reservation } from "../../../core/models/reservation";
import { SearchClientRequest } from "../../../core/dtos/search-client-request";

@Component({
  selector: 'app-cb-reservations',
  templateUrl: './cb-reservations.component.html',
  styleUrls: ['./cb-reservations.component.scss']
})
export class CbReservationsComponent implements OnInit {

  public dataSource: Reservation[];
  displayedColumns = ['restaurant','client','date','time','adultNumber','childrenNumber','babeNumber','carNumber','state','canceled', 'buttons' ];
  reservations : Reservation[] = [] ;

  error = false ;
  loading = false ;

  limit = 10 ;
  offset = 0 ;
  key = "" ;

  recordsNumber ;
  pageEvent: PageEvent ;

  constructor(private spinnerService: SpinnerService ,
              private dialog: MatDialog,
              private reservationService: ReservationsService) { }

  ngOnInit() {
    this.getRecords()
  }

  onPaginationChange(event){
    this.offset = this.limit * event.pageIndex
    this.getRecords()
  }

  getRecords(){
    this.loading = true ;
    this.spinnerService.activate()
    let searchClientRequest = new SearchClientRequest(this.offset, this.limit , null)
    this.reservationService.getAll(searchClientRequest).subscribe(
      (res :any) => {
        this.loading = false ;
        this.recordsNumber = res.count ;
        this.reservations = res.rows ;
        this.dataSource = this.reservations
        this.spinnerService.deactivate()
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }

  openModal() {
    const dialogRef = this.dialog.open( CbReservationsAddComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      // data : { item: item , array : this.admins , isEditMode: isEditMode}
    });
    // dialogRef.afterClosed().subscribe(
    //   res => {
    //     this.dataSource.data = this.admins;
    //   }
    // );
  }

  confirm(reservation) {
    this.spinnerService.activate()
    const state = {
      id: reservation.id ,
      state: 'checked'
    }
    this.reservationService.updateState(state).subscribe(
      res => {
        reservation.state = 'checked'
        this.spinnerService.deactivate()
      },
      error => {
        this.spinnerService.deactivate()
      }
    )
  }
}
