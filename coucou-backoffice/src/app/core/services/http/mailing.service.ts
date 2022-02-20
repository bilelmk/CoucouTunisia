import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  URL = "/api/mails" ;

  constructor(private http: HttpClient) { }

  sendOne(content) : Observable<any> {
    return this.http.post<any>(this.URL + "/" , content);
  }
}
