import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthenticationService } from '../../core/services/http/authentication.service';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { ToastService } from '../../core/services/in-app/toast.service';

@Component({
  selector: 'app-cb-reset-passowrd',
  templateUrl: './cb-reset-passowrd.page.html',
  styleUrls: ['./cb-reset-passowrd.page.scss'],
})
export class CbResetPassowrdPage {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private authenticationService: AuthenticationService ,
              private spinnerService: SpinnerService ,
              private toastService: ToastService,
              private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  send() {
    const request = {
        clientId: this.route.snapshot.paramMap.get('id'),
        password: this.form.value.password
    };
    this.spinnerService.activate();
    this.authenticationService.resetPassword(request).subscribe(
        res => {
          this.router.navigate(['cb-login']);
          this.toastService.show('Mot de passe changé avec succès' ,'success') ;
          this.spinnerService.deactivate();
        },
        error => {
          this.toastService.show('Erreur du serveur' ,'danger');
          this.spinnerService.deactivate();
        }
    );
  }

}
