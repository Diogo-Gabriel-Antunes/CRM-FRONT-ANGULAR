import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('teste2');
    const token = localStorage.getItem('token');
    if (token !== null) {
      const authRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}
