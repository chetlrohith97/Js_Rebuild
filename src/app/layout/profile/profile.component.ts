import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/index';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userData = JSON.parse(localStorage.getItem('user_data') || '[]');
  user_Role_Name!: string;
  User_name!: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.user_Role_Name = this.userData[0]?.user_Role_Name;
    this.User_name = this.userData[0]?.userName;
    console.log(this.userData);
    console.log(this.userData[0]?.userName);
  }
  logout() {
    localStorage.removeItem(this.userData);
    this.authService.logout();
    this.router.navigate(['/login']);
    this.toastr.success('Your Are Logged out');
  }
}
