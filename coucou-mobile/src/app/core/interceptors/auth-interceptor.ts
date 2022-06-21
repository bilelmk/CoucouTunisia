// import { Injectable } from '@angular/core';
// import { from, Observable } from 'rxjs';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler, HttpEvent
// } from '@angular/common/http';
//
//
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthInterceptor implements HttpInterceptor {
//
//   apiUrl = environment.url;
//
//   urlsToNotUse= [
//     'auth-client',
//     'sell-points/group' ,
//   ];
//
//   constructor(private nativeHTTP: HTTP, private platform: Platform ,  private storage: Storage) {}
//
//   intercept( request : HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
//     if (request.url.startsWith(this.apiUrl)) {
//       return from(this.handleNativeRequest(request));
//     } else {
//       next.handle(request);
//     }
//
//     return request.url.startsWith(this.apiUrl)
//         ? from(this.handleNativeRequest(request))
//         : next.handle(request);
//   }
//
//   private async handleNativeRequest(request: HttpRequest<any>): Promise<HttpResponse<any>> {
//
//     let headers ;
//     let token = await this.storage.get("token").then(
//         data => { return data },
//         err => { return err }
//     )
//
//     if (token && this.isValidRequestForInterceptor(request.url)) {
//       // console.log("interceptor with token request")
//       headers = { Authorization : 'Bearer '+ token.token}
//     }
//     else {
//       // console.log("interceptor without token request")
//       headers = {}
//     }
//
//     // const headerKeys = request.headers.keys();
//
//     //
//     // headerKeys.forEach((key) => {
//     //     headers[key] = request.headers.get(key);
//     // });
//
//     try {
//       await this.platform.ready();
//       const method = <HttpMethod>request.method.toLowerCase();
//       const nativeHttpResponse = await this.nativeHTTP.sendRequest(
//           request.url,
//           {
//             method,
//             data: request.body,
//             headers,
//             serializer: 'json',
//           }
//       );
//       let body;
//       try {
//         body = JSON.parse(nativeHttpResponse.data);
//       } catch (error) {
//         body = { response: nativeHttpResponse.data };
//       }
//       const response = new HttpResponse({
//         body,
//         status: nativeHttpResponse.status,
//         url: nativeHttpResponse.url,
//       });
//       return Promise.resolve(response);
//
//     } catch (error) {
//       console.log("4")
//       if (!error.status) {
//         return Promise.reject(error);
//       }
//
//       const response = new HttpResponse({
//         body: error.error,
//         status: error.status,
//         headers: error.headers,
//         url: error.url,
//       });
//       return Promise.reject(response);
//     }
//
//
//   }
//
//   private isValidRequestForInterceptor(requestUrl: string): boolean {
//     let positionIndicator: string = 'api/';
//     let position = requestUrl.indexOf(positionIndicator);
//     if (position > 0) {
//       let destination: string = requestUrl.substr(position + positionIndicator.length);
//       for (let address of this.urlsToNotUse) {
//         if (new RegExp(address).test(destination)) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }
// }
