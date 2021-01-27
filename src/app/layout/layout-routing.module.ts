import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: () =>
      //     import('./layout.module').then((m) => m.LayoutModule),
      // },
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('../layout/home/home-routing.module').then(
      //       (m) => m.HomeRoutingModule
      //     ),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
