import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor( private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if (this.adal.isInitialized) {
    //   if (!this.adal.isAuthenticated) {
    //     this.router.navigate(['/login']);
    //   }
    //   // If internal request; add one set of headers, else assume its for sharepoint with another set of headers
    //   if (request.url.charAt(0) === '/') {
    //     request = request.clone({
    //       setHeaders: {
    //         'Authorization': `Bearer ${this.adal.clientToken}`
    //       }
    //     });
    //   }
    // }

     return next.handle(request);
  }
}
