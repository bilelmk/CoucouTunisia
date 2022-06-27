import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Room } from "../../models/room";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  URL = environment.url +  "/api/rooms" ;

  constructor(private http: HttpClient) { }

  add(room: any): Observable<Room> {
    return this.http.post<Room>(this.URL , room);
  }

  delete(id: number) {
    return this.http.delete(this.URL + "/" + id);
  }
}
