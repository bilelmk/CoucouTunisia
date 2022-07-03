import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbVerifyPasswordCodePage } from './cb-verify-password-code.page';

const routes: Routes = [
  {
    path: '',
    component: CbVerifyPasswordCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbVerifyPasswordCodePageRoutingModule {}
