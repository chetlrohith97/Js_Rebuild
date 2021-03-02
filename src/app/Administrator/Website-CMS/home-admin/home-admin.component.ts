import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/index';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  userData = JSON.parse(localStorage.getItem('user_data') || '[]');
  user_ID?: string;

  
  constructor(private authService: AuthService, 
    private toastr:ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.user_ID = this.userData[0]?.user_ID;
  }
  logout() {
    localStorage.removeItem(this.userData);
    this.authService.logout();
    this.router.navigate(['/home']);
    this.toastr.success('Your Are Logged out');
  }
}
