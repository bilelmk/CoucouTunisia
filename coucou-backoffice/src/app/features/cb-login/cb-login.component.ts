import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { SnackbarService } from '../../core/services/in-app/snackbar.service';
import { HttpClient } from '@angular/common/http';
import {AdminsService} from '../../core/services/http/admins.service';

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
              private snackbarService: SnackbarService ,
              private adminsService: AdminsService ,
              private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/other/errors.json').subscribe((data : any) => {
      this.errors = data;
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
    this.adminsService.login(authRequest).subscribe(
      res => {
        // save data in browser
        sessionStorage.setItem('permissions' , JSON.stringify(res.admin.role.permissions))
        sessionStorage.setItem('token' , res.token) ;
        sessionStorage.setItem('admin' , JSON.stringify({firstname : res.admin.firstname , lastname : res.admin.lastname }));
        sessionStorage.setItem('expiresIn' , res.expiresIn);
        this.adminsService.setAuthTimer(res.expiresIn) ;
        this.spinnerService.deactivate() ;
        this.snackbarService.openSnackBar("Connecté avec succès" , 'success')
        this.router.navigate(['/main'])
      },
      error => {
        console.log(error)
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
