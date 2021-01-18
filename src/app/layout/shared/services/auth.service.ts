import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from "@env";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
apiUrl= environment.apiUrl
  constructor(private http:HttpClient) { }

postLoginData(data:any){
  // return this.http.post(this.apiUrl + )
  console.log(data)
}
}
