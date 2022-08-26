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
    // eslint-disable-next-line max-len
    loadChildren: () => import('./features/cb-verify-password-code/cb-verify-password-code.module').then(m => m.CbVerifyPasswordCodePageModule)
  },
  {
    path: 'cb-verify-phone-code/:id',
    loadChildren: () => import('./features/cb-verify-phone-code/cb-verify-phone-code.module').then(m => m.CbVerifyPhoneCodePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./features/cb-main/cb-main.module').then(m => m.CbMainPageModule),
    // canActivate: [AuthenticationGuard],
  },
  {
    path: 'cb-send-password-code',
    loadChildren: () => import('./features/cb-send-password-code/cb-send-password-code.module').then(m => m.CbSendPasswordCodePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
