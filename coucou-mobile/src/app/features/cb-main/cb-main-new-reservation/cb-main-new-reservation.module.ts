import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbMainNewReservationPageRoutingModule } from './cb-main-new-reservation-routing.module';

import { CbMainNewReservationPage } from './cb-main-new-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbMainNewReservationPageRoutingModule
  ],
  declarations: [CbMainNewReservationPage]
})
export class CbMainNewReservationPageModule {}
