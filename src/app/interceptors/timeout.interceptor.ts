import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs';
import {timeout} from 'rxjs/operators';


@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req.headers.delete('timeout');
    // TODO why are we adding such a high timeout value?
    return next.handle(req).pipe(timeout(1000000));
  }
}
