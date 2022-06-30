import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CbReservationPageRoutingModule } from './cb-reservation-routing.module';
import { CbReservationPage } from './cb-reservation.page';
import {
  CbMainReservationsDetailsComponent
} from './cb-main-reservations-details/cb-main-reservations-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbReservationPageRoutingModule
  ],
  declarations: [
      CbReservationPage,
    CbMainReservationsDetailsComponent
  ]
})
export class CbReservationPageModule {}
