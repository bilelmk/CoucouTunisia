import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Planning } from "../../models/planning";

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  URL = "/api/planning" ;

  constructor(private http: HttpClient) { }

  update(planning: Planning, id: number): Observable<Planning> {
    return this.http.put<Planning>(this.URL + "/" + id , planning);
  }
}
