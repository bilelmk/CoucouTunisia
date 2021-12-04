import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbRolesComponent } from './cb-roles.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CbRolesPermissionsComponent } from './cb-roles-permissions/cb-roles-permissions.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: CbRolesComponent
  },
];

@NgModule({
  declarations: [
    CbRolesComponent,
    CbRolesPermissionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    SharedModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule
  ],
  entryComponents: [
    CbRolesPermissionsComponent
  ]
})
export class CbRolesModule { }
