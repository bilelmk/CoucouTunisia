import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Menu } from "../../models/menu";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  URL =  environment.url +  "/api/menus" ;

  constructor(private http: HttpClient) { }

  add(menu: any): Observable<Menu> {
    return this.http.post<Menu>(this.URL , menu);
  }

  delete(id: number) {
    return this.http.delete(this.URL + "/" + id);
  }
}
