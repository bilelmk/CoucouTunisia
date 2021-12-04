import { Component } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor( private oneSignal: OneSignal ,
               private platform: Platform) {
    this.platform.ready().then(() => {
      this.setupPush() ;
    });
  }

  setupPush(){
    this.oneSignal.startInit('4b37f1c2-3dfe-4df3-a3fc-edd7b81a175c', '522769664239');
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
      // this.storage.set('notification-key', {
      //   "key": identity.userId ,
      // });
    });
  }
}
