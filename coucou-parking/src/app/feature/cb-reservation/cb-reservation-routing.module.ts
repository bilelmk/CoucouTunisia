import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbReservationPage } from './cb-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: CbReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbReservationPageRoutingModule {}
