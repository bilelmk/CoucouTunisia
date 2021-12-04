import { Injectable } from '@angular/core';
import { SessionStorageService } from '../in-app/session-storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../../models/admin';
import { LoginRequest } from '../../dtos/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  URL = "/api/admins" ;

  constructor(private sessionStorageService: SessionStorageService ,
              private router: Router ,
              private http: HttpClient) { }

  logout() {
    this.sessionStorageService.clear() ;
    this.router.navigate(['/'])
  }

  getCurrent(): Observable<Admin> {
    return this.http.get<Admin>(this.URL);
  }

  // register( freelancer: Admin): Observable<any> {
  //   return this.http.post<any>(this.URL + '/register' , freelancer);
  // }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<any>(this.URL + '/signin' , loginRequest);
  }
}
