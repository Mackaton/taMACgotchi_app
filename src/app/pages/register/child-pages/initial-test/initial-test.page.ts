import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { InitialTestService } from 'src/app/services/initial-test.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-initial-test',
  templateUrl: './initial-test.page.html',
  styleUrls: ['./initial-test.page.scss'],
})
export class InitialTestPage implements OnInit {
  registerError:string;
  testStep:number = 0;
  testQuestions:any;
  questionsArray:FormArray;
  questionForm:FormGroup;
  userProfile:any;
  optionIndex:any = [];

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public _authService: AuthService,
    public _initialTestService:InitialTestService,
    public _loadingService: LoadingService,
  ) { }

  ngOnInit() {
    this.questionsArray = new FormArray([]);
    this.getQuestions();
    this.userProfile = this._authService.getUserPersonalInfo();
  }

  goToStep(step:number){
    this.testStep = step;
  }

  getQuestions(){
    this._initialTestService.getAllQuestions().subscribe(data=>{
      this.testQuestions = data;
      this.testQuestions.forEach(question => {
        this.questionsArray.push(this.formBuilder.group({
          id_question: new FormControl(question._id),
          value: new FormControl(''),
          index: new FormControl(''),
        }))
      });
    })
  }

  sendTest(){
    this.setForm();
    this._loadingService.showLoader('Subiendo test');
    this._initialTestService.createTest(this.questionForm.value).subscribe(data=>{
      if (data){
        if (!data.error){
          this._loadingService.hideLoader();
          this._authService.setCompletedInitialTest(true);
          this.router.navigate(['/start-new-plant'])
        }else{
          this._loadingService.hideLoader();
        }
      }else{
        this._loadingService.hideLoader();
      }
    })
  }

  setForm(){
    this.questionForm =  this.formBuilder.group({
      username: new FormControl(this.userProfile.username),
      results: new FormControl(this.questionsArray.value),
    })
    this.questionForm.value.results.forEach(result => {
      let split = result.value.split("&")
      result.value = Number(split[0])
      result.index = Number(split[1])
    });
  }

  
}
