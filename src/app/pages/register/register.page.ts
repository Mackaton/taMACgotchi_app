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
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public _authService: AuthService,
  ){}

  async ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  async register(){
      this._authService.register(this.userForm).then((data:any)=>{
        if (data){
          if (data.additionalUserInfo){
            localStorage.setItem('currentUser', JSON.stringify(data));
            this.router.navigate(['']);
          }else{
            this.registerError = data.message
          }
        }
      })
  }
}