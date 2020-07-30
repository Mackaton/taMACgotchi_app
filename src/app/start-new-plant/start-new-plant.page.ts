import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { PlantsService } from '../services/plants.service';
import { LoadingService } from '../services/loading.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-new-plant',
  templateUrl: './start-new-plant.page.html',
  styleUrls: ['./start-new-plant.page.scss'],
})
export class StartNewPlantPage implements OnInit {

  public plantForm:FormGroup;
  createPlantStep:number = 0;
  public user;
  public actualPlant:any;


  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public _authService:AuthService,
    public _plantsService:PlantsService,
    public _loadingService:LoadingService,
    public _usersService:UsersService,
  ) { }

  ngOnInit() {
    if (this._authService.getUserPersonalInfo().user){
      this.user = this._authService.getUserPersonalInfo().user;
    }else if (this._authService.getUserPersonalInfo()){
      this.user = this._authService.getUserPersonalInfo();
    }
    this.plantForm = this.formBuilder.group({
      idUser: new FormControl(this.user._id,Validators.required),
      name: new FormControl('',Validators.required),
    })
  }

  continueToStep(step:number){
    this.createPlantStep = step;
  }

  createPlant(){
    console.log(this.plantForm.value)
    this._loadingService.presentLoading('Creando planta').then((loading)=>{
      this._plantsService.createPlant(this.plantForm.value).subscribe(data=>{
        if (data && !data.error){
          console.log(data);
          this._usersService.getUserDetail(this.user).subscribe(data=>{
            this._authService.saveUserPersonalInfo(data);
            this.actualPlant = data.urlPicture
            this._loadingService.stopLoading(loading)
            this.continueToStep(1);
          })
        }else{
          console.log(data);
          this._loadingService.stopLoading(loading)
        }
      })
    })
  }

  goToMain(){
    this.router.navigate(['']);
  }



}
