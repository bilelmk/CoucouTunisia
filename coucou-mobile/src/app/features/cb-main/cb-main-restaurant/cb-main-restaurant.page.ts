import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { RestaurantService } from '../../../core/services/http/restaurant.service';
import { environment } from '../../../../environments/environment';
import { ModalController } from '@ionic/angular';
import {CbMainRestaurantReservationComponent} from './cb-main-restaurant-reservation/cb-main-restaurant-reservation.component';

@Component({
  selector: 'app-cb-main-restaurant',
  templateUrl: './cb-main-restaurant.page.html',
  styleUrls: ['./cb-main-restaurant.page.scss'],
})
export class CbMainRestaurantPage implements OnInit {

  restaurant = null;
  url = environment.url + 'images/' ;

  constructor(private route: ActivatedRoute,
              private spinnerService: SpinnerService,
              private restaurantsService: RestaurantService,
              private modalController: ModalController) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.spinnerService.activate();
    this.restaurantsService.getRestaurant(id).subscribe(
        res => {
          this.restaurant = res;
          this.spinnerService.deactivate();
        },
        error => {
          console.log(error);
          this.spinnerService.deactivate();
        }
    );
  }

  openReservationModal() {
      this.modalController.create({
          component: CbMainRestaurantReservationComponent ,
          componentProps: {
              restaurant: this.restaurant
          }
      }).then(modal => modal.present());
  }

}
