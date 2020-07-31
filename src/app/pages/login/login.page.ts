import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { UsersService } from 'src/app/services/users.service';
import { InitialTestService } from 'src/app/services/initial-test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userForm:FormGroup
  loginError:string;
  user:any;
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public _authService: AuthService,
    public _loadingService: LoadingService,
    public _usersService: UsersService,
    public _initialTest : InitialTestService,
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  async login(){
    this._loadingService.showLoader('Login');
      this._authService.login(this.userForm).then((data:any)=>{
        if (data){
          if (data.additionalUserInfo){
            localStorage.setItem('currentUser',JSON.stringify(data));
            this.user = data.user
            this.getUserProfile();
          }else{
            this.loginError = data.message
            this._loadingService.hideLoader();
          }
        }else{
          this._loadingService.hideLoader();
        }
      })
  }

  getUserProfile(){
    this._usersService.getUserDetail(this.user).subscribe(data=>{
      console.log(data);
      if (data && !data.error){
        this._authService.saveUserPersonalInfo(data)
        this._authService.setCompletedInitialTest(data.tested)
        this._loadingService.hideLoader();
        this.router.navigate(['']);
      }else{
        this._loadingService.hideLoader();
      }
    })
  }

}
