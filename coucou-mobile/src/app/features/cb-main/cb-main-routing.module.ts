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
        path: 'cb-main-new-reservation',
        loadChildren: () => import('../cb-main/cb-main-new-reservation/cb-main-new-reservation.module').then(m => m.CbMainNewReservationPageModule)
      },
      {
        path: 'cb-main-favoris',
        loadChildren: () => import('../cb-main/cb-main-favoris/cb-main-favoris.module').then(m => m.CbMainFavorisPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbMainPageRoutingModule {}
