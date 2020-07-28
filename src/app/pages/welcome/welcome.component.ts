import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import AppID from 'ibmcloud-appid-js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  style = 'show';
  buttonDisplay = 'show';
  errorStyle = 'hide';
  errorMessage = '';
  appid = new AppID();
  @Output() changeState = new EventEmitter();

  constructor(
    public router: Router
  ){}

  async ngOnInit() {
    try {
      await this.appid.init({
        clientId: '16c0fa2e-3ffc-4635-b9c6-736921235e0f',
        discoveryEndpoint: 'https://us-south.appid.cloud.ibm.com/oauth/v4/d41fe247-fe1d-4b2f-abd2-014d66abf98d/.well-known/openid-configuration'
      });
    } catch (e) {
      this.errorMessage = e.message;
      this.errorStyle = 'show';
    }
  }

  async onLoginClick() {
    try {
      const tokens = await this.appid.signin();
      localStorage.setItem('currentUser', JSON.stringify(tokens));
      this.router.navigate(['']);

    } catch (e) {
      this.errorMessage = e.message;
      this.errorStyle = 'show';
      this.buttonDisplay = 'show';
    }
  }
}