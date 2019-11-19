import { Component, OnInit, OnChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit,OnChanges, AfterViewInit {
  public version: string;
  @ViewChild('myDiv',{static: false}) myDiv: ElementRef;
  constructor(public router: Router, public auth: AuthService) {
  //  override the route reuse strategy
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
  }

  ngOnInit() {
    debugger
   
   }
   ngOnChanges(){
   
   }
   ngAfterViewInit() {
    setTimeout(() => {
      debugger;
      if (this.auth.loggedIn) {
        this.router.navigated = false; 
        this.router.navigate(['./dashboard', 'proposal'])
      } else {
     // this.auth.login();

      } 
      }, 200);
  }   
}
