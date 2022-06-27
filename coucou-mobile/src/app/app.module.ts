import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/Storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx' ;
import { TranslateModule , TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Network } from '@ionic-native/network/ngx';
import { SpinnerComponent } from './core/components/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { IonicSelectableModule } from 'ionic-selectable';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AuthenticationInterceptor } from './core/interceptors/authentication-interceptor';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http ,  'assets/i18n/' , '.json');
}

const config: SocketIoConfig = { url: 'http://localhost:3006', options: {} };

@NgModule({
  declarations: [
      AppComponent,
      SpinnerComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    NgxSpinnerModule,
    SocketIoModule.forRoot(config),
    IonicSelectableModule,
    LeafletModule
  ],
  providers: [
    OneSignal,
    Geolocation,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    Network,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule {}
