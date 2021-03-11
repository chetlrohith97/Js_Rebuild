import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lc-dashboard',
  templateUrl: './lc-dashboard.component.html',
  styleUrls: ['./lc-dashboard.component.css']
})
export class LcDashboardComponent implements OnInit {
  userData = JSON.parse(localStorage.getItem('user_data') || '[]');
  userName:any
  constructor(private authService: AuthService,
    private rotuer: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userName = this.userData[0]?.userName
    console.log(this.userName)
  }
  logout() {
    localStorage.removeItem(this.userData);
    this.authService.logout();
    this.rotuer.navigate(['/home']);
    this.toastr.success('Your Are Logged out');
  }
}
