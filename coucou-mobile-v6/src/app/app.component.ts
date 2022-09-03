import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import OneSignal from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar,
    // private storage: Storage,
    // private networkErrorService: NetworkErrorService,
    // private network: Network
  ) {
    this.platform.ready().then(() => {

      // this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      //   this.networkErrorService.present();
      // });
      // this.connectSubscription = this.network.onConnect().subscribe(() => {
      //   this.networkErrorService.dismiss();
      // });
      //
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
      // this.themeService.initTheme();

      this.initOneSignal();
    });
  }

  private initOneSignal(){

    OneSignal.setAppId('d5602066-f5ad-4e3f-9c4c-528a67e02bab');

    OneSignal.setNotificationOpenedHandler((jsonData) => {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });

    OneSignal.promptForPushNotificationsWithUserResponse((accepted) => {
      console.log('User accepted notifications: ' + accepted);
    });

  }
}
