import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Permission } from '../../models/permission';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  URL = environment.url + "/api/permissions" ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Permission[]> {
    return this.http.get<Permission[]>(this.URL);
  }

  add(permission: Permission): Observable<Permission> {
    return this.http.post<Permission>(this.URL , permission);
  }

  update(permission: Permission): Observable<Permission> {
    return this.http.put<Permission>(this.URL , permission);
  }

  delete(id: number) {
    return this.http.delete(this.URL + "/" + id);
  }

}
