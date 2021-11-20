import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbSpinnerComponent } from './components/cb-loading/cb-spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    CbSpinnerComponent,
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  exports: [
    CbSpinnerComponent
  ]
})
export class CoreModule { }
