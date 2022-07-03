import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';
import { Network } from '@ionic-native/network/ngx';
import { TraductionService } from './core/services/in-app/traduction.service';
import { NetworkErrorService } from './core/services/in-app/network-error.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  disconnectSubscription: Subscription;
  connectSubscription: Subscription;

  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private traductionService: TraductionService, // required for translation init
      // private oneSignal : OneSignal ,
      private networkErrorService: NetworkErrorService,
      private network: Network ,
  ) {
    this.platform.ready().then(() => {
      this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        this.networkErrorService.present();
      });
      this.connectSubscription = this.network.onConnect().subscribe(() => {
        this.networkErrorService.dismiss();
      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // setupPush(){
  //   this.oneSignal.startInit('4b37f1c2-3dfe-4df3-a3fc-edd7b81a175c', '522769664239');
  //   this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
  //   this.oneSignal.handleNotificationOpened().subscribe( data => {
  //     const additionalData = data.notification.payload.additionalData;
  //     // this.showAlert('Notification opened', 'You already read this before', additionalData.task);
  //   });
  //   this.oneSignal.handleNotificationReceived().subscribe(data => {
  //     const msg = data.payload.body;
  //     const title = data.payload.title;
  //     const additionalData = data.payload.additionalData;
  //   });
  //   this.oneSignal.endInit();
  //
  //   this.oneSignal.getIds().then(identity => {
  //     this.storage.set('notification-key', {
  //       "key": identity.userId ,
  //     });
  //   });
  // }

}


