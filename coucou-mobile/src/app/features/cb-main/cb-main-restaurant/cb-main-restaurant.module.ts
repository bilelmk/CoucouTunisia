import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CbMainRestaurantPageRoutingModule } from './cb-main-restaurant-routing.module';
import { CbMainRestaurantPage } from './cb-main-restaurant.page';
import { SharedModule } from '../../../shared/shared.module';
import { CbMainRestaurantReservationComponent } from './cb-main-restaurant-reservation/cb-main-restaurant-reservation.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CbMainRestaurantPageRoutingModule,
        SharedModule
    ],
    declarations: [
        CbMainRestaurantPage,
        CbMainRestaurantReservationComponent
    ],
    entryComponents: [
        CbMainRestaurantReservationComponent
    ]
})
export class CbMainRestaurantPageModule {}
