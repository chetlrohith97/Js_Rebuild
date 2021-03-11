import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/index';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName!: string;
  password!: string;
  remember_me = 'remember_me';
  data!: any;
  loading = false;
  fieldTextType?: boolean;
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  loginUser(v: any) {
    const user = {
      UserName: this.userName,
      UserPassword: this.password,
      // remember_me:this.remember_me
    };
    // console.log('asdfsadf123');
    this.loading = true;
    // if (user.UserName == '' || user.UserPassword == '') {
    //   this.toastr.error(
    //     'Login Fields Can Not Be Empty Invalid username or password'
    //   );
    // } else {
      this.authService.Loginuser(user).subscribe((result) => {
        this.data = result;
        if (this.data == '') {
          // console.log(this.data);
          this.toastr.error(
            'Login Username or Password Incorrect Invalid Credentials'
          );
          this.loading = false;
        } else {
          this.authService.StoreUserData(result);
          console.log(this.data);
          console.log(this.data[0]?.user_Role_ID);
          if(this.data[0]?.user_Role_ID ===2){
            console.log("role_id")
            setTimeout(() => {
              this.router.navigate(['/home-admin']);
            }, 2000);
          }
          else if(this.data[0]?.user_Role_Name === "LegalCounsel"){
            setTimeout(() => {
              this.router.navigate(['/Legal-dashboard']);
            }, 2000);
            console.log('logged to console');
           }
       else{
        setTimeout(() => {
          this.router.navigate(['/profile']);
        }, 2000);
        console.log('logged to console');
       }
        }
      });
    // }
  }
}
