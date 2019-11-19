import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddProposalComponent, ProposalListComponent } from './index.proposal';

const proposalRoutes: Routes = [

  {
    path: '',
    component: ProposalListComponent,
  },
  {
    path: 'add',
    component: AddProposalComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(proposalRoutes),
  ],
  exports: [RouterModule],
})
export class ProposalRoutingModule { }
