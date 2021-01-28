import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/index';

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
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  loginUser(v: any) {
    const user = {
      UserName: this.userName,
      UserPassword: this.password,
      // remember_me:this.remember_me
    };
    console.log('asdfsadf123');
    this.loading = true;
    if (user.UserName == '' || user.UserPassword == '') {
      alert('Login Fields Can Not Be Empty Invalid username or password');
      // this.loading = false;
    } else {
      this.authService.Loginuser(user).subscribe((result) => {
        this.data = result;
        if (this.data == '') {
          console.log(this.data);
          alert('Login Username or Password Incorrect Invalid Credentials');
          this.loading = false;
        } else {
          this.authService.StoreUserData(result);
          console.log(this.data);
          console.log(this.data[0]?.user_ID);
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 2000);
          console.log('logged to console');
        }
      });
    }
  }
}
