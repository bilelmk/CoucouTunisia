import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Admin} from '../../models/admin';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  URL = "/api/messaging" ;

  constructor(private http: HttpClient) { }

  sendOne(value: any) : Observable<any> {
    return this.http.post<any>(this.URL + "/one" , value);
  }
}
