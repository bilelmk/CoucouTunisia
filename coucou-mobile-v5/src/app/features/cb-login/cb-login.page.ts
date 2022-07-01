import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { ToastService } from '../../core/services/in-app/toast.service';
import { LoginRequest } from '../../core/dtos/login-request';
import { AuthenticationService } from '../../core/services/http/authentication.service';

@Component({
  selector: 'app-cb-login',
  templateUrl: './cb-login.page.html',
  styleUrls: ['./cb-login.page.scss'],
})
export class CbLoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private authenticationService: AuthenticationService ,
              private spinnerService: SpinnerService ,
              private toastService: ToastService
  ) {
    this.loginForm = this.formBuilder.group({
      email   : ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onLogin() {
    this.spinnerService.activate() ;
    const request: LoginRequest = {
      phone: this.loginForm.value.email ,
      password: this.loginForm.value.password
    };
    this.authenticationService.signin(request).subscribe(
        res => {
            const expirationDate = new Date((new Date()).getTime() + res.expiresIn * 1000) ;
            sessionStorage.setItem('token' , res.token);
            sessionStorage.setItem('expiresIn' , expirationDate.toISOString());

            this.authenticationService.setAuthTimer(res.expiresIn) ;
            this.toastService.show('Vous êtes connecté avec succès' ,'success') ;
            this.spinnerService.deactivate() ;
            this.router.navigate(['/main']);
        }, error => {
          this.spinnerService.deactivate() ;
          if (error.error.message === 'wrong phone number') {
            this.toastService.show('Numéro de téléphone incorrect' ,'danger');
          } else if (error.error.message === 'wrong password') {
            this.toastService.show('Mot de passe incorrect' ,'danger');
          } else if (error.error.message === 'phone not verified') {
            this.toastService.show('Numéro de téléphone n\'est pas verifié' ,'danger');
          } else if (error.error.message === 'account bloqued') {
            this.toastService.show('Votre compte a été bloqué' ,'danger');
          } else {
            this.toastService.show('Erreur du serveur' ,'danger');
          }
        });
  }
}
