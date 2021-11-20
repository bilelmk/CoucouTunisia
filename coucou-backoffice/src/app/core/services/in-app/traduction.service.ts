import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraductionService {

  // constructor(private translate: TranslateService, private alertController: AlertController, private plt: Platform) {
  //   this.plt.ready().then(() => {
  //     Storage.get({key: 'language'}).then(
  //       language => {
  //         if (language.value) {
  //           this.translate.setDefaultLang(language.value)
  //         } else {
  //           Storage.set({key: 'language', value: 'it'})
  //           this.translate.setDefaultLang('it')
  //         }
  //       }
  //     ).catch(err => {
  //       console.log(err)
  //     })
  //   })
  // }
  //
  // changeLanguage(language: string) {
  //   Storage.set({key: 'language', value: language})
  //   this.translate.use(language)
  // }
  //
  // getLanguage(): Promise<any> {
  //   return Storage.get({key: 'language'})
  // }
}
