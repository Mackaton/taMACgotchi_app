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
  numberTotalSteps:number;
  pagesSteps:Array<any> = [];
  questionsArray:FormArray;
  questionForm:FormGroup;
  userProfile:any;

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

  preparePagesSteps(){
    for (let i = 0;i<this.testQuestions.length;i=i+2){
      this.pagesSteps.push({
        first_question: this.testQuestions[i],
        second_question: this.testQuestions[i+1]
      })
    }
  }

  getQuestions(){
    this._initialTestService.getAllQuestions().subscribe(data=>{
      this.testQuestions = data;
      this.testQuestions.forEach(question => {
        this.questionsArray.push(this.formBuilder.group({
          id_question: new FormControl(question._id),
          value: new FormControl(''),
        }))
      });
    })
  }

  sendTest(){
    this.questionForm =  this.formBuilder.group({
      username: new FormControl(this.userProfile.username),
      results: new FormControl(this.questionsArray.value),
      date: new FormControl(new Date()),
    })
    this.questionForm.value.results.forEach(result => {
      result.value = Number(result.value)
    });
    console.log(this.questionForm.value)
    this._loadingService.showLoader('Subiendo test');
    this._initialTestService.createTest(this.questionForm.value).subscribe(data=>{
      console.log(data);
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

  
}
