import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  URL = environment.url + "/api/mails" ;

  constructor(private http: HttpClient) { }

  sendOne(content) : Observable<any> {
    return this.http.post<any>(this.URL + "/" , content);
  }
}
