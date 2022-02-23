import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Room } from "../../models/room";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  URL = "/api/rooms" ;

  constructor(private http: HttpClient) { }

  add(room: Room): Observable<Room> {
    return this.http.post<Room>(this.URL , room);
  }

  delete(id: number) {
    return this.http.delete(this.URL + "/" + id);
  }
}
