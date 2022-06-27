import { Component, OnInit } from '@angular/core';
import { RestaurantShareService } from "../../../../../core/services/in-app/restaurant-share.service";
import { environment } from "../../../../../../environments/environment";
import { Helpers } from "../../../../../shared/helpers/helpers";
import { AlertService } from "../../../../../core/services/in-app/alert.service";
import { SnackbarService } from "../../../../../core/services/in-app/snackbar.service";
import { RoomsService } from "../../../../../core/services/http/rooms.service";
import { MatDialog } from "@angular/material/dialog";
import { CbRestaurantsRoomsAddComponent } from "./cb-restaurants-rooms-add/cb-restaurants-rooms-add.component";

@Component({
  selector: 'app-cb-restaurants-rooms',
  templateUrl: './cb-restaurants-rooms.component.html',
  styleUrls: ['./cb-restaurants-rooms.component.scss']
})
export class CbRestaurantsRoomsComponent implements OnInit {

  restaurant ;
  url = environment.url + '/api/images/'

  constructor(private restaurantShareService: RestaurantShareService,
              private alertService: AlertService,
              private snackbarService: SnackbarService,
              private roomService: RoomsService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.restaurant = this.restaurantShareService.getRestaurant()
  }

  delete(room: any) {
    this.alertService.showAlert(
      () => {
        this.roomService.delete(room.id).subscribe(
          res => {
            this.snackbarService.openSnackBar('Mise en place supprimé avec succès','success') ;
            Helpers.deleteFromArray(room , this.restaurant.rooms)
          },error => {
            this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
            console.log(error)
          }
        )
      }, "Voulez-vous vraiment supprimer ?"
    )
  }

  openAddDialog() {
    const dialogRef = this.dialog.open( CbRestaurantsRoomsAddComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '600px', data : { array : this.restaurant.rooms , id : this.restaurant.id }
    });
  }

}
