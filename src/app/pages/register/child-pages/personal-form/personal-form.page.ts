import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.page.html',
  styleUrls: ['./personal-form.page.scss'],
})
export class PersonalFormPage implements OnInit {
  userForm:FormGroup
  registerError:string;
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public _authService: AuthService,
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      first_name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
    })
  }

  async onSubmit(){
    console.log(this.userForm.value)
    localStorage.setItem('userPersonalInfo', JSON.stringify(this.userForm.value));
    this.router.navigate(['personal-form']);
  }

}
