import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CbEmailsComponent } from '../../../core/services/http/cb-emails.component';
import {CbEmailsClientsComponent} from './cb-emails-clients/cb-emails-clients.component';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: CbEmailsComponent
  },
];

@NgModule({
  declarations: [
    CbEmailsComponent,
    CbEmailsClientsComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatCardModule,
    ],
  entryComponents: [
    CbEmailsClientsComponent
  ]
})
export class CbEmailsModule { }
