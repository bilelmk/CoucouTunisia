import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbQrPage } from './cb-qr.page';

const routes: Routes = [
  {
    path: '',
    component: CbQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbQrPageRoutingModule {}
