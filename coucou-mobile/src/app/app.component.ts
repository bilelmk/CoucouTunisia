import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NetworkService } from './core/services/in-app/network.service';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private networkService: NetworkService ,
    private oneSignal: OneSignal ,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.authService.autoAuthUser();
      // this.languageService.setInitialAppLanguage() ;
      this.setupPush();
      // this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
      //   if (status == ConnectionStatus.Online) {
      //     this.offlineService.checkForEvents().subscribe();
      //   }
      // });
    });
  }

  setupPush() {
    this.oneSignal.startInit('09543faf-22a3-4d3e-be70-4765d661c05e', '120141870416');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationOpened().subscribe( data => {
      const additionalData = data.notification.payload.additionalData;
      // this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      const msg = data.payload.body;
      const title = data.payload.title;
      const additionalData = data.payload.additionalData;
    });
    this.oneSignal.endInit();

    this.oneSignal.getIds().then(identity => {
      alert(identity);
      // this.storage.set('notification-key', {
      //   "key": identity.userId ,
      // });
    });
  }
}
