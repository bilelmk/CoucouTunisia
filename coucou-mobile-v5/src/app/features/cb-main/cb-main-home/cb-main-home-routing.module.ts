import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CbMainHomePage } from './cb-main-home.page';

const routes: Routes = [
  {
    path: '',
    component: CbMainHomePage,
  },
  {
    path: 'restaurant/:id',
    loadChildren: () => import('./cb-main-home-restaurant-details/cb-main-home-restaurant-details.module').then(m => m.CbMainHomeRestaurantDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbMainHomePageRoutingModule {}
