import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {

  userForm:FormGroup
  registerError:string;
  registerStep:number = 0;
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public _authService: AuthService,
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
    })
  }

  continueToStep(step:number){
    this.registerStep = step;
  }

  async register(){
      this._authService.register(this.userForm).then((data:any)=>{
        if (data){
          if (data.additionalUserInfo){
            this._authService.saveTokenAuthenticated(data);
            this._authService.saveUserPersonalInfo(this.userForm.value)
            this.registerStep = 0;
            this.userForm.reset();
            this.router.navigate(['initial-test']);
          }else{
            this.registerError = data.message
          }
        }
      })
  }
}