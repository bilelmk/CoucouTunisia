import { Injectable } from '@angular/core';
import { SessionStorageService } from '../services/in-app/session-storage.service';

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private sessionStorageService: SessionStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.sessionStorageService.getToken();
    const authRequest = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + authToken)
    });
    return next.handle(authRequest);
  }
}
