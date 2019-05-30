import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class Inerceptor implements HttpInterceptor  {

  constructor(private cookie:CookieService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

    // modify request
    request = request.clone({
      setHeaders: {
        Authorization: `${this.cookie.get('token')}`
      },
      withCredentials: true
    });



    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {

            // http response status code
          }
        }, error => {
          // http response status code

        })
      )

  };

}
