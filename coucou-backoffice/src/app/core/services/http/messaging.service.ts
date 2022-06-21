import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  URL = environment.url + "/api/messaging" ;

  constructor(private http: HttpClient) { }

  sendOne(value: any) : Observable<any> {
    return this.http.post<any>(this.URL + "/one" , value);
  }
}
