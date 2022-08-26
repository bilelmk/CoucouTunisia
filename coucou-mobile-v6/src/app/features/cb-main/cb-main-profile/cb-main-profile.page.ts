import { Component } from '@angular/core';
import { SpinnerService } from '../../../../../../coucou-mobile-v6/src/app/core/services/in-app/spinner.service';
import { ToastService } from '../../../../../../coucou-mobile-v6/src/app/core/services/in-app/toast.service';
import { ActionSheetController, AlertController, ModalController, Platform} from '@ionic/angular';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Crop } from '@ionic-native/crop/ngx';
// import { Camera } from '@ionic-native/camera/ngx';
// import { File as NativeFile } from '@ionic-native/file/ngx';
import { ClientService } from '../../../../../../coucou-mobile-v6/src/app/core/services/http/client.service';
import { AuthenticationService } from '../../../../../../coucou-mobile-v6/src/app/core/services/http/authentication.service';
// import { CallNumber } from '@ionic-native/call-number/ngx';
import { Helpers } from '../../../../../../coucou-mobile-v6/src/app/core/helpers/helpers';

@Component({
  selector: 'app-cb-main-profile',
  templateUrl: './cb-main-profile.page.html',
  styleUrls: ['./cb-main-profile.page.scss'],
})
export class CbMainProfilePage {

  client;
  language;
  url = environment.url + 'images/' ;
  form: FormGroup;

  // image ;
  imageSrc;
  data: FormData;

  loading = false ;
  error = false ;

  constructor(private clientService: ClientService,
              private spinnerService: SpinnerService,
              private toastService: ToastService,
              private alertController: AlertController,
              private modalController: ModalController,
              private platform: Platform,
              // private file: NativeFile,
              private router: Router,
              // private crop: Crop,
              // private camera: Camera,
              private formBuilder: FormBuilder,
              private actionSheetController: ActionSheetController,
              private authenticationService: AuthenticationService,
              // private callNumber: CallNumber,
  ) {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required , Validators.email]],
      phone: ['', [Validators.required]],
    });
  }


  ionViewWillEnter() {
    this.loading = true ;
    this.spinnerService.activate();
    this.clientService.getCurrent().subscribe(
        res => {
          this.client = res;
          this.form.controls.firstName.setValue(this.client.firstName);
          this.form.controls.lastName.setValue(this.client.lastName);
          this.form.controls.email.setValue(this.client.email);
          this.form.controls.phone.setValue(this.client.phone);
          this.loading = false ;
          this.spinnerService.deactivate();
        },
        error => {
          this.loading = false ;
          this.error = true ;
          this.spinnerService.deactivate();
        }
    );
  }

  update() {
    this.spinnerService.activate();
    this.clientService.update(this.form.value).subscribe(
        res => {
          Helpers.updateFields(this.form.value , this.client) ;
          this.toastService.show('Modifications sauvegardées avec succès', 'success');
          this.spinnerService.deactivate();
        },
        error => {
          this.toastService.show('Erreur lors de la modification', 'danger');
          this.spinnerService.deactivate();
        }
    );
  }

  // async onPickImageChoice() {
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'Source de l\'image',
  //     buttons: [
  //       {
  //         text: 'Prendre une photo',
  //         icon: 'camera-outline',
  //         handler: () => {
  //           this.onPickImage(this.camera.PictureSourceType.CAMERA);
  //         }
  //       }, {
  //         text: 'Choisir une image de la galerie',
  //         icon: 'image-outline',
  //         handler: () => {
  //           this.onPickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
  //         }
  //       }
  //     ]
  //   });
  //   await actionSheet.present();
  // }
  //
  // // Change Profile Photo
  // onPickImage(source) {
  //   const cameraOptions = {
  //     sourceType: source,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     quality: 70,
  //     allowEdit: false,
  //     targetWidth: 600,
  //     targetHeight: 600,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     correctOrientation: true,
  //     mediaType: this.camera.MediaType.PICTURE,
  //   };
  //
  //   this.camera.getPicture(cameraOptions)
  //       .then((fileUri) => {
  //         this.crop.crop(fileUri, {quality: 5})
  //             .then(
  //                 newImage => {
  //                   const image = newImage.split('?')[0];
  //                   const splitPath = image.split('/');
  //                   const imageName = splitPath[splitPath.length - 1];
  //                   const filePath = image.split(imageName)[0];
  //                   this.file.readAsDataURL(filePath, imageName).then(
  //                       base64 => {
  //                         this.imageSrc = base64;
  //                         this.data = new FormData();
  //                         this.data.append('image', this.dataURItoBlob(base64));
  //                       }, error => {
  //                         this.onCancelImage();
  //                         console.log(error);
  //                       });
  //                 },
  //                 error => {
  //                   this.onCancelImage();
  //                   console.log(error);
  //                 }
  //             );
  //       }, (error) => {
  //         this.onCancelImage();
  //         console.log(error);
  //       });
  // }

  // onCancelImage() {
  //   this.imageSrc = null;
  // }
  //
  // dataURItoBlob(dataURI) {
  //   const byteString = atob(dataURI.split(',')[1]);
  //   const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  //   const ab = new ArrayBuffer(byteString.length);
  //   const ia = new Uint8Array(ab);
  //   for (let i = 0; i < byteString.length; i++) {
  //     ia[i] = byteString.charCodeAt(i);
  //   }
  //   return new Blob([ab], {type: mimeString});
  // }

  // onSaveImage() {
  //   this.spinnerService.activate();
  //   this.clientService.updateImage(this.data).subscribe(
  //       res => {
  //         this.toastService.show('Modifications sauvegardées avec succès', 'success');
  //         this.client.image = res.image;
  //         this.onCancelImage();
  //         this.spinnerService.deactivate();
  //       },
  //       err => {
  //         this.toastService.show('Erreur lors de la modification', 'danger');
  //         this.spinnerService.deactivate();
  //       }
  //   );
  // }
  //
  //   call() {
  //       this.callNumber.callNumber('50117077', true)
  //           .then(res => console.log('Launched dialer!', res))
  //           .catch(err => console.log('Error launching dialer', err));
  //
  //   }

  logout() {
    this.authenticationService.logout() ;
  }
}
