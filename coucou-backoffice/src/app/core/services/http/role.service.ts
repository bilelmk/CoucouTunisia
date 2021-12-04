import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../../models/role';
import {Permission} from '../../models/permission';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  URL = "/api/roles" ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Role[]> {
    return this.http.get<Role[]>(this.URL);
  }

  add(role: Role): Observable<Role> {
    return this.http.post<Role>(this.URL , role);
  }

  update(role: Role, id: number): Observable<Role> {
    return this.http.put<Role>(this.URL + "/" + id , role);
  }

  delete(id: number) {
    return this.http.delete(this.URL + "/" + id);
  }

  // addPermissions(id: number, permissions: Permission[]) {
  //   return this.http.post(this.URL + "/permissions/" + id , permissions)
  // }

  updatePermissions(id: number, permissions: Permission[]) {
    return this.http.put(this.URL + "/permissions/" + id , permissions)
  }

}

