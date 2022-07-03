import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP } from '@ionic-native/http/ngx';
import { CommonModule } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'
import { SharedModule } from './shared/shared.module';
import {CoreModule} from "./core/core.module";


@NgModule({
    declarations: [
        AppComponent,
    ],
    entryComponents: [],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        NgxSpinnerModule,
        HttpClientModule,
        SharedModule,
        CoreModule
    ],
    providers: [
        HTTP,
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        Network ,
        OneSignal,
        BarcodeScanner,
],
    bootstrap: [AppComponent]
})
export class AppModule {}
