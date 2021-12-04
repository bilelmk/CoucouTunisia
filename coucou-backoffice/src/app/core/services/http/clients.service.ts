import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../../models/client';
import { SearchClientRequest } from '../../dtos/search-client-request';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  URL = "/api/clients" ;

  constructor(private http: HttpClient) { }

  getAll(request: SearchClientRequest): Observable<Client[]> {
    return this.http.post<Client[]>(this.URL , request);
  }

  getAllLower(): Observable<Client[]> {
    return this.http.get<Client[]>(this.URL + "lower");
  }
}
