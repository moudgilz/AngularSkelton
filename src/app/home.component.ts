import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, AfterViewChecked, NgZone } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { SpinnerService } from './shared/spinner/spinner.service';
import { AuthService } from './features/auth/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  
})
// tslint:disable-next-line:no-unused-expression
export class HomeComponent  implements OnInit, AfterViewChecked {
  constructor(private translate: TranslateService,
    private spinnerService: SpinnerService, private _ngZone: NgZone,
    public auth: AuthService,
    private router: Router) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
  ngOnInit() {
   // this.router.navigate(['./dashboard', 'content']);
  }
  ngAfterViewChecked() { 
  this.router.navigate(['./dashboard', 'content']);
  }

  
}
