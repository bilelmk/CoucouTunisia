import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  URL = environment.url + "/api/reservations" ;

  constructor(private http: HttpClient) { }

  getAll(request): Observable<any> {
    return this.http.post<any>(this.URL + '/search' , request);
  }

  updateState(state): Observable<any> {
    return this.http.put<any>(this.URL + '/state' , state);
  }

  update(value: any): Observable<any> {
    return this.http.put<any>(this.URL  , value);
  }
}
