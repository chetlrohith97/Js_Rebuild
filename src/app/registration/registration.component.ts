import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env';
import { AuthService } from '@shared/services/index';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  title = 'Mr';
  userType : string= 'individual';
  individual = 'individual';
  organisation = 'organisation';
  organisationname!: string;
  firstName!: string;
  middleName!: string;
  lastName!: string;
  phone!: string;
  userName!: string;
  email!: string;
  password!: string;
  confirmpassword!: string;
  iamnot!: string;
  remember_me: string = 'remember_me';
  siteKey!: string;
  data!: number;
  loading = false;
  captcha!: string;
  constructor(private authService: AuthService, private rotuer: Router,
    private toastr: ToastrService) {
    // Able to get error because of this sitekey in the console//
    // this.siteKey = '6LfMXTEaAAAAAMjiXtkgDZF--Dho9LjYyn_Cplw5'; // i am not roboot APIkey
    this.siteKey = environment.siteKey_recptcha
  }

  ngOnInit(): void {}
  onlyNumbers(event: any): boolean {
    const charCode = event.where ? event.where : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  registerData(v: object) {
    if (this.userType === this.individual) {
      this.organisationname = '';
    }
    if (this.userType === this.organisation) {
      (this.firstName = ''), (this.lastName = ''), (this.middleName = '');
    }
    if (this.remember_me == 'remember_me') {
      this.data = 23;
    } else {
      this.data = 1; 
    }
    const user = {
      Suffix: this.title,
      UserType: this.userType,
      FirstName: this.firstName,
      MiddleName: this.middleName,
      UserName: this.userName,
      Organization_Name: this.organisationname,
      LastName: this.lastName,
      PrimaryContactNumber: this.phone,
      PrimaryEmailID: this.email,
      UserPassword: this.password,
      userRegModel: {
        UserName: this.userName,
        UserPassword: this.password,
        UserCaseID: 0,
        User_Role_ID: this.data,
        CaseTypes: 'Civil,Criminal',
        Agency: 0,
        Modified_by: 0,
        First_Name: this.firstName,
        Last_Name: this.lastName,
        Designation: '',
        BadgeNo: 0,
      },
    };

    this.loading = true;
    // posting data to authservice
    this.authService.RegisterData(user).subscribe((data) => {
      console.log(user);
      console.log('11111');
this.toastr.success('Thanks for registering with JIS. Please login with the username and password you have just created.YOU ARE ADVISED TO ASSOCIATE WITH A LAW FIRM BY CLICKING LAW FIRM TAB AFTER LOGIN','',{
  timeOut: 3000,
})

      // alert(
      //   'Thanks for registering with JIS. Please login with the username and password you have just created.YOU ARE ADVISED TO ASSOCIATE WITH A LAW FIRM BY CLICKING LAW FIRM TAB AFTER LOGIN'
      // );
      setTimeout(() => {
        this.rotuer.navigate(['/login']);
      }, 2000);
    });
  }
}
