import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  show(message: string , color: string ) {
    const toast = this.toastController.create({
      message ,
      duration: 2000 ,
      cssClass : color
    });
    toast.then(toastInstance => toastInstance.present());
  }

}
