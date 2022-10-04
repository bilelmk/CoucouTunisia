import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ExternalClient } from "../../models/external-client";

@Injectable({
  providedIn: 'root'
})
export class ExternalClientService {

  URL = environment.url + "/api/external-clients" ;

  constructor(private http: HttpClient) { }

  addBulk(users: ExternalClient[]): Observable<ExternalClient[]> {
    return this.http.post<ExternalClient[]>(this.URL , users);
  }

  getAll(): Observable<ExternalClient[]> {
    return this.http.get<ExternalClient[]>(this.URL);
  }
}
