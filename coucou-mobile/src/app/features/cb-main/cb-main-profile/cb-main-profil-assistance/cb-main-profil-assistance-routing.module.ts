import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbMainProfilAssistancePage } from './cb-main-profil-assistance.page';

const routes: Routes = [
  {
    path: '',
    component: CbMainProfilAssistancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbMainProfilAssistancePageRoutingModule {}
