import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbMainNewReservationPage } from './cb-main-new-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: CbMainNewReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbMainNewReservationPageRoutingModule {}
