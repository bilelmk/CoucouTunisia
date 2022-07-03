import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, Platform } from '@ionic/angular';

// capacitor storage import
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class TraductionService {

  constructor(private translate: TranslateService , private alertController: AlertController , private plt: Platform ) {
      this.plt.ready().then(() => {
          Storage.get( {key : 'language'} ).then(
              language => {
                  console.log(language)
                  if (language.value){
                      this.translate.setDefaultLang(language.value);
                  }
                  else {
                      Storage.set({ key : 'language', value : 'fr' });
                      this.translate.setDefaultLang('fr');
                  }
              }
          ).catch(err => {
              console.log(err);
          });
      });
  }

  changeLanguage( language: string){
    Storage.set({ key : 'language', value : language });
    this.translate.use(language);
  }

  getLanguage(): Promise<any> {
      return Storage.get({key: 'language'});
  }
}
