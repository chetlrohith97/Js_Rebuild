import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';

@NgModule({
  declarations: [ProfileComponent, EditProfileComponent,ChangePasswordComponent],
  imports: [CommonModule, LayoutRoutingModule, FormsModule,PasswordStrengthMeterModule]
})
export class LayoutModule {}
