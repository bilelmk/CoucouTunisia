import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbMainReservationsPage } from './cb-main-reservations.page';

const routes: Routes = [
  {
    path: '',
    component: CbMainReservationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbMainReservationsPageRoutingModule {}
