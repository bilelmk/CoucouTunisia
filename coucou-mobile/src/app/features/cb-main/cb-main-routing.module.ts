import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CbMainPage } from './cb-main.page';

const routes: Routes = [
  {
    path: '',
    component: CbMainPage,
    children: [
      {
        path: '',
        redirectTo: 'cb-main-home',
      },
      {
        path: 'cb-main-profile',
        loadChildren: () => import('../cb-main/cb-main-profile/cb-main-profile.module').then(m => m.CbMainProfilePageModule)
      },
      {
        path: 'cb-main-reservations',
        loadChildren: () => import('../cb-main/cb-main-reservations/cb-main-reservations.module').then(m => m.CbMainReservationsPageModule)
      },
      {
        path: 'cb-main-home',
        loadChildren: () => import('../cb-main/cb-main-home/cb-main-home.module').then(m => m.CbMainHomePageModule)
      },
      {
        path: 'cb-main-favoris',
        loadChildren: () => import('../cb-main/cb-main-favoris/cb-main-favoris.module').then(m => m.CbMainFavorisPageModule)
      },
      {
        path: 'cb-main-restaurant/:id',
        loadChildren: () => import('../cb-main/cb-main-restaurant/cb-main-restaurant.module').then(m => m.CbMainRestaurantPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbMainPageRoutingModule {}
