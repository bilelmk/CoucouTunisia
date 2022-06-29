import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from "./core/guards/authentication.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./features/cb-login/cb-login.module').then(m => m.CbLoginModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./features/cb-main/cb-main.module').then(m => m.CbMainModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
