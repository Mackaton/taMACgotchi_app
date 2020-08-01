import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { PlantsService } from '../../services/plants.service';
import { LoadingService } from '../../services/loading.service';
import { UsersService } from '../../services/users.service';
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
    this.plantForm = this.formBuilder.group({
      idUser: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
    })
    this.user = this._authService.getUserPersonalInfo();
    this._usersService.getUserDetail(this.user).subscribe(data=>{
      this._authService.saveUserPersonalInfo(data);
      this.user = this._authService.getUserPersonalInfo();
      this.plantForm = this.formBuilder.group({
        idUser: new FormControl(this.user._id,Validators.required),
        name: new FormControl('',Validators.required),
      })
    })
  }

  continueToStep(step:number){
    this.createPlantStep = step;
  }

  createPlant(){
    console.log(this.plantForm.value)
      this._loadingService.showLoader('Creando planta')
      this._plantsService.createPlant(this.plantForm.value).subscribe(data=>{
        if (data && !data.error){
          this._loadingService.hideLoader();
          this._usersService.getUserDetail(this.user).subscribe(data1=>{
            console.log(data1);
            this._authService.saveUserPersonalInfo(data1);
            this.actualPlant = data1.urlPicture
            this.continueToStep(1);
          })
        }else{
          this._loadingService.hideLoader();
        }
      })
  }

  goToMain(){
    this.router.navigate(['']);
  }



}
