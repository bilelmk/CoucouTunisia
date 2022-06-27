import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/services/http/authentication.service';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { ToastService } from '../../core/services/in-app/toast.service';
import { RegisterRequest } from '../../core/dtos/register-request';

@Component({
  selector: 'app-cb-register',
  templateUrl: './cb-register.page.html',
  styleUrls: ['./cb-register.page.scss'],
})
export class CbRegisterPage implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private authenticationService: AuthenticationService ,
              private spinnerService: SpinnerService ,
              private toastService: ToastService
  ) {
    this.form = this.formBuilder.group({
      firstName   : ['', [Validators.required]],
      lastName: ['', Validators.required],
      email   : ['', [Validators.required , Validators.email]],
      password: ['', Validators.required],
      phone   : ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onRegister() {
    this.spinnerService.activate() ;
    const request: RegisterRequest = { ...this.form.value };
    this.authenticationService.signup(request).subscribe(
        res => {
          this.router.navigate(['/cb-verify-phone-code']);
          this.toastService.show('Votre compte à été créé avec succès' ,'success') ;
          this.spinnerService.deactivate() ;
        }, error => {
          this.spinnerService.deactivate() ;
          if (error.error.message === 'existing user') {
            this.toastService.show('Ce numéro de téléphone existe déjà' ,'danger');
          // } else if (error.error.message === 'wrong password') {
          //   this.toastService.show('Mot de passe incorrect' ,'danger');
          // } else if (error.error.message === 'phone not verified') {
          //   this.toastService.show('Numéro de téléphone n\'est pas verifié' ,'danger');
          } else {
            this.toastService.show('Erreur du serveur' ,'danger');
          }
        });
  }
}
