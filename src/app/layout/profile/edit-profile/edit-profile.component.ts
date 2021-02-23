import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/index';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import {Md5} from 'ts-md5/dist/md5';
import { environment } from '@env';
declare var jquery:any;
declare var $ :any;
// import * as $ from 'jquery'
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
  States: any
  state: Object | undefined
  id:undefined
  Lgas :any
  Lga : any
  Citys :any
  // City :any
  Address:any
  UserType:any
  stateName!:string
  LgaName!:string
  CityName!:string
LolStateName?:any
LolLgaName?:any
LolCityName?:any
LolHashKey ?:any
  constructor(private authService: AuthService, private rotuer: Router,
    public datepipe: DatePipe,
    private toastr:ToastrService,
    ) {}
  ngOnInit(): void {
    this.user_ID = this.userData[0]?.user_ID;
    this.Profile_ID = this.userData[0]?.profile_ID;
    this.editProfile();
    //  state drop start
    // var stateName;
    this.authService.GetStatefields().subscribe((data)=>
    {
      this.States =  data;
      // console.log(data)
      for(let i=0; i<=this.States.length;i++){ //for getting an State_Name
        if(this.State == this.States[i]?.state_ID){
          this.stateName =this.States[i].state_Name
          // this.stateName= stateName
          // console.log(stateName)
          console.log("success")
        }
   }    
   console.log(this.stateName) 
   localStorage.setItem('stateName', this.stateName);
   
    }) 
    }

  onlyNumbers(event: any): boolean {
    const charCode = event.where ? event.where : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

getState(event :any){
  
  this.state = event
  console.log(event)
  this.authService.GetLgaFields(this.state).subscribe((data)=>{
    this.Lgas = data
    // console.log(this.LgaObject)
    this.getLga(this.LGA);

    for(let i=0; i<=this.Lgas.length;i++){ //for getting an State_Name
      if(this.LGA == this.Lgas[i]?.localGovtAreaId){
        this.LgaName =this.Lgas[i].localGovtAreaName
        // console.log(this.LgaName)
        // console.log("success")
      }
    }
    console.log(this.LgaName) 
   localStorage.setItem('LgaName', this.LgaName);
 })

}
getLga(event :any){
  this.Lga = event
  // console.log(event)
  this.authService.GetCityFields(this.Lga).subscribe((data)=>{
    this.Citys = data
    // console.log(this.CityObject)

    for(let i=0; i<=this.Citys.length;i++){ //for getting an State_Name
      if(this.City == this.Citys[i]?.city_ID){
        this.CityName =this.Citys[i].city_Name
        console.log(this.CityName)
        console.log("success")
      }
    }
    console.log(this.CityName) 
    localStorage.setItem('CityName', this.CityName);
  })

}

  editProfile() {
   

    this.authService.EditProfile(this.user_ID || '').subscribe((data) => {
      this.UserType = Object.values(data)[0]?.userType
      console.log( Object.values(data)[0])
      var currentDate = new Date(Object.values(data)[0]?.date_Of_Birth);
      var date = currentDate.getDate();
      var month = currentDate.getMonth(); //Be careful! January is 0 not 1
      var year = currentDate.getFullYear();
      var dateString = (month + 1) + "/" + date + "/" + year;
      this.date_Of_Birth=new Date(dateString);
    let latest_date =this.datepipe.transform(dateString, 'MM/dd/yyyy');
      console.log(latest_date)
      console.log(dateString);
      console.log(date + month +year);

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
      console.log(this.date_Of_Birth)
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
    this.LolStateName = localStorage.getItem('stateName')
    this.LolLgaName = localStorage.getItem('LgaName')
    this.LolCityName = localStorage.getItem('CityName')
    this.LolHashKey = localStorage.getItem('Hashvalue')
    console.log(this.LolStateName + this.LolLgaName + this.LolCityName +this.LolHashKey)
    this.Address = this.address1+ " ," + this.LolCityName + " ," + this.LolLgaName + ' ,' + this.LolStateName
    console.log(this.Address)
    this.date_Of_Birth=new Date(this.date_Of_Birth);
    let latest_date = this.datepipe.transform(this.date_Of_Birth, 'yyyy-MM-ddTHH:mm:ss');
    let clientCode = environment.ClientCode;
    const UserData ={
      title :this.title,
      lastName:this.lastName,
      firstName: this.firstName,
      otherName:this.middleName,
      email:this.email,
      address:this.Address,
      phone: this.phone,
      birthDate:latest_date,
      bvnNumber:this.BVN,
      sex:this.gender,
      maritalStatus:this.MaritalStatus,
      clientName :clientCode,
      hash:this.LolHashKey
      }
        console.log(UserData)
  // localStorage.removeItem('stateName')
  //  localStorage.removeItem('LgaName')
  //  localStorage.removeItem('CityName')
  //  localStorage.removeItem('Hashvalue')
    
    
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
    localStorage.setItem('Hashvalue', Hashvalue);
  }
    // let Hashvalue = CreateMD5(Hash);
    // return Hashvalue.ToUpper();
  }
  // ngAfterViewInit() {
  // this.generatePayerId()
   
  // }
  getOrganizationId(){
    
    this.LolStateName = localStorage.getItem('stateName')
    this.LolLgaName = localStorage.getItem('LgaName')
    this.LolCityName = localStorage.getItem('CityName')
    this.LolHashKey = localStorage.getItem('Hashvalue')
    console.log(localStorage.getItem('stateName')) 
   console.log(localStorage.getItem('LgaName')) 
   console.log(localStorage.getItem('CityName')) 
   console.log(localStorage.getItem('Hashvalue')) 
   

    
    this.Address = this.address1+ ","+ this.LolCityName + "," + this.LolLgaName + ',' + this.LolStateName;
    console.log(this.Address)
    let clientName=environment.ClientCode;
    // console.log( this.Address)
    const OrganizData ={
      name:this.firstName,
      email:this.email,
      address: this.Address,
      phone:this.phone,
      clientName :clientName,
      hash: this.LolHashKey
    }
    console.log(OrganizData)
    // localStorage.removeItem('stateName')
    // localStorage.removeItem('LgaName')
    // localStorage.removeItem('CityName')
    // localStorage.removeItem('Hashvalue')
  }

  
}
