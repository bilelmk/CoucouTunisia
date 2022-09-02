import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NetworkErrorComponent } from './components/network-error/network-error.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './interceptors/authentication-interceptor';

@NgModule({
  declarations: [
    SpinnerComponent,
    NetworkErrorComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
  ],
  exports: [
    SpinnerComponent,
    NetworkErrorComponent
  ]
})
export class CoreModule { }
