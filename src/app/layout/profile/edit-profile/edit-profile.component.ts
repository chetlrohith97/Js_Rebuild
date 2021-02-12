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
  date_Of_Birth!: string;
  State!: string;
  LGA!: string;
  City!: string;
  gender!: string;
  PayerID!: string;
  profileId!: string;
  loading = false;
  user_ID?: string;
  Data?: object;
  Profile_ID!:string;
  BVN?:string
  MaritalStatus?:string;


  constructor(private authService: AuthService, private rotuer: Router) {}
  ngOnInit(): void {
    this.user_ID = this.userData[0]?.user_ID;
    this.Profile_ID = this.userData[0]?.profile_ID;
    console.log(this.user_ID);
    console.log(this.Profile_ID);
    console.log(this.userData[0]?.profile_ID);
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
       this.Profile_ID = Object.values(data)[0]?.profile_ID
      console.log(Object.values(data)[0]);

      // console.log(Object.values(data)[0]?.profile_ID);

      // console.log(Object.values(data)[0]?.last_Name);
      this.firstName = Object.values(data)[0]?.first_Name;
      this.lastName = Object.values(data)[0]?.last_Name;
      this.middleName = Object.values(data)[0]?.middle_Name;
      this.phone = Object.values(data)[0]?.primary_Contact_Number;
      // this.userName = Object.values(data)[0]?.userName;
      this.email = Object.values(data)[0]?.primary_Email_ID;
      this.State = Object.values(data)[0]?.state;
      this.LGA = Object.values(data)[0]?.lga;
      this.City = Object.values(data)[0]?.city;
      this.date_Of_Birth = Object.values(data)[0]?.date_Of_Birth;
      this.address1 = Object.values(data)[0]?.address_1;
      this.address2 = Object.values(data)[0]?.address_2;
      this.Securityquestion = Object.values(data)[0]?.securityQuestionID;
      this.Securityanswer = Object.values(data)[0]?.securityAnswer;
      this.gender = Object.values(data)[0]?.sex;
      this.MaritalStatus = Object.values(data)[0]?.maritalStatus;
    });
  }
  updateProfile(v: object) {
    const ProfileData = {
      suffix: this.title,
      first_Name: this.firstName,
      middle_Name: this.middleName,
      last_Name: this.lastName,
      primary_Contact_Number: this.phone,
      Profile_ID: this.Profile_ID,
      primary_Email_ID: this.email,
      SecurityQuestionID: this.Securityquestion, // need to update field
      SecurityAnswer: this.Securityanswer, // need to update field
      address_1: this.address1,
      address_2: this.address2,
      date_Of_Birth: this.date_Of_Birth,
      State: this.State,
      LGA: this.LGA,
      City: this.City,
      Sex: this.gender,
      PayerID: this.PayerID,
      MaritalStatus:this.MaritalStatus
    };
    this.authService.UpdateProfile(this.Profile_ID,ProfileData).subscribe((data)=>
    {
      console.log(ProfileData)
    console.log("success");
    console.log(data)
    console.log(this.Profile_ID);
    })
    console.log("clicked");

  }
  // registerData(v: object) {
  //   const user = {
  //     Suffix: this.title,
  //     FirstName: this.firstName,
  //     MiddleName: this.middleName,
  //     UserName: this.userName,
  //     LastName: this.lastName,
  //     PrimaryContactNumber: this.phone,
  //     PrimaryEmailID: this.email,
  //     userRegModel: {
  //       UserName: this.userName,
  //       UserCaseID: 0,
  //       CaseTypes: 'Civil,Criminal',
  //       Agency: 0,
  //       Modified_by: 0,
  //       First_Name: this.firstName,
  //       Last_Name: this.lastName,
  //       Designation: '',
  //       BadgeNo: 0,
  //     },
  //   };

  //   this.loading = true;
  //   this.authService.RegisterData(user).subscribe((data) => {
  //     console.log(user);
  //     console.log('11111');
  //     alert(
  //       'Thanks for registering with JIS. Please login with the username and password you have just created.YOU ARE ADVISED TO ASSOCIATE WITH A LAW FIRM BY CLICKING LAW FIRM TAB AFTER LOGIN'
  //     );
  //     setTimeout(() => {
  //       this.rotuer.navigate(['/login']);
  //     }, 2000);
  //   });
  // }
}
