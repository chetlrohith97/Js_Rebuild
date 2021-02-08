import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userData = JSON.parse(localStorage.getItem('user_data') || '[]');
  user_Role_Name!: string;
  User_name!: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user_Role_Name = this.userData[0]?.user_Role_Name;
    this.User_name = this.userData[0]?.userName;
    console.log(this.userData);
    console.log(JSON.parse(localStorage.getItem('user_data') || '[]'));
  }
  logout() {
    localStorage.removeItem(this.userData);
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
