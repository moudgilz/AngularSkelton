import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'

})
export class DashboardComponent implements OnInit {
  constructor (private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit () {};
}
