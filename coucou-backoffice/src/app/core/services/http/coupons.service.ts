import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../../models/coupon';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  URL = environment.url + "/api/coupons" ;

  constructor(private http: HttpClient) { }

  generateCoupons(couponRequest): Observable<Coupon[]> {
    return this.http.post<Coupon[]>(this.URL , couponRequest);
  }

  getAll(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.URL);
  }
}
