import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
const tripRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [     
      {
        path: 'proposal',
        loadChildren: 'app/features/trip/proposal/shared/proposal.module#ProposalModule',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(tripRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class TripRoutingModule {}
