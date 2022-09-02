import { Component } from '@angular/core';
import { RestaurantService } from '../../../core/services/http/restaurant.service';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { Restaurant } from '../../../core/classes/restaurant';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cb-main-home',
  templateUrl: './cb-main-home.page.html',
  styleUrls: ['./cb-main-home.page.scss'],
})
export class CbMainHomePage {

  restaurants: Restaurant[] ;
  url = environment.url + 'images/' ;

  loading = false ;
  error = false ;

  constructor(private restaurantsService: RestaurantService,
              private spinnerService: SpinnerService,
              private router: Router) { }

  ionViewWillEnter() {
    this.loading = true ;
    this.spinnerService.activate();
    this.restaurantsService.getRestaurants().subscribe(
        res => {
          this.loading = false ;
          this.spinnerService.deactivate();
          this.restaurants = res ;
        },
        error => {
          this.loading = false ;
          this.error = true ;
          this.spinnerService.deactivate();
        }
    );
  }

  getRestaurantDetails(id: number) {
      this.router.navigate(['main/home/restaurant' , id]);
  }
}
