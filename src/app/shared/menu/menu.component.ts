import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  userProfile:any;

  constructor(
    public router: Router,
    private _authService:AuthService,
  ) { }

  ngOnInit() {
    this.getUserProfileInfo();
  }

  logout(){
    this._authService.logout();
  }

  getUserProfileInfo(){
    this.userProfile = this._authService.getUserPersonalInfo();
  }

  rutador(){
        this.router.navigate(['/tasks']);
  }


}
