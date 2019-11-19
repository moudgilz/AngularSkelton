import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
 selector: 'app-header-menu',
 templateUrl: 'header-menu.component.html',
})
export class HeaderMenuComponent implements OnInit {
 constructor(public router: Router) {
 }
 ngOnInit() { }
 /**
  * Menu bar click event
  */
 onMenuClick(type: any) {
   let link = [];
   switch (type) {
     case 'Proposal':
       link = ['./dashboard/proposal/add'];
       break;
     case 'Content':
       link = ['./dashboard/content/add'];
       break;
   }
   if (link.length > 0) {
     this.router.navigate(link);
   }
 }
}
