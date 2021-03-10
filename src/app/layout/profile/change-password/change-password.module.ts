import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';


@NgModule({
  declarations: [ChangePasswordModule],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule
  ]
})
export class ChangePasswordModule { }
