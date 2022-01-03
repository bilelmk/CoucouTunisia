import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbMainPage } from './cb-main.page';

const routes: Routes = [
  {
    path: '',
    component: CbMainPage,
    children:[
      {
        path: ' ',
        redirectTo: 'qr',
        pathMatch: 'full'
      },
      {
        path: 'reservation',
        loadChildren: () => import('../cb-reservation/cb-reservation.module').then(m => m.CbReservationPageModule)
      },
      {
        path: 'qr',
        loadChildren: () => import('../cb-qr/cb-qr.module').then(m => m.CbQrPageModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbMainPageRoutingModule {}
