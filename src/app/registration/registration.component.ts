import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ErrormessagesService } from '@shared/services/index'

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
  
  // myForm :NgForm | undefined
  // @ViewChild('myForm', {  static: true }) currentForm :NgForm |undefined
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
remember_me = "remember_me";
siteKey!: string

  constructor(
    // private errorMessagesfields:ErrormessagesService
    ) {
      // Able to get error because of this sitekey in the console//
    this.siteKey = '6LfMXTEaAAAAAMjiXtkgDZF--Dho9LjYyn_Cplw5' // i am not roboot APIkey
   }

  ngOnInit(): void {
  }

  // ngAfterViewChecked(){
  //   this.formChanged()
  // }
  // formChanged(){
  //   if(this.currentForm === this.myForm) {return};
  //   this.myForm = this.currentForm;
  //   if(this.myForm){
  //     this.myForm.valueChanges?.subscribe(data => this.onValueChanged(data))
  //   }
  // }
  // onValueChanged(data:any){
  //   if(!this.myForm){return;}
  //   const form = this.myForm.form;

  //   for( const field in this.formErrors){
  //     Object.keys(this.formErrors);
  //     const control = form.get(field);
  //     if( control && control.dirty && !control.valid){
  //       const messages = Object.keys(this.errorMessagesfields.errorMessage)
  //       console.log(messages)
  //       for(let i = 0; i< Object.keys(this.formErrors).length; i++ ){
  //         const key: String = Object.keys(this.formErrors)[i];
  //         console.log(key)
        
  //       }
  //     }
  //   }
  // }
  // submitInvalidForm() {
  //   if (!this.myForm) { return; }
  //   const form = this.myForm.form;
  //   for (const field in this.formErrors) {
  //     Object.keys(this.formErrors);
  //     const control = form.get(field);
  //     if (control && !control.valid) {
  //       const messages = Object.keys(this.errorMessagesfields.errorMessage)
  //       console.log(this.formErrors)
  //       console.log(Object.keys(this.formErrors))
  //       for (const key in control.errors) {

  //         console.log(messages)
  //         console.log(control)
  //         console.log(key)
  //         console.log(form.get(field))
  //         // this.formErrors[field] = messages[key];
  //       }
  //     }
  //   }
  // }
  registerData(v:any){
    if(this.userType === this.individual){
      this.organisationname = ''
    }
    if(this.userType === this.organisation){
      this.firstName = '',
      this.lastName = '',
      this.middleName = ''
    }
    const user={
     title : this.title,
     userType : this.userType,
     firstname :this.firstName,
     middleName:this.middleName,
     userName: this.userName,
     organisationname:this.organisationname,
     lastName: this.lastName,
     phone: this.phone,
     email :this.email,
     password :this.password,
     confirmpassword :this.confirmpassword,
     iamnot : this.iamnot,
     remember_me :this.remember_me
 
     }
 console.log(JSON.stringify(user))
 alert(JSON.stringify(user))
   }
}
