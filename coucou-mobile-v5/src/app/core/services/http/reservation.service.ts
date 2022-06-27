import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) {}

  add(reservation): Observable<any> {
    return this.http.post<any>(environment.url + 'reservations' , reservation);
  }

  getAllByClient(request) {
    return this.http.post<any>(environment.url + 'reservations/client' , request);
  }
}
