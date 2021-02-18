import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/index';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import {Md5} from 'ts-md5/dist/md5';
// import {environment} from '@env/index';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers:[DatePipe]
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
  date_Of_Birth!: Date;
  State = 0;
  LGA = 0;
  City = 0;
  gender!: string;
  PayerID!: string;
  profileId!: string;
  loading = false;
  user_ID?: string;
  Data?: object;
  Profile_ID!:string;
  BVN?:string
  MaritalStatus?:string;
  StateObject: any
  statefields: Object | undefined
  id:undefined
  LgaObject :any
  LgaFields : any
  CityObject :any
  Cityfield :any
  Address:any
  UserType:any
  constructor(private authService: AuthService, private rotuer: Router,
    public datepipe: DatePipe,
    private toastr:ToastrService,
    ) {}
  ngOnInit(): void {
    this.user_ID = this.userData[0]?.user_ID;
    this.Profile_ID = this.userData[0]?.profile_ID;
    this.editProfile();
    //  state drop start
    this.authService.GetStatefields().subscribe((data)=>
    {
      this.StateObject =  data;
      // console.log(data)
    })
    //  state drop end

    // this.generatePayerId()
    // this.getIndividualId()
    }

  onlyNumbers(event: any): boolean {
    const charCode = event.where ? event.where : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

getState(event :any){
  this.statefields = event
  // console.log(event)
  this.authService.GetLgaFields(this.statefields).subscribe((data)=>{
    this.LgaObject = data
    // console.log(this.LgaObject)
    this.getLga(this.LGA);
 })

}
getLga(event :any){
  this.LgaFields = event
  // console.log(event)
  this.authService.GetCityFields(this.LgaFields).subscribe((data)=>{
    this.CityObject = data
    // console.log(this.CityObject)
  })

}

  editProfile() {
   

    this.authService.EditProfile(this.user_ID || '').subscribe((data) => {
      this.UserType = Object.values(data)[0]?.userType
      // console.log(this.UserType)
      // var currentDate = new Date(Object.values(data)[0]?.date_Of_Birth);
      // var date = currentDate.getDate();
      // var month = currentDate.getMonth(); //Be careful! January is 0 not 1
      // var year = currentDate.getFullYear();
      // var dateString = (month + 1) + "/" + date + "/" + year;
      // console.log(dateString);
       this.Profile_ID = Object.values(data)[0]?.profile_ID
      // console.log(Object.values(data)[0]);
      this.firstName = Object.values(data)[0]?.first_Name;
      this.lastName = Object.values(data)[0]?.last_Name;
      this.middleName = Object.values(data)[0]?.middle_Name;
      this.phone = Object.values(data)[0]?.primary_Contact_Number;
      // this.userName = Object.values(data)[0]?.userName;
      this.email = Object.values(data)[0]?.primary_Email_ID;
      this.State = Object.values(data)[0]?.state;
      this.LGA = Object.values(data)[0]?.lga;
      this.City = Object.values(data)[0]?.city;
      this.date_Of_Birth = Object.values(data)[0]?.date_Of_Birth
      this.address1 = Object.values(data)[0]?.address_1;
      this.address2 = Object.values(data)[0]?.address_2;
      this.Securityquestion = Object.values(data)[0]?.securityQuestionID;
      this.Securityanswer = Object.values(data)[0]?.securityAnswer;
      this.gender = Object.values(data)[0]?.sex;
      this.MaritalStatus = Object.values(data)[0]?.marital_Status;
      this.BVN = Object.values(data)[0]?.bank_Verification_Number;
      this.PayerID = Object.values(data)[0]?.payerID
      // console.log(this.date_Of_Birth)
      // console.log(this.City)
      // console.log(this.State)
      this.getState(this.State);
    // console.log(this.address1+ ","+this.City + "," + this.LGA + ',' + this.State)
    this.generatePayerId()  //calling method to utilize response values of above reponse object
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
      Marital_Status:this.MaritalStatus,
      Bank_Verification_Number :this.BVN
    };
    this.authService.UpdateProfile(this.Profile_ID,ProfileData).subscribe((data)=>
    {
      // console.log(ProfileData)
    console.log("success");
    // console.log(data)
    // console.log(this.Profile_ID);
    this.toastr.success("Edit profile update successfully")
    })
    // console.log("clicked");

  }

  generatePayerId(){
    // console.log(this.UserType)
    // this.Address = this.address1+ ","+this.City + "," + this.LGA + ',' + this.State
    // console.log(this.Address)
    if(this.UserType === "organisation"){
      this.getOrganizationId()
    // console.log("success")    
    }
    else{
      this.getIndividualId()
    }
  }

  getIndividualId(){
    this.Address = this.address1+ ","+this.City + "," + this.LGA + ',' + this.State
    this.date_Of_Birth=new Date(this.date_Of_Birth);
    let latest_date =this.datepipe.transform(this.date_Of_Birth, 'yyyy-MM-ddTHH:mm:ss');
    let clientName='LSJI';
    let hashKey ='895D78F2-D3D8-4458-AC6B-DD556CF5529D';
    const UserData ={
      title :this.title,
      lastName:this.lastName,
      firstName: this.firstName,
      otherName:this.middleName,
      email:this.email,
      address:this.Address,
      phone: this.phone,
      latest_date:latest_date,
      bvnNumber:this.BVN,
      sex:this.gender,
      maritalStatus:this.MaritalStatus,
      clientName :clientName,
      hash: this.GetHash( hashKey, clientName, this.lastName, this.firstName, this.email, this.phone, this.Address),
      }
      // this.authService.CreateIndividualId(UserData).subscribe((response)=>{
      //   // if(response
      //   console.log(response)
      // })
      // let hash = this.GetHash( hashKey, UserData.clientName, UserData.lastName, UserData.firstName, UserData.email, UserData.phone, UserData.address);//commented on 27jan2020
      // console.log(this.GetHash(hashKey, clientName, UserData.lastName, UserData.firstName, UserData.email, UserData.phone, UserData.address))
  }
  GetHash(  hashKey: string,  ClientName: string,  LastName: string,  FirstName: string,  Email: string,  Phone: string,  Address: any){
    let Hash = hashKey + ClientName + LastName + FirstName + Email + Phone + Address;
    console.log(Hash)
    const Hvaluing = new Md5();
    const Hashvalued = Hvaluing.appendStr(Hash).end()
    console.log(Hashvalued);
    if (typeof Hashvalued === 'string') {
    const  Hashvalue = Hashvalued.toUpperCase();
    console.log(Hashvalue);

  }
    // let Hashvalue = CreateMD5(Hash);
    // return Hashvalue.ToUpper();
  }
    
  getOrganizationId(){
    this.Address = this.address1+ ","+this.City + "," + this.LGA + ',' + this.State;
    let clientName='LSJI';
    let hashKey ='895D78F2-D3D8-4458-AC6B-DD556CF5529D';
    // console.log( this.Address)
    const OrganizData ={
      name:this.firstName,
      email:this.email,
      address: this.Address,
      phone:this.phone,
      clientName :clientName,
      hash: this.GetHash( hashKey, clientName, this.lastName, this.firstName, this.email, this.phone, this.Address),
    }
    // console.log(OrganizData)

  }
}
