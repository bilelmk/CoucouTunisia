import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../../coucou-mobile-v6/src/app/core/services/http/authentication.service';
import { SpinnerService } from '../../../../../coucou-mobile-v6/src/app/core/services/in-app/spinner.service';
import { ToastService } from '../../../../../coucou-mobile-v6/src/app/core/services/in-app/toast.service';

@Component({
  selector: 'app-cb-send-password-code',
  templateUrl: './cb-send-password-code.page.html',
  styleUrls: ['./cb-send-password-code.page.scss'],
})
export class CbSendPasswordCodePage implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private authenticationService: AuthenticationService ,
              private spinnerService: SpinnerService ,
              private toastService: ToastService
  ) {
    this.form = this.formBuilder.group({
      phone   : ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  send() {
    this.spinnerService.activate();
    this.authenticationService.sendPassowrdCode(this.form.value).subscribe(
        res => {
          this.router.navigate(['cb-verify-password-code']);
          this.toastService.show('Code envoyé avec succès' ,'success') ;
          this.spinnerService.deactivate();
        },
        error => {
          console.log(error);
          this.spinnerService.deactivate() ;
          if (error.error.message === 'client not found') {
            this.toastService.show('Votre numéro du téléphone incorrect' ,'danger');
          } else if (error.error.message === 'sms not sent') {
            this.toastService.show('SMS n\'est pas envoyé' ,'danger');
          } else {
            this.toastService.show('Erreur du serveur' ,'danger');
          }
        }
    );
  }
}
