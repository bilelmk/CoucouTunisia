import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbCopyrightComponent } from './cb-copyright/cb-copyright.component';
import { CbSidebarComponent } from './cb-sidebar/cb-sidebar.component';
import { CbNavbarComponent } from './cb-navbar/cb-navbar.component';
import { RouterModule } from '@angular/router';

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
  ],
})
export class SharedModule { }
