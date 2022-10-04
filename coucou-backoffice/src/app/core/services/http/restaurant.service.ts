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

  update(restaurant: any): Observable<any> {
    return this.http.put<any>(this.URL , restaurant);
  }

  block(id: number) {
    return this.http.put(this.URL + "/block/" + id , {});
  }

  deblock(id: number) {
    return this.http.put(this.URL + "/deblock/" + id , {});
  }

  changeImage(data: FormData, id: number): Observable<any> {
    return this.http.put(this.URL + "/image/" + id  , data);
  }
}
