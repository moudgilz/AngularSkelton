import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login.component';
import { HomeComponent } from './home.component';
const APP_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: 'app/features/sale/shared/sale.module#SaleModule',
  },  
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  
];

export let AppRouterModule = RouterModule.forRoot(APP_ROUTES, { useHash: true});
