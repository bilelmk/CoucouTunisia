import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthenticationService } from '../../core/services/http/authentication.service';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { ToastService } from '../../core/services/in-app/toast.service';

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
              private toastService: ToastService,
              private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      code   : ['', [Validators.required]],
    });
  }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id')) ;
  }

  onVerifyCode() {
    this.spinnerService.activate() ;
    this.authenticationService.verifyPhoneCode(this.form.value).subscribe(
        res => {
          this.router.navigate(['/cb-login']);
          this.toastService.show('Code vérifié avec succès' ,'success') ;
          this.spinnerService.deactivate() ;
        }, error => {
          console.log(error);
          this.spinnerService.deactivate() ;
          if (error.error.message === 'code not found') {
            this.toastService.show('Le code est incorrect' ,'danger');
          } else if (error.error.message === 'code is expired') {
            this.toastService.show('Le code est expiré' ,'danger');
          } else if (error.error.message === 'not found') {
            this.toastService.show('Numéro de téléphone n\'existe pas' ,'danger');
          } else {
            this.toastService.show('Erreur du serveur' ,'danger');
          }
        });
  }

  sendCode() {
    this.spinnerService.activate() ;
    this.authenticationService.sendPhoneCode({id: this.route.snapshot.paramMap.get('id')}).subscribe(
        res => {
          this.toastService.show('Code envoyé avec succès' ,'success') ;
          this.spinnerService.deactivate() ;
        }, error => {
          console.log(error);
          this.spinnerService.deactivate() ;
          if (error.error.message === 'client not found') {
            this.toastService.show('Votre compte est introuvable' ,'danger');
          } else if (error.error.message === 'phone confirmation code has been sent') {
            this.toastService.show('Message n\'est pas envoyé' ,'danger');
          } else {
            this.toastService.show('Erreur du serveur' ,'danger');
          }
        });
  }
}
