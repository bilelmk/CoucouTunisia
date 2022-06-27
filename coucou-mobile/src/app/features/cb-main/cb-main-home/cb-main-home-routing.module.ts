import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CbMainHomePage } from './cb-main-home.page';

const routes: Routes = [
  {
    path: '',
    component: CbMainHomePage,
  },
  {
    path: 'restaurants/:id',
    loadChildren: () => import('../cb-main-restaurant/cb-main-restaurant.module').then(m => m.CbMainRestaurantPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbMainHomePageRoutingModule {}
