import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  URL =  environment.url +  "/api/restaurants" ;

  constructor(private http: HttpClient) { }

  add(restaurant: any): Observable<any> {
    return this.http.post<any>(this.URL , restaurant);
  }

  getAll():Observable<any> {
    return this.http.get<any>(this.URL)
  }

  getAllLite():Observable<any> {
    return this.http.get<any>(this.URL + "/lite")
  }

  getOne(id):Observable<any> {
    return this.http.get<any>(this.URL + "/" + id)
  }

}
