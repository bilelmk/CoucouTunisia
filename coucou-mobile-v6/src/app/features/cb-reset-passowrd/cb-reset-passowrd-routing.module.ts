import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbResetPassowrdPage } from './cb-reset-passowrd.page';

const routes: Routes = [
  {
    path: '',
    component: CbResetPassowrdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbResetPassowrdPageRoutingModule {}
