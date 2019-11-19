import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerService } from '../shared/spinner/spinner.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    this.spinnerService.startRequest();
    return next.handle(req).pipe(
      finalize(() => {
      
        this.spinnerService.endRequest();
      })
    );
  }
}
