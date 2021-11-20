import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  save(token: string) {
    sessionStorage.setItem('token' , token) ;
  }

  getToken(){
    return sessionStorage.getItem('token')
  }

  clear() {
    sessionStorage.clear() ;
  }
}
