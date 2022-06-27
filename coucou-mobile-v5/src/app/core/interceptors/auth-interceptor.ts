import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Platform } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';


type HttpMethod =
  | 'get'
  | 'post'
  | 'put'
  | 'patch'
  | 'head'
  | 'delete'
  | 'upload'
  | 'download';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  apiUrl = environment.url;

  urlsToNotUse = [
    'clients',
    'products',
  ];

  constructor(private nativeHTTP: HTTP, private platform: Platform) {}

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    if (request.url.startsWith(this.apiUrl)) {
      return from(this.handleNativeRequest(request));
    } else {
      next.handle(request);
    }

    return request.url.startsWith(this.apiUrl)
        ? from(this.handleNativeRequest(request))
        : next.handle(request);
  }

  private async handleNativeRequest(request: HttpRequest<any>): Promise<HttpResponse<any>> {

    let headers ;
    const token = sessionStorage.getItem('token') ;

    if (token && this.isValidRequestForInterceptor(request.url)) {
      // console.log("interceptor with token request")
      headers = { Authorization : 'Bearer ' + token};
    } else {
      // console.log("interceptor without token request")
      headers = {};
    }

    // const headerKeys = request.headers.keys();

    //
    // headerKeys.forEach((key) => {
    //     headers[key] = request.headers.get(key);
    // });

    try {
      await this.platform.ready();
      const method = request.method.toLowerCase() as HttpMethod;
      const nativeHttpResponse = await this.nativeHTTP.sendRequest(
          request.url,
          {
            method,
            data: request.body,
            headers,
            serializer: 'json',
          }
      );
      let body;
      try {
        body = JSON.parse(nativeHttpResponse.data);
      } catch (error) {
        body = { response: nativeHttpResponse.data };
      }
      const response = new HttpResponse({
        body,
        status: nativeHttpResponse.status,
        url: nativeHttpResponse.url,
      });
      return Promise.resolve(response);

    } catch (error) {
      if (!error.status) {
        return Promise.reject(error);
      }

      const response = new HttpResponse({
        body: error.error,
        status: error.status,
        headers: error.headers,
        url: error.url,
      });
      return Promise.reject(response);
    }


  }

  private isValidRequestForInterceptor(requestUrl: string): boolean {
    const positionIndicator = 'api/';
    const position = requestUrl.indexOf(positionIndicator);
    if (position > 0) {
      const destination: string = requestUrl.substr(position + positionIndicator.length);
      for (const address of this.urlsToNotUse) {
        if (new RegExp(address).test(destination)) {
          return false;
        }
      }
    }
    return true;
  }
}
