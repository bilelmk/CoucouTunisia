import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../coucou-mobile/src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {}

  getCurrent(): Observable<any> {
    return this.http.get<any>(environment.url + 'clients');
  }

  updateImage(image): Observable<any> {
    return this.http.put<any>(environment.url + 'clients/image' , image);
  }

  update(data): Observable<any> {
    return this.http.put<any>(environment.url + 'clients' , data);
  }
}
