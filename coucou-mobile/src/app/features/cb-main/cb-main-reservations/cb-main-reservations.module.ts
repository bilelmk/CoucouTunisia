import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbMainReservationsPageRoutingModule } from './cb-main-reservations-routing.module';

import { CbMainReservationsPage } from './cb-main-reservations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbMainReservationsPageRoutingModule
  ],
  declarations: [CbMainReservationsPage]
})
export class CbMainReservationsPageModule {}
