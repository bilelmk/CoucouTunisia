import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbMainRestaurantPage } from './cb-main-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: CbMainRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbMainRestaurantPageRoutingModule {}
