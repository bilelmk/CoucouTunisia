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
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { CbUsersSelectComponent } from "./components/cb-users-select/cb-users-select.component";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CbCopyrightComponent,
    CbSidebarComponent,
    CbNavbarComponent,
    CbErrorsComponent,
    CbSecondSidebarComponent,
    CbUsersSelectComponent
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
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatCheckboxModule,
        FormsModule
    ],
  exports: [
    CbCopyrightComponent,
    CbSidebarComponent,
    CbNavbarComponent,
    CbErrorsComponent,
    CbSecondSidebarComponent,
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
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CbUsersSelectComponent
  ],
})
export class SharedModule { }
