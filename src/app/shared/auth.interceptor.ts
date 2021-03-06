import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler,  HttpInterceptor , HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(  private authService: AuthService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
     const token = this.authService.getToken();
    console.log('Intercepted',req);
    //req and copiedReq are immutable object
    const copiedReq = req.clone({params: req.params.set('auth',token) });
    return next.handle(copiedReq);
  }
}
