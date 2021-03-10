import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { HomeComponent } from './layout/home/home.component';
import { Example1Component } from './layout/example1/example1.component';
import { NavbarComponent } from './layout/component/navbar/navbar.component';
import { FooterComponent } from './layout/component/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService, ErrormessagesService } from './layout/shared/services';
// import { NgxCaptchaModule } from 'ngx-captcha';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { ToastrModule } from 'ngx-toastr';
import { HomeAdminComponent } from './Administrator/Website-CMS/home-admin/home-admin.component';
import { LcDashboardComponent } from './Legal-Counsel/LC_Dashboard/lc-dashboard/lc-dashboard.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    ServerErrorComponent,
    HomeComponent,
    Example1Component,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    HomeAdminComponent,
    LcDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
      positionClass: 'toast-top-full-width',
    }),
    // NgxCaptchaModule
    PasswordStrengthMeterModule
  ],
  providers: [AuthService, ErrormessagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
