import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbMainComponent } from './cb-main.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CbMainComponent,
    children: [
      {
        path: '',
        redirectTo : 'clients' ,
        pathMatch: 'full',
      },
      {
        path: 'clients',
        loadChildren: () => import('./cb-clients/cb-clients.module').then(m => m.CbClientsModule)
      },
      {
        path: 'admins',
        loadChildren: () => import('./cb-admins/cb-admins.module').then(m => m.CbAdminsModule)
      },
      {
        path: 'messaging',
        loadChildren: () => import('./cb-messaging/cb-messaging.module').then(m => m.CbMessagingModule)
      },
      {
        path: 'restaurants',
        loadChildren: () => import('./cb-restaurants/cb-restaurants.module').then(m => m.CbRestaurantsModule)
      },
      {
        path: 'reservations',
        loadChildren: () => import('./cb-reservations/cb-reservations.module').then(m => m.CbReservationsModule)
      },
      {
        path: 'emails',
        loadChildren: () => import('./cb-emails/cb-emails.module').then(m => m.CbEmailsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./cb-notifications/cb-notifications.module').then(m => m.CbNotificationsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./cb-statistiques/cb-statistiques.module').then(m => m.CbStatistiquesModule)
      },
      {
        path: 'parking',
        loadChildren: () => import('./cb-parking/cb-parking.module').then(m => m.CbParkingModule)
      },
      {
        path: 'permissions',
        loadChildren: () => import('./cb-permissions/cb-permissions.module').then(m => m.CbPermissionsModule)
      },
      {
        path: 'roles',
        loadChildren: () => import('./cb-roles/cb-roles.module').then(m => m.CbRolesModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    CbMainComponent
  ],
  imports: [
    CommonModule ,
    SharedModule ,
    RouterModule.forChild(routes),
  ]
})
export class CbMainModule { }




