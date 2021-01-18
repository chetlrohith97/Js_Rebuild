import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "@shared/services/index";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 userName!: string; 
 password!: string;
 remember_me = "remember_me";
 
  constructor(
    private router: Router
    // private authService: AuthService
    ) { }

  ngOnInit(): void {
  }
  loginUser(){
    const user ={
      userName: this.userName,
      password: this.password,
      remember_me:this.remember_me
    }
    if(this.userName === undefined || this.password === undefined){
      alert(
        "User name and Password fields are required"
        )
    }
    else{
      alert(JSON.stringify(user))
      console.log(JSON.stringify(user) + "logged to console")
      this.router.navigate(['/registration'])
    }
   

    
  }
}
