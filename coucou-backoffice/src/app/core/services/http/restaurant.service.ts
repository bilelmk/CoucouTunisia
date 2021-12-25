import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  URL = "/api/restaurants" ;

  constructor(private http: HttpClient) { }

  add(restaurant: any): Observable<any> {
    return this.http.post<any>(this.URL , restaurant);
  }

}
