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

  monthEn = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November' , 'December'];
  months: any;
  calendar = {
    mode: 'month' as CalendarMode,
    step: 30 as Step,
    currentDate: new Date() ,
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
    const date = new Date ;
    this.months = {
      previous: date.getMonth() === 0 ? this.monthEn[11] : this.monthEn[date.getMonth() - 1] || '',
      current: this.monthEn[date.getMonth()] || '',
      next: date.getMonth() === 11 ? this.monthEn[0] : this.monthEn[date.getMonth() + 1] || '',
    };
  }

  close() {
    this.modalController.dismiss();
  }

  onDateChanged(event: Date) {
    const selectedDate = (event.setHours(0, 0, 0, 0));
    const currentDate = (new Date()).setHours(0, 0, 0, 0) ;
    if (selectedDate < currentDate) {
      // console.log('select valid date') ;
      this.date = null;
    }
    else {
      this.date = event.toString();
    }
    const date = new Date(event);
    this.months = {
      previous: date.getMonth() === 0 ? this.monthEn[11] : this.monthEn[date.getMonth() - 1] || '',
      current: this.monthEn[date.getMonth()] || '',
      next: date.getMonth() === 11 ? this.monthEn[0] : this.monthEn[date.getMonth() + 1] || '',
    };
  }

  next() {
    this.modalController.create({
      component: CbMainReservationsAddComponent ,
      componentProps: {
        date: this.date,
        restaurant: this.selectedRestaurant
      }
    }).then(modal => {
      modal.present() ;
      modal.onDidDismiss().then(
          res => { setTimeout(() => this.modalController.dismiss() , 100); }
      );
    });
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
