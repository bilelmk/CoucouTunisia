import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbMainProfilEditPage } from './cb-main-profil-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CbMainProfilEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbMainProfilEditPageRoutingModule {}
