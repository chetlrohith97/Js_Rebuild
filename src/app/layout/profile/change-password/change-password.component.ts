import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import {Md5} from 'ts-md5/dist/md5';
import { environment } from '@env';
import { stringify } from '@angular/compiler/src/util';
// import * as $ from 'jquery';
// import {MatPasswordStrengthComponent} from '@angular-material-extensions/password-strength';

import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';



declare var $: any;



@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {


  // getting the whole user data into localStorage

  userData = JSON.parse(localStorage.getItem('user_data') || '[]');

  changePasswordData = JSON.parse(localStorage.getItem('ChangePasswordData') || '[]');

  // Declare the all the varibles which are involved in form

  // Value In Repository

  // model.User_ID   --- this.userID
  // model.User_Pass  --- userPasswordForm
  // NewUser_Pass   --- userUpdatePasswordForm

  // Form Side Varibles
   securityAnswerForm!:string;
   securityQuestionIDForm:any;
   User_Pass:any;
   NewUser_Pass:any;
   confirmPassword:any;

   fieldTextType!:boolean;
   fieldTextType2!:boolean;



 // Variable Declaration
   userName!: string;
   userPassword!: string;
   User_ID!: any;
   profileID!:any;
   firstName!:string;
   primaryEmailID!:string;
   SecurityQuestionID!:any;
   SecurityAnswer!:string;


   user_Role_Name!:string;
   Securityquestion:any;

   //varible declaration for full object values

   userNameObj:any;
   userIDObj:any;
   userPasswordObj:any;
   primaryMailIDObj:any;
   securityQuestionIDObj:any;
   securityQuestionAnswerObj:any;

  //  Checking Varibales
  oldPasswordCheck:any;


   constructor(private authService: AuthService, private rotuer: Router, private toastr:ToastrService,){}

  // Declare any method to be run when page is loaded


   ngOnInit() {



    type ProgressBarMode = 'determinate' | 'indeterminate' | 'buffer' | 'query';

    // debugger

    this.User_ID = this.userData[0]?.user_ID;

    this.userName = this.changePasswordData[0]?.User_Name;
    this.profileID = this.changePasswordData[0]?.Profile_ID;
    this.SecurityAnswer = this.changePasswordData[0]?.SecurityAnswer;
    this.SecurityQuestionID = this.changePasswordData[0]?.SecurityQuestionID;
    this.userPassword = this.changePasswordData[0]?.User_Pass;
    this.firstName = this.changePasswordData[0]?.first_Name;
    this.primaryEmailID = this.changePasswordData[0]?.primary_Email_ID;

    console.log(this.User_ID, this.profileID, this.userName, this.SecurityQuestionID,
      this.SecurityAnswer, this.userPassword,
      this.firstName, this.primaryEmailID);

    //only particular elements that are defines in Model are getting
    // console.log(this.changePasswordData[0]);


    this.authService.ChangePassword(this.User_ID).subscribe((result)=>
    {
      //debugger
      console.log("gets the required values for Reset Password (Model Values)");
      console.log(result); //gets the required values for Reset Password

      console.log("Gets whole object value of particular user");
      console.log(Object.values(result)[0]);

      this.authService.StoreTheUserPasswordData(result);

    });



   }



   toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }


  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }


    oldPassword(PasswordForm:any){
        const UserPasswordPassingData=
       {
        "User_ID": this.User_ID,
        "User_Pass": PasswordForm.value.User_Pass,
        "NewUser_Pass":PasswordForm.value.NewUser_Pass

        }


        if(this.User_Pass == this.NewUser_Pass)
        {
          this.toastr.error(" Old & New Passwords are same so you cant update ");
        }
        else
        {
          // this.toastr.success(" You can Update ");

          this.authService.UpdatePassword(UserPasswordPassingData).subscribe((result)=>
          {

            console.log(result);
             this.toastr.success(result.toString());

            //  this.NewUser_Pass="";

          });

        }






     }
}
