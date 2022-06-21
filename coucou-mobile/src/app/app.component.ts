import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NetworkService } from './core/services/in-app/network.service';
import { ModeService } from './core/services/in-app/mode.service';

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
    private modeService: ModeService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.authService.autoAuthUser();
      // this.languageService.setInitialAppLanguage() ;
      this.modeService.setInitialMode() ;
      // this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
      //   if (status == ConnectionStatus.Online) {
      //     this.offlineService.checkForEvents().subscribe();
      //   }
      // });
    });
  }
}
