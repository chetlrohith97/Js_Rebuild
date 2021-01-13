import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'prefix'},
  {path:'',loadChildren:()=>import('./layout/layout.module').then(m=>m.LayoutModule)},
  {path:'login', loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},
  {path:'registration', loadChildren:()=>import('./registration/registration.module').then(m=>m.RegistrationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
