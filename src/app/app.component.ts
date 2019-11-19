import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { SpinnerService } from './shared/spinner/spinner.service';
import { AuthService } from 'app/features/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService,
    private spinnerService: SpinnerService,
    private auth: AuthService,
    private router: Router) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
  ngOnInit() {

    const params = window.location.search;
    if (params.includes('code=') && params.includes('state=')) {
      this.router.navigate(['./dashboard', 'proposal'])
    } else {
      // On initial load, check authentication state with authorization server
      // Set up local auth streams if user is already authenticated
      this.auth.localAuthSetup();
      // Handle redirect from Auth0 login

      this.auth.handleAuthCallback();
    }
  }

}
