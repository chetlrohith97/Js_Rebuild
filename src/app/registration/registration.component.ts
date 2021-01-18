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
    "firstname":'',"middleName":'',"lastName":'',"phone":'',"email":'',"password":'',
    "confirmpassword":'',"iamnot":'',"remember_me":""
  }
  myForm!: NgForm;
  @ViewChild('myForm', {  static: true }) currentForm!: NgForm;
title = "Mr";
// userType !:string;
userType ="individual"
individual= "individual";
organisation="organisation";
organisationname!:string;
firstName!:string;
middleName!:string;
lastName!:string;
phone!:string;
email!:string;
password!:string;
confirmpassword!:string;
iamnot!:string;
remember_me = "remember_me";
siteKey!: string
  constructor(private errorMessagesfields:ErrormessagesService) {
    this.siteKey = '6LfMXTEaAAAAAMjiXtkgDZF--Dho9LjYyn_Cplw5'
   }

  ngOnInit(): void {
  }

  // ngAfterViewChecked() {
  //   this.formChange();
  // }

  // formChange() {
  //   if (this.currentForm === this.myForm) { return; }
  //   this.myForm = this.currentForm;
  //   if (this.myForm) {
  //     this.myForm.form.valueChanges
  //   //  this.myForm.valueChanges
  //       .subscribe(data => this.onValueChanged());
  //   }
  // }

  // onValueChanged( ) {
  //   if (!this.myForm) { return; }
  //   const form = this.myForm.form;
  //   for (const field in this.formErrors) {
  //     // this.formErrors[]
  //     this.formErrors[field] = '';
  //     const control = form.get(field);
  //     if (control && control.dirty && !control.valid) {
  //       const messages = this.errorMessagesfields.errorMessage[field];
  //       for (const key in control.errors) {
  //         this.formErrors[field] = messages[key];
  //       }
  //     }
  //   }
  // }
  // submitInvalidForm() {
  //   if (!this.myForm) { return; }
  //   const form = this.myForm.form;
  //   for (const field in this.formErrors) {
  //     this.formErrors[field] = '';
  //     const control = form.get(field);
  //     if (control && !control.valid) {
  //       const messages = this.errorMessagesfields.errorMessage[field];
  //       for (const key in control.errors) {
  //         this.formErrors[field] = messages[key];
  //       }
  //     }
  //   }
  // }
  registerData(){
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
    //  individual :this.individual,
    //  organisation :this.organisation,
     firstname :this.firstName,
     middleName:this.middleName,
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
