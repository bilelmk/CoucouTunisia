import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { SessionStorageService } from '../../core/services/in-app/session-storage.service';
import { AuthenticationService } from '../../core/services/http/authentication.service';
import { SnackbarService } from '../../core/services/in-app/snackbar.service';

@Component({
  selector: 'app-cb-login',
  templateUrl: './cb-login.component.html',
  styleUrls: ['./cb-login.component.scss']
})
export class CbLoginComponent implements OnInit {

  loginForm: FormGroup;
  error : string = null ;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private spinnerService: SpinnerService ,
              private authenticationService: AuthenticationService ,
              private sessionStorageService: SessionStorageService ,
              private snackbarService: SnackbarService) {}

  ngOnInit(): void
  {
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
        this.snackbarService.openSnackBar("Connecté avec succès" , 'success')
        this.router.navigate(['/main'])
      },
      error => {
        this.snackbarService.openSnackBar(error.error.message , 'fail')
        this.spinnerService.deactivate()

      }
    )
  }

}
