// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Network } from '@ionic-native/network/ngx';
// import { ModalController, Platform } from '@ionic/angular';
// import { OfflineComponent } from '../../components/offline/offline.component';
//
// export enum ConnectionStatus {
//   Online,
//   Offline
// }
//
// @Injectable({
//   providedIn: 'root'
// })
// export class NetworkService {
//
//   private status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(ConnectionStatus.Offline);
//
//   constructor(private network: Network,
//               private plt: Platform ,
//               private modalController : ModalController
//   ) {
//
//     this.plt.ready().then(() => {
//       this.initializeNetworkEvents();
//       let status =  this.network.type !== 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;
//       this.status.next(status);
//     });
//   }
//
//   public initializeNetworkEvents() {
//     this.network.onDisconnect().subscribe(() => {
//       if (this.status.getValue() === ConnectionStatus.Online) {
//         this.updateNetworkStatus(ConnectionStatus.Offline);
//         this.presentConnexionModal()
//       }
//     });
//
//     this.network.onConnect().subscribe(() => {
//       if (this.status.getValue() === ConnectionStatus.Offline) {
//         this.updateNetworkStatus(ConnectionStatus.Online);
//         this.dismissConnexionModal() ;
//       }
//     });
//   }
//
//   private async updateNetworkStatus(status: ConnectionStatus) {
//     this.status.next(status);
//     let connection = status == ConnectionStatus.Offline ? 'Offline' : 'Online';
//   }
//
//   async presentConnexionModal(){
//     const modal = await this.modalController.create({
//       component: OfflineComponent ,
//       backdropDismiss : false
//     });
//     return await modal.present();
//   }
//
//   dismissConnexionModal(){
//     this.modalController.dismiss();
//   }
// }
