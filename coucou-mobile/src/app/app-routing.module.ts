import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cb-login',
    pathMatch: 'full'
  },
  {
    path: 'cb-login',
    loadChildren: () => import('./features/cb-login/cb-login.module').then(m => m.CbLoginPageModule)
  },
  {
    path: 'cb-register',
    loadChildren: () => import('./features/cb-register/cb-register.module').then(m => m.CbRegisterPageModule)
  },
  {
    path: 'cb-reset-password/:id',
    loadChildren: () => import('./features/cb-reset-passowrd/cb-reset-passowrd.module').then(m => m.CbResetPassowrdPageModule)
  },
  {
    path: 'cb-verify-password-code',
    loadChildren: () => import('./features/cb-verify-password-code/cb-verify-password-code.module').then(m => m.CbVerifyPasswordCodePageModule)
  },
  {
    path: 'cb-verify-phone-code',
    loadChildren: () => import('./features/cb-verify-phone-code/cb-verify-phone-code.module').then(m => m.CbVerifyPhoneCodePageModule)
  },
  {
    path: 'cb-main',
    loadChildren: () => import('./features/cb-main/cb-main.module').then(m => m.CbMainPageModule)
  },
  {
    path: 'cb-main-restaurant',
    loadChildren: () => import('./features/cb-main/cb-main-home/cb-main-restaurant/cb-main-restaurant.module').then(m => m.CbMainRestaurantPageModule)
  },
  {
    path: 'cb-send-password-code',
    loadChildren: () => import('./features/cb-send-password-code/cb-send-password-code.module').then(m => m.CbSendPasswordCodePageModule)
  },

  // {
  //   path: 'cb-main-profil-edit',
  //   loadChildren: () => import('./features/cb-main/cb-main-profile/cb-main-profil-edit/cb-main-profil-edit.module').then(m => m.CbMainProfilEditPageModule)
  // },
  // {
  //   path: 'cb-main-profil-assistance',
  //   loadChildren: () => import('./features/cb-main/cb-main-profile/cb-main-profil-assistance/cb-main-profil-assistance.module').then(m => m.CbMainProfilAssistancePageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
