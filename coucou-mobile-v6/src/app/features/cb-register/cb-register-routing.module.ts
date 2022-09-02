import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CbRegisterPage } from './cb-register.page';

const routes: Routes = [
  {
    path: '',
    component: CbRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbRegisterPageRoutingModule {}
