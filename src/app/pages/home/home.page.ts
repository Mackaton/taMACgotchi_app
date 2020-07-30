import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user:any;

  constructor(
    public _authService:AuthService,
  ) { }

  ngOnInit() {
    this.user = this._authService.getTokenAuthenticated();
  }

}
