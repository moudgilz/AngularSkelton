import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SaleRoutingModule } from './sale.routes';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ComponentsModule } from '../../../shared/components.module';

@NgModule({
  imports: [RouterModule, CommonModule, SaleRoutingModule, ComponentsModule],
  declarations: [DashboardComponent],
})
export class SaleModule {}
