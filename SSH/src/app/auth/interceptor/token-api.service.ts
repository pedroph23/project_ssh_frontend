import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { environmentUrl } from './../../../environments/enviroment-url';

import { Observable } from 'rxjs';

import { TokenService } from '../token.service';

@Injectable()
export class TokenApiService implements HttpInterceptor {


  constructor(private tokenService: TokenService) { }

/**
 * URL_EXTERNAL_DOMAIN is constant have just external urls.
 */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.tokenService.token) {
      if (req.url.includes(environmentUrl.URL_EXTERNAL_DOMAIN)) {
        return next.handle(req);
      }
      return next.handle(this.addToken(req, this.tokenService.token));
    }
    return next.handle(req);
  }

  addToken(req: HttpRequest<any>, token: string) {
    return req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }

}
