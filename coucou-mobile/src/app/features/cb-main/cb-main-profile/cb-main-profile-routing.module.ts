import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbMainProfilePage } from './cb-main-profile.page';

const routes: Routes = [
  {
    path: '',
    component: CbMainProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbMainProfilePageRoutingModule {}
