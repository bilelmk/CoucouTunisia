import { Component, Input } from '@angular/core';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { ToastService } from '../../../../core/services/in-app/toast.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ReservationService } from '../../../../core/services/http/reservation.service';

@Component({
  selector: 'app-cb-main-reservations-add',
  templateUrl: './cb-main-reservations-add.component.html',
  styleUrls: ['./cb-main-reservations-add.component.scss'],
})
export class CbMainReservationsAddComponent {

  @Input() date ;
  @Input() restaurant ;

  adultNumber: any;
  childrenNumber: any;
  babeNumber: any;
  time: any;
  note: any;
  carNumber: any;

  selectedRoomName: any = '';
  selectedRoomId: any;
  selectedRoom: any;

  constructor(private spinnerService: SpinnerService,
              private toastService: ToastService,
              private modalController: ModalController,
              private reservationService: ReservationService,
              private alertController: AlertController) {}

  close() {
    this.modalController.dismiss();
  }

  checkFields() {
    return this.date && this.restaurant.id && this.adultNumber != null && this.childrenNumber != null && this.babeNumber != null
            && this.time && this.selectedRoomName && this.carNumber != null;
  }

  onRoomSelect() {
    for (const room of this.restaurant.rooms) {
      // tslint:disable-next-line:triple-equals
      if (room.id == this.selectedRoomId) {
        this.selectedRoomName = room.name ;
        this.selectedRoom = room ;
      }
    }
  }

  async showAlert() {
    let message = '' ;
    if (!(this.adultNumber != null && this.childrenNumber != null && this.babeNumber != null)) {
      message = 'Il faut choisir le nombre ........ avant de choisir l\'emplacement';
    }
    else {
      const roomsList = this.checkPerfectRoom();
      message = 'Votre emplacement ......... ' + roomsList;
    }
    setTimeout(() => {
      this.alertController.create({
        header: 'Alert',
        message,
        buttons: ['OK'],
      }).then(alert => alert.present() );
    } , 500) ;
  }

  private checkPerfectRoom() {
    let rooms = [...this.restaurant.rooms] ;
    const total = this.adultNumber + this.childrenNumber ;
    if (rooms.length === 1) {
      return rooms[0].name ;
    }
    else {
      rooms = rooms.filter(room =>  room.maxPlace >= total && room.minPlace <= total) ;
      return rooms.reduce((prev, current) => prev + ', ' + current.name , '');
    }
  }

  recap() {
    const total = this.adultNumber + this.childrenNumber ;
    let price = 0 ;
    if (total >= this.selectedRoom.minPlace) {
      price = this.adultNumber * this.selectedRoom.packPrice + this.childrenNumber * this.selectedRoom.packChildrenPrice;
    }
    else {
      price = this.selectedRoom.minPlace * this.selectedRoom.packPrice;
    }
    const reservation = {
      date: this.date ,
      restaurantId: this.restaurant.id ,
      adultNumber: this.adultNumber ,
      childrenNumber: this.childrenNumber ,
      carNumber: this.carNumber ,
      babeNumber: this.babeNumber ,
      time: this.time ,
      room: this.selectedRoomName ,
      note: this.note ,
      price,
      finalPrice: price
    };
    this.alertController.create({
        header: 'Récapitulation',
        message: '<p><b>Nombre d\'adultes</b> ' + this.adultNumber + '</p>' +
                 '<p><b>Nombre d\'enfants</b> ' + this.childrenNumber + '</p>' +
                 '<p><b>Nombre de bébé</b> ' + this.babeNumber + '</p>' +
                 '<p><b>Nombre de voitures</b> ' + this.carNumber + '</p>' +
                 '<p><b>Mise en place</b> ' + this.selectedRoomName + '</p>' +
                 '<p><b>Prix finale ( Aproximative )</b> ' + price + '</p>',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Confirmer',
          handler: () => this.add(reservation)
        }
      ]}).then(alert => alert.present() );

  }

  add(reservation){
    this.spinnerService.activate();
    this.reservationService.add(reservation).subscribe(
        res => {
          this.spinnerService.deactivate();
          this.modalController.dismiss();
        },
        error => {
          this.spinnerService.deactivate();
          console.log(error);
        }
    );
  }

}
