import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { LoginRequest } from '../../dtos/login-request';
import { environment } from '../../../../environments/environment';
import { RegisterRequest } from '../../dtos/register-request';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token = new BehaviorSubject(null);
  private tokenTimer: any ;

  constructor(private http: HttpClient ,
              private router: Router ,
              private storage: Storage
  ) {}

  signin(request: LoginRequest): Observable<any> {
    return this.http.post<any>(environment.url + 'clients/signin', request);
  }

  signup(request: RegisterRequest): Observable<any> {
    return this.http.post<any>(environment.url + 'clients/signup', request);
  }

  verifyPhoneCode(request: any): Observable<any> {
    return this.http.post<any>(environment.url + 'clients/check-phone-verification-code', request);
  }

  sendPassowrdCode(request: any): Observable<any> {
    return this.http.post<any>(environment.url + 'clients/send-reset-password-code', request);
  }

  sendPhoneCode(request: any): Observable<any> {
    return this.http.post<any>(environment.url + 'clients/send-phone-verification-code', request);
  }

  verifyPassowrdCode(request: any): Observable<any> {
    return this.http.post<any>(environment.url + 'clients/check-reset-password-code', request);
  }

  resetPassword(request: any): Observable<any> {
    return this.http.post<any>(environment.url + 'clients/reset-password', request);
  }

  logout() {
    this.storage.clear() ;
    this.router.navigate(['/']);
  }


  // autoAuthUser() {
  //     alert('sd')
  //     const expiresDate =  sessionStorage.getItem('expiresIn');
  //     if (!expiresDate) {
  //         return;
  //     }
  //     const now = new Date();
  //     const expiresIn = new Date(expiresDate).getTime() - now.getTime();
  //     if (expiresIn > 0) {
  //         this.router.navigate(['/main']);
  //         this.setAuthTimer(expiresIn / 1000);
  //     }
  // }


  setAuthTimer(duration: number) {
      this.tokenTimer = setTimeout(() => {
          this.logout();
      }, duration * 1000 );
  }

  // save(token: string, expiration: Date) {
  //   this.token.next(token) ;
  //   return this.storage.set('data',
  //       { token ,
  //         expiration
  //       });
  // }
  //
  // get() {
  //   return from(this.storage.get('data'));
  // }
}
