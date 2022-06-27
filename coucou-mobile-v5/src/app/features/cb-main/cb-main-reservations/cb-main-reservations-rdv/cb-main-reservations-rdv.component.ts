import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { ToastService } from '../../../../core/services/in-app/toast.service';
import { CalendarMode, Step } from 'ionic2-calendar/calendar';
import { CbMainReservationsAddComponent } from '../cb-main-reservations-add/cb-main-reservations-add.component';

@Component({
  selector: 'app-cb-main-reservations-rdv',
  templateUrl: './cb-main-reservations-rdv.component.html',
  styleUrls: ['./cb-main-reservations-rdv.component.scss'],
})
export class CbMainReservationsRdvComponent implements OnInit {

  @Input() restaurants ;
  @Input() restaurant ;

  monthEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  months: any;
  calendar = {
    mode: 'month' as CalendarMode,
    step: 30 as Step,
    currentDate: new Date()
  };

  date = '';

  selectedRestaurant ;
  selectedRestaurantName = '';
  selectedRestaurantId: any;

  constructor(private modalController: ModalController,
              private spinnerService: SpinnerService,
              private toastService: ToastService) {
  }

  ngOnInit() {
    if (this.restaurant) {
      this.restaurants = [] ;
      this.selectedRestaurantId = this.restaurant.id ;
      this.selectedRestaurantName = this.restaurant.name ;
      this.selectedRestaurant = this.restaurant ;
    }
    this.months = {
      previous: this.monthEn[(new Date).getMonth() - 2],
      current: this.monthEn[(new Date).getMonth() - 1],
      next: this.monthEn[(new Date).getMonth()],
    };
  }

  close() {
    this.modalController.dismiss();
  }

  onDateChanged(event: Date) {
    this.date = event.toString();
    const date = new Date(event);
    this.months = {
      previous: this.monthEn[date.getMonth() - 2] || '',
      current: this.monthEn[date.getMonth() - 1] || '',
      next: this.monthEn[date.getMonth()] || '',
    };
  }

  next() {
    this.modalController.create({
      component: CbMainReservationsAddComponent ,
      componentProps: {
        date: this.date,
        restaurant: this.selectedRestaurant
      }
    }).then(modal => modal.present());
  }

  onRestaurantSelect() {
    for (const restaurant of this.restaurants) {
      // tslint:disable-next-line:triple-equals
      if (restaurant.id == this.selectedRestaurantId) {
        this.selectedRestaurantName = restaurant.name ;
        this.selectedRestaurant = restaurant;
      }
    }
  }
}
