import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(
        (error: any) => {
          if (error instanceof HttpErrorResponse && (error.status === 401 || error.status === 403 || error.status === 500)) {
            console.log(error);
            // return of(error);
          }
          // TODO what on earth is this?
          if ((window.location.href.match(/\?/g) || []).length < 2) {
            console.log(error);
            // throw error;
            // return of(error);
          }
          // Unknown - rethrow error
          throw error;
        }
      ),
    );
  }
}
