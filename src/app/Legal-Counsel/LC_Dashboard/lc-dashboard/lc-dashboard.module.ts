import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LcDashboardRoutingModule } from './lc-dashboard-routing.module';
import { LcDashboardComponent } from './lc-dashboard.component';


@NgModule({
  declarations: [LcDashboardComponent],
  imports: [
    CommonModule,
    LcDashboardRoutingModule
  ]
})
export class LcDashboardModule { }
