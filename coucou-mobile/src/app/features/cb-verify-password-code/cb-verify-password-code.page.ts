import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/services/http/authentication.service';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { ToastService } from '../../core/services/in-app/toast.service';

@Component({
  selector: 'app-cb-verify-password-code',
  templateUrl: './cb-verify-password-code.page.html',
  styleUrls: ['./cb-verify-password-code.page.scss'],
})
export class CbVerifyPasswordCodePage implements OnInit {

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
    this.authenticationService.verifyPassowrdCode(this.form.value).subscribe(
        res => {
          this.router.navigate(['/cb-reset-password/' , res.clientId]);
          this.toastService.show('Code vérifié avec succès' ,'success') ;
          this.spinnerService.deactivate() ;
        }, error => {
          console.log(error);
          this.spinnerService.deactivate() ;
          if (error.error.message === 'code not found') {
            this.toastService.show('Le code est incorrect' ,'danger');
          } else if (error.error.message === 'code is expired') {
            this.toastService.show('Le code est expiré' ,'danger');
          } else {
            this.toastService.show('Erreur du serveur' ,'danger');
          }
        });
  }
}
