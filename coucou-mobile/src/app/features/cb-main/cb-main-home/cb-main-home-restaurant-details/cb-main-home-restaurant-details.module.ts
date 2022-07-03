import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CbMainHomeRestaurantDetailsPageRoutingModule } from './cb-main-home-restaurant-details-routing.module';
import { CbMainHomeRestaurantDetailsPage } from './cb-main-home-restaurant-details.page';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbMainHomeRestaurantDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [CbMainHomeRestaurantDetailsPage]
})
export class CbMainHomeRestaurantDetailsPageModule {}
