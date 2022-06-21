import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbVerifyPhoneCodePage } from './cb-verify-phone-code.page';

const routes: Routes = [
  {
    path: '',
    component: CbVerifyPhoneCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbVerifyPhoneCodePageRoutingModule {}
