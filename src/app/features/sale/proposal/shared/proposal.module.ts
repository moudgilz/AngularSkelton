import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProposalRoutingModule } from './proposal.routes';
import { AddProposalComponent , ProposalListComponent} from './index.proposal';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ProposalRoutingModule,
  ],
  declarations: [
    AddProposalComponent,
    ProposalListComponent,
    ],
})
export class ProposalModule { }
