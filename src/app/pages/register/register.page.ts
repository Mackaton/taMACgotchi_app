import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {

  userForm:FormGroup
  registerError:string;
  registerStep:number = 0;
  request: any;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public _authService: AuthService,
    public _loadingService: LoadingService,
    public _usersService: UsersService,
  ){}

  async ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(8)]),
      confirm_email: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required),
      first_name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      username: new FormControl('',Validators.required),
    })
  }

  continueToStep(step:number){
    this.registerStep = step;
  }

  async register(){
    this._loadingService.presentLoading('Registrando').then((loading)=>{
      this._authService.register(this.userForm).then((data:any)=>{
        if (data){
          if (data.additionalUserInfo){
            this._authService.saveTokenAuthenticated(data);
            this._authService.saveUserPersonalInfo(this.userForm.value)
            this.buildRequest();
            this._usersService.createUser(this.request).subscribe(data=>{
              if (data && !data.error){
                console.log(data);
                this._loadingService.stopLoading(loading)
              }else{
                this._loadingService.stopLoading(loading)
              }
            })
            this.registerStep = 0;
            this.userForm.reset();
            this.router.navigate(['initial-test']);
          }else{
            this.registerError = data.message
            this._loadingService.stopLoading(loading)
          }
        }else{
          this._loadingService.stopLoading(loading)
        }
      })
    })
  }

  buildRequest(){
    
    let token:any = this._authService.getTokenAuthenticated();
    console.log(token)
    let provider:string = token.additionalUserInfo.providerId
    this.request = {
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      provider: provider,
      name: this.userForm.value.first_name,
      lastname: this.userForm.value.lastname,
      birthday: this.userForm.value.birthdate,
      gender: this.userForm.value.gender,
      picture: null
    }
    console.log(this.request)
  }
}