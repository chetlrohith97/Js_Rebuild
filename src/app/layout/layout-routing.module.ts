import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('../layout/home/home-routing.module').then(
      //       (m) => m.HomeRoutingModule
      //     ),
      // },
      {
        path: 'profile',
        loadChildren: () =>
          import('../layout/profile/profile-routing.module').then(
            (m) => m.ProfileRoutingModule
          ),
      },
      {
        path: 'change-password',
        loadChildren: () =>
          import(
            '../layout/profile/change-password/change-password-routing.module'
          ).then((m) => m.ChangePasswordRoutingModule),
      },
      {
        path: 'edit-profile',
        loadChildren: () =>
          import(
            '../layout/profile/edit-profile/edit-profile-routing.module'
          ).then((m) => m.EditProfileRoutingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
