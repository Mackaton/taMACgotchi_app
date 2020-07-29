import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userForm:FormGroup
  loginError:string;
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public _authService: AuthService,
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  async login(){
    this._authService.login(this.userForm).then((data:any)=>{
      if (data){
        if (data.additionalUserInfo){
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.router.navigate(['']);
        }else{
          this.loginError = data.message
        }
      }
    })
}

}