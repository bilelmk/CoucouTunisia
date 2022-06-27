import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CbMainReservationsPageRoutingModule } from './cb-main-reservations-routing.module';
import { CbMainReservationsPage } from './cb-main-reservations.page';
import { CbMainReservationsAddComponent } from './cb-main-reservations-add/cb-main-reservations-add.component';
import { CbMainReservationsRdvComponent } from './cb-main-reservations-rdv/cb-main-reservations-rdv.component';
import { NgCalendarModule } from 'ionic2-calendar';
import { CbMainReservationsListComponent } from './cb-main-reservations-list/cb-main-reservations-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbMainReservationsPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [
    CbMainReservationsPage ,
    CbMainReservationsAddComponent,
    CbMainReservationsRdvComponent,
    CbMainReservationsListComponent
  ]
})
export class CbMainReservationsPageModule {}
