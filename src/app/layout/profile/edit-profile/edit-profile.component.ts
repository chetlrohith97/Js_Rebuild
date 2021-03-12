import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/index';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import {Md5} from 'ts-md5/dist/md5';
import { environment } from '@env';
import { escapeSelector } from 'jquery';
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
  date_Of_Birth: any;
  State = 0;
  LGA = 0;
  City = 0;
  gender!: string;
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
    this.authService.GetStatefields().subscribe((data:any)=>
    {
      this.States =  data;
      this.sec_States =data
      console.log(this.sec_States)
      // let stationNewName = Stations.STATIONS.find((s) => s.stationName === myStation);

    //   this.stateName = data.find( ({ state_ID }:any) => state_ID === this.State )?.state_Name;
      
    //  console.log( this.stateName)
  //     for(let i=0; i<=this.States.length;i++){ //for getting an State_Name
  //       if(this.State == this.States[i]?.state_ID){
  //         this.stateName =this.States[i].state_Name
  //         // this.stateName= stateName
  //         console.log(this.stateName)
  //         console.log("success")
  //       }
  //  }    
  // //  setTimeout(() => {
  // //    alert("hi")
  
  //   // console.log(this.stateName) 
  //   if(this.stateName === undefined){
  //   console.log('Nothing')
  //   }
  //   else if (this.stateName === this.stateName ){
  //   localStorage.setItem('stateName', this.stateName);
  //   console.log("their")
  //   }
  //  }, 2000);
  //  setTimeout(() => {
  //   //  alert("hi")
  //   this.getHashIndividual()
  //   this.getHashOrganization()
  //  }, 2000);

    // this.LolLgaName = localStorage.getItem('LgaName')
    // this.LolCityName = localStorage.getItem('CityName')
    console.log( this.stateName)
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
  this.authService.GetLgaFields(this.state).subscribe((data:any)=>{
    this.Lgas = data
    console.log(this.Lgas)
    this.getLga(this.LGA);
    console.log(data)


  // if(this.state){
  //   this.LgaName = data.find( ({ localGovtAreaId }:any) => localGovtAreaId === this.LGA )?.localGovtAreaName;
      
  //   console.log( this.LgaName)
  // }
  //   for(let i=0; i<=this.Lgas.length;i++){ //for getting an State_Name
  //     if(this.LGA == this.Lgas[i]?.localGovtAreaId){
  //       this.LgaName =this.Lgas[i].localGovtAreaName
  //       console.log(this.LgaName)
  //       console.log("success")
  //     }
  //   }
  // //  setTimeout(() => {
  //   if(this.LgaName === undefined){
  //     console.log('Nothing')
  //     }
  //     else if (this.LgaName){
  //     localStorage.setItem('LgaName', this.LgaName);
  //     console.log("their")
  //     }
    // console.log(this.LgaName) 
    // localStorage.setItem('LgaName', this.LgaName);
  //  }, 2000);
 })

}
getLga(event :any){
  this.Lga = event
  console.log(this.state)
  console.log(event)
  this.authService.GetCityFields(this.Lga).subscribe((data:any)=>{
    this.Citys = data
    console.log(this.Citys)


  //  if(this.Lga){
  //   this.CityName = data.find( ({ city_ID }:any) => city_ID === this.City )?.city_Name;
      
  //   console.log( this.CityName)
  //  }
    // for(let i=0; i<=this.Citys.length;i++){ //for getting an State_Name
    //   if(this.City == this.Citys[i]?.city_ID){
    //     this.CityName =this.Citys[i].city_Name
    //     console.log(this.CityName)
    //     console.log("success")
    //   }
    // }
    // if(this.CityName === undefined){
    //   console.log('Nothing')
    //   }
    //   else if (this.CityName){
    //     console.log(this.CityName)
    //   localStorage.setItem('CityName', this.CityName);
    //   console.log("their")
    //   }
    //   console.log(this.CityName) 
    // localStorage.setItem('CityName', this.CityName);
    // $(window).on('load',  () => { alert("Window Loaded"); 
    // localStorage.setItem('CityName', this.CityName)
    // console.log(localStorage.setItem('CityName', this.CityName))});
    // }, 2000);
  })

}

getSec_state(event:any){
  this.sec_State = event
  console.log(event)
  this.authService.GetLgaFields(this.sec_State).subscribe((data)=>{
    this.SecLgas = data
    // console.log(this.LgaObject)
    this.getsec_LGA(this.sec_LGA);

 })
}
getsec_LGA(event:any){
  this.sec_LGA = event
  // console.log(event)
  this.authService.GetCityFields(this.sec_LGA).subscribe((data)=>{
    this.SecCitys = data
    // console.log(this.CityObject)

  // setTimeout(() => {
      console.log(this.sec_City) 
    // localStorage.setItem('CityName', this.CityName);
    // }, 2000);
  })
}
  editProfile() {
   

    this.authService.EditProfile(this.user_ID || '').subscribe((data) => {
      this.UserType = Object.values(data)[0]?.userType
      console.log(data)
      // console.log( Object.values(data)[0])
     var MMddyyyy = this.datepipe.transform(new Date(Object.values(data)[0]?.date_Of_Birth),"yyyy-MM-dd");
     console.log(MMddyyyy); //output - 14-02-2019
      // console.log(Object.values(data)[0]?.date_Of_Birth);
      this.User_Name = Object.values(data)[0]?.user_Name
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
      // this.date_Of_Birth = Object.values(data)[0]?.date_Of_Birth
      this.date_Of_Birth = MMddyyyy

      this.address1 = Object.values(data)[0]?.address_1;
      this.address2 = Object.values(data)[0]?.address_2;
      this.Securityquestion = Object.values(data)[0]?.securityQuestionID;
      this.Securityanswer = Object.values(data)[0]?.securityAnswer;
      this.gender = Object.values(data)[0]?.sex;
      this.MaritalStatus = Object.values(data)[0]?.marital_Status;
      this.BVN = Object.values(data)[0]?.bank_Verification_Number;
      this.PayerID = Object.values(data)[0]?.payerID;
      this.sec_State= Object.values(data)[0]?.sec_State;
      this.sec_LGA= Object.values(data)[0]?.sec_LGA;
      this.sec_City= Object.values(data)[0]?.sec_City;
      this.isAddress_Same= Object.values(data)[0]?.isAddress_Same;
      this.national_ID= Object.values(data)[0]?.national_ID;
      this.organisationname = Object.values(data)[0]?.organization_Name;
      this.getState(this.State);
      this.getSec_state(this.sec_State)
      
    
    });
  }
  showtab(){
    console.log("INNN");

    if(true){
      $("#contact-tab").trigger("click");
    }else{

    }
 
  }
  updateProfile(v: object, myForm1:any,nextTab:any) {
    console.log("test" +nextTab)
    if(!myForm1.form.valid){
         console.log("Error in my code")
    }
    else if(myForm1.form.valid){
      console.log("success")
   
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
      Bank_Verification_Number :this.BVN,
      National_ID:this.national_ID,
      Sec_State:this.sec_State,
      Sec_LGA:this.sec_LGA,
      Sec_City:this.sec_City,
      IsAddress_Same:this.isAddress_Same,
      organization_Name:this.organisationname

    };
        this.authService.UpdateProfile(this.Profile_ID,ProfileData).subscribe((data:any)=>
        {
        console.log(ProfileData.PayerID)
        // related to the payerId verification
          // if(ProfileData.PayerID !== (null || undefined)){
          //   this.authService.VerifyPayerID(ProfileData.PayerID).subscribe((result:any)=>{
          //     if(result.response.status === "Failed"){
          //       this.toastr.warning(result.response.message,result.result.status,{
          //         timeOut:3000
          //       })
          //     }
          //   })
          // }
          // else{
            console.log(ProfileData)
            console.log("success");
            console.log(data)
            this.toastr.success("Edit profile update successfully");
            $("#"+nextTab).trigger("click");
          // }
       
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
    this.Address = this.address1+ " ," + this.CityName + " ," + this.LgaName + ' ,' + this.stateName
  let Hash = hashkey + clientCode + this.lastName + this.firstName + this.email + this.phone + this.Address;
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
    this.Address = this.address1+ " ,"+ this.CityName + " ," + this.LgaName + ' ,' + this.stateName;
  let Hash = hashkey + clientName + '' + this.organisationname + this.email + this.phone + this.Address
console.log(this.address1+ " ,"+ this.CityName + " ," + this.LgaName + ' ,' + this.stateName)
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
  console.log(this.UserType)
    if(this.UserType === "organisation"){
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
    this.Address = this.address1+ " ," + this.CityName + " ," + this.LgaName + ' ,' + this.stateName
    let DOB=new Date(this.date_Of_Birth);
    let latest_date = this.datepipe.transform(DOB, 'yyyy-MM-ddTHH:mm:ss');
    let hashkey = environment.SecretKey
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
          this.PayerID = result.payerId
        }
        })
  }
 
  getOrganizationId(){
    // debugger
    console.log( this.organisationname)
   
    console.log(this.CityName)
    this.getHashOrganization()
    this.Address = this.address1+ " ,"+ this.CityName + " ," + this.LgaName + ' ,' + this.stateName;
    console.log(this.Address)
    let clientName=environment.ClientCode;
    const OrganizData ={
      name:this.organisationname,
      email:this.email,
      address: this.Address,
      phone:this.phone,
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
      this.PayerID = result.payerId
    }
    this.loadSpin = false;
    })
}


}
