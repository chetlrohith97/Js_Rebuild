import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env';
import { identifierModuleUrl } from '@angular/compiler';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  userData!: any;
  changePasswordData!:any;
  constructor(private http: HttpClient) {}

  StoreUserData(User_data: any) {
    localStorage.setItem('user_data', JSON.stringify(User_data));
    this.userData = User_data;
  }

  logout() {
    this.userData = null;
    localStorage.clear();
  }

  Loginuser(data: any) {
    console.log('login' + '11111');
    let headers = new HttpHeaders();
    return this.http
      .post(`${this.apiUrl}/api/User/LoginUser`, data, { headers: headers })
      .pipe((data) => {
        console.log(data);
        return data;
      });
  }
  RegisterData(data: any) {
    console.log(data);
    console.log('22222222');
    let headers = new HttpHeaders();
    return this.http
      .post(`${this.apiUrl}/api/User/RegUser`, data, { headers: headers })
      .pipe((data) => {
        return data;
      });
  }

  EditProfile(id: string) {
    let headers = new HttpHeaders();
    return this.http
      .get(`${this.apiUrl}/api/Edit/GetEditDetails?User_ID=` + id, {
        headers: headers
      })
      .pipe((data) => {
        return data;
      });
  }

  UpdateProfile(id: string,data:object){
    console.log(data)
    let headers = new HttpHeaders();
    return this.http.put(`${this.apiUrl}/api/Edit/UpdateProfile/`,data,{headers: headers}).pipe((data)=>
    {return data})
  }

GetStatefields(){
  // console.log("state fields")
  let headers = new HttpHeaders();
  return this.http.get(`${this.apiUrl}/api/Edit/GetStateDetails`,{headers: headers}).pipe((data)=>
  {
    return data
  })
}

GetLgaFields(id:any){
  // console.log("lga fields")
  let headers = new HttpHeaders();
  return this.http.get(`${this.apiUrl}/api/Edit/GetLGADetails?StateId=`+id,{headers: headers}).pipe((data)=>
  {
    return data
  })
}

GetCityFields(id:any){
  // console.log("lga fields")
  let headers = new HttpHeaders();
  return this.http.get(`${this.apiUrl}/api/Edit/GetCityDetails?LGAId=`+id,{headers: headers}).pipe((data)=>
  {
    return data
  })
}

CreateIndividualId(data:any){
  console.log(data)
  let headers = new HttpHeaders(   )
    // { 
    //  'Content-Type': 'application/json', 
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Credentials': 'true'
    // })
  // headers.append('Access-Control-Allow-Origin' , '*');
  return this.http.post(`/api`,data,{headers:headers}).pipe((data)=>{
    console.log(data)  
  return data             

  })
}

CreteOrgnaizId(data:any){
  console.log(data)
  // debugger
  let headers = new HttpHeaders()
    // { 
//  'Content-Type': 'application/json', 
  // 'Access-Control-Allow-Origin': '*',
  // 'Access-Control-Allow-Credentials': 'true'
// })
  // debugger
  headers.append('Access-Control-Allow-Origin' , '*');
  return this.http.post(`/Ind`,data,{headers: headers}).pipe((data)=>{
  console.log(data)  
  return data
  })
}

VerifyPayerID(id:any){
  console.log(id)
  // debugger
  let headers = new HttpHeaders(
    { 
 'Content-Type': 'application/json', 
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true'
})
  headers.append('Access-Control-Allow-Origin' , '*');
  return this.http.post(`/url/`+ id,{headers: headers}).pipe((data)=>{
  console.log(data)  
  return data
  })
}

GetAddressDetails(User_id:any){
  let headers = new HttpHeaders()
    return  this.http.get(`${this.apiUrl}/api/Edit/GetAddressDetails?User_ID=`+User_id,{headers:headers}).pipe((data)=>{
    console.log(data)  
    return data
    })
}

GetBannerdata(bannerId:any,cmsHomeID:any){
  let headers = new HttpHeaders()
  return this.http.get(`${this.apiUrl}/api/Banner/GetCMSBannerDetails?bannerID=`+ bannerId +`&cmsHomeID=`+cmsHomeID,{headers:headers}).pipe((data)=>{
    // console.log(data)
    return data
  })
}

GetFeaturedata(featureID:any,cmsHomeID:any){
  let headers = new HttpHeaders()
  return this.http.get(`${this.apiUrl}/api/CMSFeatures/GetCMSFeaturesDetails?featureID=`+ featureID +`&cmsHomeID=`+cmsHomeID,{headers:headers}).pipe((data)=>{
    // console.log(data)
    return data
  })
}

GetMissiondata(missionsID:any,cmsHomeID:any){
  let headers = new HttpHeaders()
  return this.http.get(`${this.apiUrl}/api/CMSMissions/GetCMSMissionsDetails?missionsID=`+ missionsID +`&cmsHomeID=`+cmsHomeID,{headers:headers}).pipe((data)=>{
    // console.log(data)
    return data
  })
}

GetAboutdata(aboutJISID:any,cmsHomeID:any){
  console.log(aboutJISID+cmsHomeID)
  let headers = new HttpHeaders()
  return this.http.get(`${this.apiUrl}/api/CMSAboutJIS/GetCMSAboutJISDetails?aboutJISID=`+ aboutJISID +`&cmsHomeID=`+cmsHomeID,{headers:headers}).pipe((data)=>{
    // console.log(data)
    return data
  })
}

PutAboutdata(AboutusObj:any){
  console.log("aboutus data")
  let headers = new HttpHeaders()
  return this.http.put(`${this.apiUrl}/api/CMSAboutJIS/UpdateCMSAboutJISDetails`,AboutusObj,{headers:headers}).pipe((data)=>{
    // console.log(data)
    return data
  })
}

PutFeaturedata(FeatureObj:any){
  console.log("FeatureObj data")
  let headers = new HttpHeaders()
  return this.http.put(`${this.apiUrl}/api/CMSFeatures/UpdateCMSFeaturesDetails`,FeatureObj,{headers:headers}).pipe((data)=>{
    // console.log(data)
    return data
  })
}

PutBannerdata(BannderObj:any){
  console.log("BannderObj data")
  let headers = new HttpHeaders()
  return this.http.put(`${this.apiUrl}/api/Banner/UpdateCMSBannerDetails`,BannderObj,{headers:headers}).pipe((data)=>{
    // console.log(data)
    return data
  })
}
PutMissiondata(MissionObj:any){
  console.log("MissionObj data")
  let headers = new HttpHeaders()
  return this.http.put(`${this.apiUrl}/api/CMSMissions/UpdateCMSMissionsDetails`,MissionObj,{headers:headers}).pipe((data)=>{
    // console.log(data)
    return data
  })
}
StoreTheUserPasswordData(passwordData:any){
  // debugger
  localStorage.setItem('ChangePasswordData', JSON.stringify(passwordData));
  this.changePasswordData = passwordData;

}


ChangePassword(userID:any) {
// debugger
  let headers = new HttpHeaders();
  return this.http.get(`${this.apiUrl}/api/ChangePassword/GetPassword?userID=`+ userID, {
    headers: headers
  })
  .pipe((data) => {
    //debugger
    return data;
  });
}

  UpdatePassword(userData:object){
  // debugger
  console.log(userData);
  // debugger
  let headers = new HttpHeaders();
  return this.http.post(`${this.apiUrl}/api/ChangePassword/UpdatePassword`, userData, {
    headers: headers
  })
  .pipe((data)=>
  {return data})
  }

}
