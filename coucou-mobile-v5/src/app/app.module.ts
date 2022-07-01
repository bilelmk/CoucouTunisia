import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import { IonicSelectableModule } from 'ionic-selectable';
import { Camera } from '@ionic-native/camera/ngx';
import { CommonModule } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx' ;
import { NgxTrimModule } from 'ngx-trim';
import { SpinnerComponent } from './core/components/spinner/spinner.component';
import { AuthenticationInterceptor } from './core/interceptors/authentication-interceptor';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {NetworkErrorComponent} from "./core/components/network-error/network-error.component";

// import { AuthInterceptor } from './core/interceptors/auth-interceptor';

// fuction needed for traduction
export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http ,  'assets/i18n/' , '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        SpinnerComponent,
        NetworkErrorComponent
        // NoConnectionPage,
    ],
    entryComponents: [],
    imports: [
        NgCircleProgressModule.forRoot() ,
        IonicStorageModule.forRoot(),
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        NgxSpinnerModule,
        HttpClientModule,
        IonicSelectableModule,
        NgxTrimModule,
    ],
    providers: [
        Camera,
        HTTP,
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        GooglePlus,
        Facebook,
        DatePicker,
        { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
        Network ,
        Crop ,
        File ,
        LaunchNavigator,
        CallNumber,
        EmailComposer,
        OneSignal,
        BarcodeScanner,
        // { provide: LOCALE_ID, useValue: "it_IT" }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
