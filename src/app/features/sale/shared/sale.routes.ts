import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
const saleRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [     
      {
        path: 'proposal',
        loadChildren: 'app/features/sale/proposal/shared/proposal.module#ProposalModule',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(saleRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class SaleRoutingModule {}
