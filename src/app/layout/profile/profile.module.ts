import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [ProfileComponent, ChangepasswordComponent, ChangePasswordComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
