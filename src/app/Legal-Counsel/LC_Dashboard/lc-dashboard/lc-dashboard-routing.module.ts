import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LcDashboardComponent } from './lc-dashboard.component';

const routes: Routes = [{
  path:'',component:LcDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LcDashboardRoutingModule { }
