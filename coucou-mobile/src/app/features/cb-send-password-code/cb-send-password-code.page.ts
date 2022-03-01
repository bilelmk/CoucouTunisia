import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../core/services/http/authentication.service';
import {SpinnerService} from '../../core/services/in-app/spinner.service';
import {ToastService} from '../../core/services/in-app/toast.service';
import {error} from 'protractor';

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
          this.spinnerService.deactivate();
        },
        error => {
          this.spinnerService.deactivate();
        }
    );
  }
}
