import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  URL = "/api/coupons" ;

  constructor(private http: HttpClient) { }

  generateCoupons(couponRequest): Observable<Coupon[]> {
    return this.http.post<Coupon[]>(this.URL , couponRequest);
  }

  getAll(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.URL);
  }
}
