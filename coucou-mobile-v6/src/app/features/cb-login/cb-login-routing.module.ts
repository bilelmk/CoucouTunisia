import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CbLoginPage } from './cb-login.page';

const routes: Routes = [
  {
    path: '',
    component: CbLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbLoginPageRoutingModule {}
