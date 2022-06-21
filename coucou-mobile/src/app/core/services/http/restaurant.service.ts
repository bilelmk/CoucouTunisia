import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<any> {
    return this.http.get<any>(environment.url + 'restaurants/lite');
  }

  getRestaurant(id: number): Observable<any> {
    return this.http.get<any>(environment.url + 'restaurants/' + id);
  }

}
