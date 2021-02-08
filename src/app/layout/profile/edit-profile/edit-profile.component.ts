import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/index';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  userData = JSON.parse(localStorage.getItem('user_data') || '[]');
  title = 'Mr';
  firstName!: string;
  middleName!: string;
  lastName!: string;
  phone!: string;
  userName!: string;
  email!: string;
  Securityquestion!: string;
  Securityanswer!: string;
  address1!: string;
  address2!: string;
  DOB!: string;
  State!: string;
  LGA!: string;
  City!: string;
  gender!: string;
  PayerID!: string;
  profileId!: string;
  loading = false;

  constructor(private authService: AuthService, private rotuer: Router) {}
  ngOnInit(): void {
    this.editProfile();
    this.profileId = this.userData[0]?.profile_ID;
  }
  onlyNumbers(event: any): boolean {
    const charCode = event.where ? event.where : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  editProfile() {
    this.firstName = 'Rajesh';
    this.lastName = 'kumar';
    this.middleName = 'khanna';
    this.phone = '987575878';
    this.userName = 'Rajesh12';
    this.email = 'rajesh@gmail.com';
    // this.State = 'telangana';
    // this.LGA = 'madhapur';
    // this.City = 'hyderabad';
    // this.DOB = '20-07-1993';
    // this.address1 = 'near madhapur';
    // this.address2 = 'landmark benz show room';
  }
  updateProfile(v: object) {
    const UserData = {
      title: this.title,
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      phone: this.phone,
      userName: this.userName,
      email: this.email,
      Securityquestion: this.Securityquestion,
      Securityanswer: this.Securityanswer,
      address1: this.address1,
      address2: this.address2,
      DOB: this.DOB,
      State: this.State,
      LGA: this.LGA,
      City: this.City,
      gender: this.gender,
      PayerID: this.PayerID,
    };
    console.log(UserData);
  }
  registerData(v: object) {
    // if (this.userType === this.individual) {
    //   this.organisationname = '';
    // }
    // if (this.userType === this.organisation) {
    //   (this.firstName = ''), (this.lastName = ''), (this.middleName = '');
    // }
    // if (this.remember_me == 'remember_me') {
    //   this.data = 23;
    // } else {
    //   this.data = 1;
    // }
    const user = {
      Suffix: this.title,
      // userType: this.userType,
      FirstName: this.firstName,
      MiddleName: this.middleName,
      UserName: this.userName,
      // organisationname: this.organisationname,
      LastName: this.lastName,
      PrimaryContactNumber: this.phone,
      PrimaryEmailID: this.email,
      // UserPassword: this.password,
      userRegModel: {
        UserName: this.userName,
        // UserPassword: this.password,
        UserCaseID: 0,
        // User_Role_ID: this.data,
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
      alert(
        'Thanks for registering with JIS. Please login with the username and password you have just created.YOU ARE ADVISED TO ASSOCIATE WITH A LAW FIRM BY CLICKING LAW FIRM TAB AFTER LOGIN'
      );
      setTimeout(() => {
        this.rotuer.navigate(['/login']);
      }, 2000);
    });
  }
}
