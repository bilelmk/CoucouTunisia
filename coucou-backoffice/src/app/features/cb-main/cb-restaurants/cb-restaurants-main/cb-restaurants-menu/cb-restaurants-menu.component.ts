import { Component, OnInit } from '@angular/core';
import { RestaurantShareService } from "../../../../../core/services/in-app/restaurant-share.service";
import { environment } from "../../../../../../environments/environment";
import { MatDialog } from "@angular/material/dialog";
import { Helpers } from "../../../../../shared/helpers/helpers";
import { AlertService } from "../../../../../core/services/in-app/alert.service";
import { SnackbarService } from "../../../../../core/services/in-app/snackbar.service";
import { MenusService } from "../../../../../core/services/http/menus.service";
import { CbRestaurantsMenusAddComponent } from "./cb-restaurants-menus-add/cb-restaurants-menus-add.component";

@Component({
  selector: 'app-cb-restaurants-menu',
  templateUrl: './cb-restaurants-menu.component.html',
  styleUrls: ['./cb-restaurants-menu.component.scss']
})
export class CbRestaurantsMenuComponent implements OnInit {

  restaurant ;
  url = environment.url + '/api/images/'

  constructor(private restaurantShareService: RestaurantShareService,
              private dialog: MatDialog,
              private alertService: AlertService,
              private snackbarService: SnackbarService,
              private menusService: MenusService
  ) { }

  ngOnInit(): void {
    this.restaurant = this.restaurantShareService.getRestaurant()
  }

  delete(menu: any) {
    this.alertService.showAlert(
      () => {
        this.menusService.delete(menu.id).subscribe(
          res => {
            this.snackbarService.openSnackBar('Mise en place supprimé avec succès','success') ;
            Helpers.deleteFromArray(menu , this.restaurant.menus)
          },error => {
            this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
            console.log(error)
          }
        )
      }, "Voulez-vous vraiment supprimer ?"
    )
  }

  openAddDialog() {
    const dialogRef = this.dialog.open( CbRestaurantsMenusAddComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '600px' , data : { array : this.restaurant.menus , id : this.restaurant.id }
    });
  }
}
