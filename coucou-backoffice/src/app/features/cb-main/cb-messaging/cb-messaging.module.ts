import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbMessagingComponent } from './cb-messaging.component';
import { RouterModule, Routes } from '@angular/router';
import { CbMessagingClientsComponent } from './cb-messaging-clients/cb-messaging-clients.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { NgCircleProgressModule } from 'ng-circle-progress';

const routes: Routes = [
  {
    path: '',
    component: CbMessagingComponent

  },
];

@NgModule({
  declarations: [
    CbMessagingComponent,
    CbMessagingClientsComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        NgCircleProgressModule,
    ],
  entryComponents: [
    CbMessagingClientsComponent
  ]
})
export class CbMessagingModule { }
