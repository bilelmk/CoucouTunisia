import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbSendPasswordCodePage } from './cb-send-password-code.page';

const routes: Routes = [
  {
    path: '',
    component: CbSendPasswordCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbSendPasswordCodePageRoutingModule {}
