import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../../models/admin';
import {LoginRequest} from '../../dtos/login-request';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  URL = "/api/admins" ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.URL);
  }

  add(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.URL , admin);
  }

  update(admin: Admin, id: number): Observable<Admin> {
    return this.http.put<Admin>(this.URL + "/" + id , admin);
  }

  delete(id: number) {
    return this.http.delete(this.URL + "/" + id);
  }

  block(id: number) {
    return this.http.put(this.URL + "/block/" + id , {});
  }

  deblock(id: number) {
    return this.http.put(this.URL + "/deblock/" + id , {});
  }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<any>(this.URL + '/signin' , loginRequest);
  }

}
