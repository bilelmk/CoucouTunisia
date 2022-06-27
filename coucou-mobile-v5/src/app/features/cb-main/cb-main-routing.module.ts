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
        redirectTo: 'home',
      },
      {
        path: 'profile',
        loadChildren: () => import('./cb-main-profile/cb-main-profile.module').then(m => m.CbMainProfilePageModule)
      },
      {
        path: 'reservations',
        loadChildren: () => import('./cb-main-reservations/cb-main-reservations.module').then(m => m.CbMainReservationsPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./cb-main-home/cb-main-home.module').then(m => m.CbMainHomePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbMainPageRoutingModule {}
