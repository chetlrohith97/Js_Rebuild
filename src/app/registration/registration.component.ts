import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/index';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formErrors = {
    "firstName":'',"middleName":'',"lastName":'',"phone":'',"email":'',"password":'',
    "confirmpassword":'',"iamnot":'',"remember_me":""
  }
title = "Mr";
userType ="individual"
individual= "individual";
organisation="organisation";
organisationname!:string;
firstName!:string;
middleName!:string;
lastName!:string;
phone!:string;
userName!:string;
email!:string;
password!:string;
confirmpassword!:string;
iamnot!:string;
remember_me :string ="remember_me";
siteKey!: string;
data!:number
  constructor(private authService : AuthService,
    private rotuer:Router) {
      // Able to get error because of this sitekey in the console//
    this.siteKey = '6LfMXTEaAAAAAMjiXtkgDZF--Dho9LjYyn_Cplw5' // i am not roboot APIkey
   }

  ngOnInit(): void {
  }
    onlyNumbers(event:any):boolean{
      const charCode = (event.where)?event.where :event.keyCode;
      if(charCode > 31 && (charCode <48 || charCode >57)){
        return false
      }
      return true
    }
  registerData(v:object){
    if(this.userType === this.individual){
      this.organisationname = ''
    }
    if(this.userType === this.organisation){
      this.firstName = '',
      this.lastName = '',
      this.middleName = ''
    }
    if(this.remember_me == "remember_me"){
     this.data = 23 
    }
    else {
      this.data = 1
    }
    const user={
      Suffix : this.title,
     userType : this.userType,
     FirstName :this.firstName,
     MiddleName:this.middleName,
     UserName: this.userName,
     organisationname:this.organisationname,
     LastName: this.lastName,
     PrimaryContactNumber: this.phone,
     PrimaryEmailID :this.email,
     UserPassword :this.password,
     userRegModel:
      {
        UserName: this.userName,
        UserPassword :this.password,
        UserCaseID:0,
        User_Role_ID:this.data,
        CaseTypes:"Civil,Criminal",
        Agency:0,
        Modified_by:0,
        First_Name:this.firstName,
        Last_Name:this.lastName,
        Designation:"",
        BadgeNo:0
      }
    }
    // posting data to authservice
     this.authService.RegisterData(user).subscribe(data =>{
     })
 
     console.log(user)
     console.log("11111")
     alert("Registered successfully")
     setTimeout(() => {
     this.rotuer.navigate(['/login'])
     }, 3000);
   }
}
