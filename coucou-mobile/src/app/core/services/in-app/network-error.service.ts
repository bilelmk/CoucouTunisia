import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NetworkErrorComponent } from '../../components/network-error/network-error.component';

@Injectable({
  providedIn: 'root',
})
export class NetworkErrorService {

  modal: any;
  constructor(private modalController: ModalController) {}

  async present() {
    if (!this.modal) {
      this.modal = await this.modalController.create({
        component: NetworkErrorComponent,
        animated: true,
        backdropDismiss: false,
      });
      return await this.modal.present();
    }
  }

  dismiss() {
    if (this.modal) {
      this.modalController.dismiss();
      this.modal = null;
      // location.reload();
    }
  }
}
