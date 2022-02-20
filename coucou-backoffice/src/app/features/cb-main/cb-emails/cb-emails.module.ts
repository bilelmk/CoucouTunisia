import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CbEmailsComponent } from './cb-emails.component';
import { CbEmailsClientsComponent } from './cb-emails-clients/cb-emails-clients.component';
import { MatCardModule } from '@angular/material/card';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {FormsModule} from "@angular/forms";

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
        CKEditorModule,
        FormsModule,
    ],
  entryComponents: [
    CbEmailsClientsComponent
  ]
})
export class CbEmailsModule { }
