import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'prefix' },
  {
    path: 'home',
    loadChildren: () =>
      import('../app/layout/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'home-admin',
    loadChildren: () =>
      import('./Administrator/Website-CMS/home-admin/home-admin-routing.module').then((m) => m.HomeAdminRoutingModule),
  },
  {
    path: 'Legal-dashboard',
    loadChildren: () =>
      import('./Legal-Counsel/LC_Dashboard/lc-dashboard/lc-dashboard-routing.module').then((m) => m.LcDashboardRoutingModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
 
  {
    path: 'page-not-found',
    loadChildren: () =>
      import('./page-not-found/page-not-found-routing.module').then(
        (m) => m.PageNotFoundRoutingModule
      ),
  },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
