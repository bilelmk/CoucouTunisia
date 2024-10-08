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

  sendOne(data: any) : Observable<any> {
    return this.http.post<any>(this.URL + "/one" , data);
  }

  sendMulti(data: any) : Observable<any> {
    return this.http.post<any>(this.URL + "/multi" , data);
  }

  getUsage() : Observable<any> {
    return this.http.get<any>(this.URL + "/usage");
  }
}
