import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../core/services/http/authentication.service';
import {SpinnerService} from '../../core/services/in-app/spinner.service';
import {ToastService} from '../../core/services/in-app/toast.service';
import {RegisterRequest} from '../../core/dtos/register-request';

@Component({
  selector: 'app-cb-verify-phone-code',
  templateUrl: './cb-verify-phone-code.page.html',
  styleUrls: ['./cb-verify-phone-code.page.scss'],
})
export class CbVerifyPhoneCodePage implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private authenticationService: AuthenticationService ,
              private spinnerService: SpinnerService ,
              private toastService: ToastService
  ) {
    this.form = this.formBuilder.group({
      code   : ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  onVerifyCode() {
    this.spinnerService.activate() ;
    this.authenticationService.verifyPhoneCode(this.form.value).subscribe(
        res => {
          this.router.navigate(['/cb-login']);
          this.spinnerService.deactivate() ;
        }, error => {
          console.log(error);
          this.spinnerService.deactivate() ;
          // if (error.error.message === 'wrong phone number') {
          //   this.toastService.show('Numéro de téléphone incorrect' ,'danger');
          // } else if (error.error.message === 'wrong password') {
          //   this.toastService.show('Mot de passe incorrect' ,'danger');
          // } else if (error.error.message === 'phone not verified') {
          //   this.toastService.show('Numéro de téléphone n\'est pas verifié' ,'danger');
          // } else {
          //   this.toastService.show('Erreur du serveur' ,'danger');
          // }
        });
  }
}
