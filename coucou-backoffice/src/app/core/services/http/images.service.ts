import { Injectable } from '@angular/core';
import { environment} from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  URL =  environment.url +  "/api/gallery" ;

  constructor(private http: HttpClient) { }

  add(image: any): Observable<any> {
    return this.http.post<any>(this.URL , image);
  }

  delete(id: number) {
    return this.http.delete(this.URL + "/" + id);
  }
}
