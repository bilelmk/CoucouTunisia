import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbClientsComponent } from './cb-clients.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { CbClientsModalComponent } from './cb-clients-modal/cb-clients-modal.component';

const routes: Routes = [
  {
    path: '',
    component: CbClientsComponent
  },
];

@NgModule({
  declarations: [
    CbClientsComponent,
    CbClientsModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
  ],
  entryComponents: [
    CbClientsModalComponent,
  ]
})
export class CbClientsModule { }
