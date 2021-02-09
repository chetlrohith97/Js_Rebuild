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
  user_ID?: string;
  Data?: object;

  constructor(private authService: AuthService, private rotuer: Router) {}
  ngOnInit(): void {
    this.editProfile(); //calling editprofile data on the load
    this.user_ID = this.userData[0]?.user_ID;
    console.log(this.user_ID);
    this.editProfile();
  }

  onlyNumbers(event: any): boolean {
    const charCode = event.where ? event.where : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  editProfile() {
    this.authService.EditProfile(this.user_ID || '').subscribe((data) => {
      console.log(Object.values(data)[0]);
      // console.log(Object.values(data)[0]?.last_Name);
      this.firstName = Object.values(data)[0]?.first_Name;
      this.lastName = Object.values(data)[0]?.last_Name;
      this.middleName = Object.values(data)[0]?.middle_Name;
      this.phone = Object.values(data)[0]?.primary_Contact_Number;
      // this.userName = Object.values(data)[0]?.userName;
      this.email = Object.values(data)[0]?.primary_Email_ID;
      this.State = Object.values(data)[0]?.State;
      this.LGA = Object.values(data)[0]?.LGA;
      this.City = Object.values(data)[0]?.City;
      this.DOB = Object.values(data)[0]?.date_Of_Birth;
      this.address1 = Object.values(data)[0]?.address_1;
      this.address2 = Object.values(data)[0]?.address_2;
      // this.firstName = 'Rajesh';
      // this.lastName = 'kumar';
      // this.middleName = 'khanna';
      // this.phone = '987575878';
      // this.userName = 'Rajesh12';
      // this.email = 'rajesh@gmail.com';
      // this.State = 'telangana';
      // this.LGA = 'madhapur';
      // this.City = 'hyderabad';
      // this.DOB = '20-07-1993';
      // this.address1 = 'near madhapur';
      // this.address2 = 'landmark benz show room';
    });
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
