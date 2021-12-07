import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbCopyrightComponent } from './components/cb-copyright/cb-copyright.component';
import { CbSidebarComponent } from './components/cb-sidebar/cb-sidebar.component';
import { CbNavbarComponent } from './components/cb-navbar/cb-navbar.component';
import { RouterModule } from '@angular/router';
import { CbErrorsComponent } from './components/cb-errors/cb-errors.component';
import { CbSecondSidebarComponent } from './components/cb-second-sidebar/cb-second-sidebar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    CbCopyrightComponent,
    CbSidebarComponent,
    CbNavbarComponent,
    CbErrorsComponent,
    CbSecondSidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    CbCopyrightComponent,
    CbSidebarComponent,
    CbNavbarComponent,
    CbErrorsComponent,
    CbSecondSidebarComponent
  ],
})
export class SharedModule { }
