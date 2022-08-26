import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbMainHomeRestaurantDetailsPage } from './cb-main-home-restaurant-details.page';

const routes: Routes = [
  {
    path: '',
    component: CbMainHomeRestaurantDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbMainHomeRestaurantDetailsPageRoutingModule {}
