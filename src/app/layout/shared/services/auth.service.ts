import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from "@env";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
apiUrl= environment.apiUrl
  constructor(private http:HttpClient) { }

// StoreUserData(){
//   localStorage.setItem('user_data',JSON.stringify([]))
// }

Loginuser(data:any){
  console.log("login" + '11111');
  return this.http.post(`${this.apiUrl}/api/user/LoginUser`,data).pipe(data=>{
    console.log(data)
    return data
  })
}
RegisterData(data:any){
  // console.log(data)
  // console.log("22222222")
  return this.http.post(`${this.apiUrl}/api/User/RegUser`,data).pipe(data => {
    return data
  })
}
}
