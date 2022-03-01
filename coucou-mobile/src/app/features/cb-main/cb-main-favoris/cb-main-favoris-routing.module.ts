import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbMainFavorisPage } from './cb-main-favoris.page';

const routes: Routes = [
  {
    path: '',
    component: CbMainFavorisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbMainFavorisPageRoutingModule {}
