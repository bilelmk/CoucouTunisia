import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme = "normal"
  //
  // constructor() {}
  //
  // initTheme(){
  //   Storage.get({key :'theme'}).then(
  //     theme => {
  //       if (theme.value){
  //         this.theme = theme.value
  //         if(this.theme == "dark") {
  //           document.body.classList.add('dark');
  //         }
  //         else{
  //           document.body.classList.remove('dark');
  //         }
  //       }
  //       else {
  //         Storage.set({ key : 'theme', value : 'normal' })
  //         document.body.classList.remove('dark');
  //         this.theme = theme.value
  //       }
  //     }
  //   ).catch(err => {
  //     console.log(err)
  //   })
  // }
  //
  //
  // toggleAppTheme() {
  //   if(this.theme == "normal") {
  //     Storage.set({ key : 'theme', value : 'dark' })
  //     document.body.classList.add('dark');
  //     this.theme = 'dark'
  //   }
  //   else {
  //     Storage.set({ key : 'theme', value : 'normal' })
  //     document.body.classList.remove('dark');
  //     this.theme = 'normal'
  //   }
  // }
}
