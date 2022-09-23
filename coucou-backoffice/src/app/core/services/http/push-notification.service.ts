import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  URL = environment.url + "/api/notifications" ;

  constructor(private http: HttpClient ) { }

  sendMulti(request): Observable<any> {
    return this.http.post<any>(this.URL , request);
  }

}
