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
import {
  CbMainReservationsDetailsComponent
} from './cb-main-reservations-list/cb-main-reservations-details/cb-main-reservations-details.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbMainReservationsPageRoutingModule,
    NgCalendarModule,
    NgxQRCodeModule
  ],
  declarations: [
    CbMainReservationsPage ,
    CbMainReservationsAddComponent,
    CbMainReservationsRdvComponent,
    CbMainReservationsListComponent,
    CbMainReservationsDetailsComponent
  ]
})
export class CbMainReservationsPageModule {}
