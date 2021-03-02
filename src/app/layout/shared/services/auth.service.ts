import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  userData!: any;
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
  let headers = new HttpHeaders()
  headers.append('Access-Control-Allow-Origin' , '*');
  return this.http.post(' https://qpay.ng/PaymentGateway/CreateIndividualPayer',data,{headers:headers}).pipe((data)=>{
    console.log(data)  
  return data             

  })
}

CreteOrgnaizId(data:any){
  console.log(data)
  let headers = new HttpHeaders()
  // debugger
  headers.append('Access-Control-Allow-Origin' , '*');
  return this.http.post(`/api`,data,{headers: headers}).pipe((data)=>{
  console.log(data)  
  return data
  })
}
}
