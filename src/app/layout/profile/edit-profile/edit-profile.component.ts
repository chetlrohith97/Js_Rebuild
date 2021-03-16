import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/index';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import {Md5} from 'ts-md5/dist/md5';
import { environment } from '@env';
import {BasicProfileModel,AddressInfoModel,PersonalInfoModel} from '@models/index'
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
  // firstName!: string;
  // middleName!: string;
  // lastName!: string;
  // phone!: string;
  // userName!: string;
  // email!: string;
  // Securityquestion = 0;
  // Securityanswer!: string;
  // address1!: string;
  // address2!: string;
  date_Of_Birth: any;
  State = 0;
  LGA = 0;
  City = 0;
  gender=0
  PayerID!: string;
  profileId!: string;
  loading = false;
  loadSpin= false;
  user_ID?: string;
  Data?: object;
  Profile_ID!:string;
  BVN?:string
  MaritalStatus=0;
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
National_ID?:string
User_Name?:string
sec_City=0;
sec_LGA=0;
sec_State=0;
national_ID:any;
isAddress_Same :boolean=false
sec_States:any
SecLgas:any 
SecCitys:any 
organisationname:any
individual = 'individual';
organisation = 'organisation';

BasicModel:BasicProfileModel ={
  title:'',
  UserType:'',
  firstName:'',
  lastName:'',
  middleName:'',
  phone:'',
  email:'',
  organisationname:'',
} 

AddressModel : AddressInfoModel= {
  State:'',
  LGA:'',
  City:'',
  address1:'',
  address2:'',
  sec_State:'',
  sec_LGA:'',
  sec_City:'',
}

PersonalModel : PersonalInfoModel = {
  date_Of_Birth:'',
    Securityquestion:'0',
    Securityanswer:'',
    gender:'0',
    MaritalStatus:'',
    BVN:'',
    PayerID:'',
    national_ID:'',
}
  constructor(private authService: AuthService,
    public datepipe: DatePipe,
    private toastr:ToastrService,
    private router: Router
    ) {}
  ngOnInit(): void {
    this.user_ID = this.userData[0]?.user_ID;
    this.Profile_ID = this.userData[0]?.profile_ID;
    this.editProfile();
    console.log(this.user_ID)
    //  state drop start
    // var stateName;
    // this.authService.GetStatefields().subscribe((data:any)=>
    // {
    //   this.States =  data;
    //   this.sec_States =data
    //   console.log(this.sec_States)
    // console.log( this.stateName)
    // })
    this.States = this.authService.GetStatefields()
    this.sec_States = this.authService.GetStatefields()
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
//   this.authService.GetLgaFields(this.state).subscribe((data:any)=>{
//     this.Lgas = data
//     console.log(this.Lgas)
//     this.getLga(this.LGA);
//     console.log(data)
//  })
this.Lgas = this.authService.GetLgaFields(this.state)
this.getLga(this.LGA);
}
getLga(event :any){
  this.Lga = event
  // this.authService.GetCityFields(this.Lga).subscribe((data:any)=>{
  //   this.Citys = data
  //   console.log(this.Citys)
  // })
  this.Citys = this.authService.GetCityFields(this.Lga)

}

getSec_state(event:any){
  this.sec_State = event
  console.log(event)
//   this.authService.GetLgaFields(this.sec_State).subscribe((data)=>{
//     this.SecLgas = data
//     this.getsec_LGA(this.sec_LGA);

//  })
this.SecLgas = this.authService.GetLgaFields(this.sec_State)
  this.getsec_LGA(this.sec_LGA);
}
getsec_LGA(event:any){
  this.sec_LGA = event
this.SecCitys =  this.authService.GetCityFields(this.sec_LGA)
}
  editProfile() {
   

    this.authService.EditProfile(this.user_ID || '').subscribe((data) => {
      console.log(Object.values(data)[0]?.date_Of_Birth)
      console.log(new Date())
      var MMddyyyy = this.datepipe.transform(Object.values(data)[0]?.date_Of_Birth,"yyyy-MM-dd");
      console.log(MMddyyyy); //output - 14-02-2019
      this.BasicModel.UserType = Object.values(data)[0]?.userType
      this.BasicModel.title = Object.values(data)[0]?.suffix
      this.User_Name = Object.values(data)[0]?.user_Name
       this.Profile_ID = Object.values(data)[0]?.profile_ID
      this.BasicModel.firstName = Object.values(data)[0]?.first_Name;
      this.BasicModel.lastName = Object.values(data)[0]?.last_Name;
      this.BasicModel.middleName = Object.values(data)[0]?.middle_Name;
      this.BasicModel.phone = Object.values(data)[0]?.primary_Contact_Number;
      this.BasicModel.email = Object.values(data)[0]?.primary_Email_ID;
      this.BasicModel.organisationname = Object.values(data)[0]?.organization_Name;
      this.AddressModel.address1 = Object.values(data)[0]?.address_1;
      this.AddressModel.address2 = Object.values(data)[0]?.address_2;
      this.State = Object.values(data)[0]?.state;
      this.LGA = Object.values(data)[0]?.lga;
      this.City = Object.values(data)[0]?.city;
      this.sec_State= Object.values(data)[0]?.sec_State;
      this.sec_LGA= Object.values(data)[0]?.sec_LGA;
      this.sec_City= Object.values(data)[0]?.sec_City;
      this.isAddress_Same= Object.values(data)[0]?.isAddress_Same;
      this.PersonalModel.Securityquestion = Object.values(data)[0]?.securityQuestionID;
      this.PersonalModel.Securityanswer = Object.values(data)[0]?.securityAnswer;
      this.PersonalModel.gender = Object.values(data)[0]?.sex;
      this.PersonalModel.MaritalStatus = Object.values(data)[0]?.marital_Status;
      this.PersonalModel.BVN = Object.values(data)[0]?.bank_Verification_Number;
      this.PersonalModel.PayerID = Object.values(data)[0]?.payerID;
      this.PersonalModel.national_ID= Object.values(data)[0]?.national_ID;
      this.date_Of_Birth = MMddyyyy
      this.getState(this.State);
      this.getSec_state(this.sec_State)
    });
  }
  // showtab(){
  //   console.log("INNN");

  //   if(true){
  //     $("#contact-tab").trigger("click");
  //   }else{

  //   }
 
  // }
  updateProfile(v: object, myForm1:any,nextTab:any) {
    console.log("test" +nextTab)
    if(!myForm1.form.valid){
         console.log("Error in my code")
    }
    else if(myForm1.form.valid){
      console.log("success")
   
    const ProfileData = {
      suffix: this.BasicModel.title,
      first_Name: this.BasicModel.firstName,
      middle_Name: this.BasicModel.middleName,
      last_Name: this.BasicModel.lastName,
      primary_Contact_Number: this.BasicModel.phone,
      Profile_ID: this.Profile_ID,
      primary_Email_ID: this.BasicModel.email,
      organization_Name:this.BasicModel.organisationname,
      address_1: this.AddressModel.address1,
      address_2: this.AddressModel.address2,
      State: this.State,
      LGA: this.LGA,
      City: this.City,
      IsAddress_Same:this.isAddress_Same,
      Sec_State:this.sec_State,
      Sec_LGA:this.sec_LGA,
      Sec_City:this.sec_City,
      Sex: this.PersonalModel.gender,
      PayerID: this.PersonalModel.PayerID,
      Marital_Status:this.PersonalModel.MaritalStatus,
      Bank_Verification_Number :this.PersonalModel.BVN,
      National_ID:this.PersonalModel.national_ID,
      date_Of_Birth: this.date_Of_Birth,
      SecurityQuestionID: this.PersonalModel.Securityquestion, // need to update field
      SecurityAnswer: this.PersonalModel.Securityanswer, // need to update field
    };
        this.authService.UpdateProfile(this.Profile_ID,ProfileData).subscribe((data:any)=>
        {
        console.log(ProfileData.PayerID)
            console.log(ProfileData)
            console.log("success");
            console.log(data)
            this.toastr.success("Edit profile update successfully");
            $("#"+nextTab).trigger("click");
        })
   }
  }
  Save(myForm1:any){
    if(!myForm1.form.valid){
      console.log("Error in my code")
 }
 else if(myForm1.form.valid){
   console.log("success")

 const ProfileData = {
  suffix: this.BasicModel.title,
      first_Name: this.BasicModel.firstName,
      middle_Name: this.BasicModel.middleName,
      last_Name: this.BasicModel.lastName,
      primary_Contact_Number: this.BasicModel.phone,
      Profile_ID: this.Profile_ID,
      primary_Email_ID: this.BasicModel.email,
      organization_Name:this.BasicModel.organisationname,
      address_1: this.AddressModel.address1,
      address_2: this.AddressModel.address2,
      State: this.State,
      LGA: this.LGA,
      City: this.City,
      IsAddress_Same:this.isAddress_Same,
      Sec_State:this.sec_State,
      Sec_LGA:this.sec_LGA,
      Sec_City:this.sec_City,
      Sex: this.PersonalModel.gender,
      PayerID: this.PersonalModel.PayerID,
      Marital_Status:this.PersonalModel.MaritalStatus,
      Bank_Verification_Number :this.PersonalModel.BVN,
      National_ID:this.PersonalModel.national_ID,
      date_Of_Birth: this.date_Of_Birth,
      SecurityQuestionID: this.PersonalModel.Securityquestion, // need to update field
      SecurityAnswer: this.PersonalModel.Securityanswer, // need to update field

 };
     this.authService.UpdateProfile(this.Profile_ID,ProfileData).subscribe((data:any)=>
     {
      this.toastr.success("Edit profile update successfully");
     })
}
  }
  
  logout() {
    localStorage.removeItem(this.userData);
    this.authService.logout();
    this.router.navigate(['/home']);
    this.toastr.success('Your Are Logged out');
  }
getAddressDetails(){
  // debugger
  this.authService.GetAddressDetails(this.user_ID).subscribe((address:any)=>{
    console.log("get organisationid as 1st one")
    this.stateName = address[0].state
    this.LgaName = address[0].lga
    this.CityName = address[0].city
    console.log(this.stateName)
    console.log(this.LgaName)
    console.log(this.CityName)
  })
}

getHashIndividual(){
  // debugger
  let hashkey = environment.SecretKey
    let clientCode = environment.ClientCode;
    this.Address = this.AddressModel.address1+ " ," + this.CityName + " ," + this.LgaName + ' ,' + this.stateName
  let Hash = hashkey + clientCode + this.BasicModel.lastName + this.BasicModel.firstName + this.BasicModel.email + this.BasicModel.phone + this.Address;
  console.log(Hash)
  console.log(this.Address)
  const Hvaluing = new Md5();
  const Hashvalued = Hvaluing.appendStr(Hash).end()
  console.log(Hashvalued);
  if (typeof Hashvalued === 'string') {
  // const  Hashvalue = Hashvalued.toUpperCase();
  this.LolHashKey = Hashvalued.toUpperCase();
  console.log(this.LolHashKey);
}
console.log(this.LolHashKey);

}

getHashOrganization(){
  console.log("get organisationid as 2nd one")
  console.log(this.CityName)
  // debugger
  let hashkey = environment.SecretKey
    let clientName = environment.ClientCode;
    this.Address = this.AddressModel.address1+ " ,"+ this.CityName + " ," + this.LgaName + ' ,' + this.stateName;
  let Hash = hashkey + clientName + '' + this.BasicModel.organisationname + this.BasicModel.email + this.BasicModel.phone + this.Address
console.log(this.AddressModel.address1+ " ,"+ this.CityName + " ," + this.LgaName + ' ,' + this.stateName)
  console.log(Hash)
  console.log(this.Address)
  const Hvaluing = new Md5();
  const Hashvalued = Hvaluing.appendStr(Hash).end()
  console.log(Hashvalued);
  if (typeof Hashvalued === 'string') {
  this.LolHashKey = Hashvalued.toUpperCase();
  console.log(this.LolHashKey);
}
console.log(this.LolHashKey);
}
  generatePayerId(){
  console.log(this.BasicModel.UserType)
    if(this.BasicModel.UserType === "organisation"){
      this.getAddressDetails()
    setTimeout(() => {
      this.getOrganizationId()
    }, 1000);
    console.log("organisation")    
    }
    else{
      this.getAddressDetails()
setTimeout(() => {
  this.getIndividualId()
}, 1000);
      console.log("individual")  
    }
  }

  getIndividualId(){
    console.log(this.title)
this.getHashIndividual()
    this.Address = this.AddressModel.address1+ " ," + this.CityName + " ," + this.LgaName + ' ,' + this.stateName
    let DOB=new Date(this.date_Of_Birth);
    let latest_date = this.datepipe.transform(DOB, 'yyyy-MM-ddTHH:mm:ss');
    let hashkey = environment.SecretKey
    let clientCode = environment.ClientCode;
    const UserData ={
      title :this.BasicModel.title,
      lastName:this.BasicModel.lastName,
      firstName: this.BasicModel.firstName,
      otherName:this.BasicModel.middleName,
      email:this.BasicModel.email,
      address:this.Address,
      phone: this.BasicModel.phone,
      birthDate:latest_date,
      bvnNumber:this.PersonalModel.BVN,
      sex:this.PersonalModel.gender,
      maritalStatus:this.PersonalModel.MaritalStatus,
      clientName :clientCode,
      hash:this.LolHashKey
      }
        this.authService.CreateIndividualId(UserData).subscribe((result:any)=>{
          console.log(result)
          if(result.response.status ==="Failed"){
            this.loadSpin = true;
            this.toastr.warning(result.response.message,'',{
              timeOut: 5000,
            })
          }
        else{
          this.toastr.success('PayerId Generated Successfully','',{
            timeOut: 5000,
          })
          this.PersonalModel.PayerID = result.payerId
        }
        })
  }
 
  getOrganizationId(){
    // debugger
    console.log( this.BasicModel.organisationname)
   
    console.log(this.CityName)
    this.getHashOrganization()
    this.Address = this.AddressModel.address1+ " ,"+ this.CityName + " ," + this.LgaName + ' ,' + this.stateName;
    console.log(this.Address)
    let clientName=environment.ClientCode;
    const OrganizData ={
      name:this.BasicModel.organisationname,
      email:this.BasicModel.email,
      address: this.Address,
      phone:this.BasicModel.phone,
      clientName :clientName,
      hash: this.LolHashKey
    }
    // return false
    this.authService.CreteOrgnaizId(OrganizData).subscribe((result:any)=>{
    console.log(result)
    if(result.payerId === null){
    this.loadSpin = true;
      this.toastr.warning(result.response.message,result.response.status,{
        timeOut: 5000,
      })
    }
    else{
      this.toastr.success('PayerId Generated Successfully','',{
        timeOut: 5000,
      })
      this.PersonalModel.PayerID = result.payerId
    }
    this.loadSpin = false;
    })
}


}
