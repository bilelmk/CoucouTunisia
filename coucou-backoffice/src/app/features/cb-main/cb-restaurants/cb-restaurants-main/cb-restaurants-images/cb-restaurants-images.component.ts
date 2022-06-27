import { Component, OnInit } from '@angular/core';
import { RestaurantShareService } from "../../../../../core/services/in-app/restaurant-share.service";
import { environment }  from "../../../../../../environments/environment";
import { CbRestaurantsImagesAddComponent } from "./cb-restaurants-images-add/cb-restaurants-images-add.component";
import { AlertService } from "../../../../../core/services/in-app/alert.service";
import { SnackbarService } from "../../../../../core/services/in-app/snackbar.service";
import { MatDialog } from "@angular/material/dialog";
import { Helpers} from "../../../../../shared/helpers/helpers";
import { ImagesService } from "../../../../../core/services/http/images.service";

@Component({
  selector: 'app-cb-restaurants-images',
  templateUrl: './cb-restaurants-images.component.html',
  styleUrls: ['./cb-restaurants-images.component.scss']
})
export class CbRestaurantsImagesComponent implements OnInit {

  restaurant ;
  url = environment.url + '/api/images/'

  constructor(private restaurantShareService: RestaurantShareService,
              private alertService: AlertService,
              private snackbarService: SnackbarService,
              private dialog: MatDialog,
              private imageService: ImagesService) { }

  ngOnInit(): void {
    this.restaurant = this.restaurantShareService.getRestaurant()
  }

  openAddDialog() {
    const dialogRef = this.dialog.open( CbRestaurantsImagesAddComponent, {
      panelClass: 'custom-dialog-container' , width: '800px' , height : '600px', data : { array : this.restaurant.images , id : this.restaurant.id }
    });
  }

  delete(image: any) {
    this.alertService.showAlert(
      () => {
        this.imageService.delete(image.id).subscribe(
          res => {
            this.snackbarService.openSnackBar('Image supprimé avec succès','success') ;
            Helpers.deleteFromArray(image , this.restaurant.images)
          },error => {
            this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
            console.log(error)
          }
        )
      }, "Voulez-vous vraiment supprimer ?"
    )
  }
}
