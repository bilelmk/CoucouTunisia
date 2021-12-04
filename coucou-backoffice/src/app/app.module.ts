import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './core/interceptors/auth-interceptor';
import { HTTP_INTERCEPTORS , HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CbPermissionsModalComponent } from './features/cb-main/cb-permissions/cb-permissions-modal/cb-permissions-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CbRolesModalComponent } from './features/cb-main/cb-roles/cb-roles-modal/cb-roles-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CbPermissionsModalComponent,
    CbRolesModalComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      CoreModule,
      HttpClientModule,
      MatSnackBarModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
