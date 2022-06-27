import { Component, OnInit } from '@angular/core';
import { CbReservationsAddComponent } from "./cb-reservations-add/cb-reservations-add.component";
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { MatDialog } from "@angular/material/dialog";
import { ReservationsService } from "../../../core/services/http/reservations.service";
import { RestaurantService } from "../../../core/services/http/restaurant.service";

@Component({
  selector: 'app-cb-reservations',
  templateUrl: './cb-reservations.component.html',
  styleUrls: ['./cb-reservations.component.scss']
})
export class CbReservationsComponent implements OnInit {

  constructor(private spinnerService: SpinnerService ,
              private dialog: MatDialog,
              private reservationService: ReservationsService) { }

  ngOnInit(): void {
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
}
