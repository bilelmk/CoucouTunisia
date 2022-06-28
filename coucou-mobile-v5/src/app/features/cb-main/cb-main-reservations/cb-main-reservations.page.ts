import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CbMainReservationsRdvComponent } from './cb-main-reservations-rdv/cb-main-reservations-rdv.component';
import { RestaurantService } from '../../../core/services/http/restaurant.service';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cb-main-reservations',
  templateUrl: './cb-main-reservations.page.html',
  styleUrls: ['./cb-main-reservations.page.scss'],
})
export class CbMainReservationsPage {

  restaurants ;

  constructor(private restaurantsService: RestaurantService,
              private spinnerService: SpinnerService,
              private router: Router ,
              private modalController: ModalController) { }

  ionViewWillEnter() {
    this.spinnerService.activate();
    this.restaurantsService.getRestaurants().subscribe(
        res => {
          this.spinnerService.deactivate();
          this.restaurants = res ;
        },
        error => {
          this.spinnerService.deactivate();
          console.log(error);
        }
    );
  }

  openAddReservationModal() {
    this.modalController.create({
      component: CbMainReservationsRdvComponent ,
      componentProps: {
        restaurants: this.restaurants,
      }
    }).then(modal => modal.present());
  }

  openListReservationPage() {
    this.router.navigate(['/main/reservations/my-reservations']) ;
  }


}
