import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler,  HttpInterceptor , HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class LoggingIntercetor implements HttpInterceptor{

  constructor(){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    return next.handle(req).do(
      event => {
        console.log('Logging interceptor event');
      }
    );
  }
}