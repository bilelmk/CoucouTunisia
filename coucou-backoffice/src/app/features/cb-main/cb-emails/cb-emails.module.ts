import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CbEmailsComponent } from './cb-emails.component';
import { MatCardModule } from '@angular/material/card';
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: CbEmailsComponent
  },
];

@NgModule({
  declarations: [
    CbEmailsComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatCardModule,
        CKEditorModule,
        FormsModule,
    ]
})
export class CbEmailsModule { }
