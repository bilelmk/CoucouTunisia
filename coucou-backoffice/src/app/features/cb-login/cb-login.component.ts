import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { SessionStorageService } from '../../core/services/in-app/session-storage.service';
import { AuthenticationService } from '../../core/services/http/authentication.service';
import { SnackbarService } from '../../core/services/in-app/snackbar.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cb-login',
  templateUrl: './cb-login.component.html',
  styleUrls: ['./cb-login.component.scss']
})
export class CbLoginComponent implements OnInit {

  loginForm: FormGroup;
  errors ;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private spinnerService: SpinnerService ,
              private authenticationService: AuthenticationService ,
              private sessionStorageService: SessionStorageService ,
              private snackbarService: SnackbarService ,
              private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/other/errors.json').subscribe((data : any) => {
      this.errors = data;
      console.log(this.errors)
    });

    this.loginForm = this.formBuilder.group({
      username   : ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.spinnerService.activate()
    let authRequest = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    this.authenticationService.login(authRequest).subscribe(
      res => {
        this.sessionStorageService.save(res.token) ;
        this.spinnerService.deactivate() ;
        sessionStorage.setItem('permissions' , JSON.stringify(res.admin.role.permissions))
        this.snackbarService.openSnackBar("Connecté avec succès" , 'success')
        this.router.navigate(['/main'])
      },
      error => {
        this.spinnerService.deactivate()
        if(error.error.message == "wrong password") {
          this.snackbarService.openSnackBar("Mot de passe incorrect" , 'fail')
        }
        if(error.error.message == "account deactivated") {
          this.snackbarService.openSnackBar("Votre compte a été bloqué, vous pouvez contacter l'administration", 'fail')
        }
        if(error.error.message == "wrong username") {
          this.snackbarService.openSnackBar("Nom d'utilisateur incorrect", 'fail')
        }
      }
    )
  }

}
