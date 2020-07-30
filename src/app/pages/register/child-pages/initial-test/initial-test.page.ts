import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { InitialTestService } from 'src/app/services/initial-test.service';

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
  questionForm:FormGroup

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public _authService: AuthService,
    public _initialTestService:InitialTestService,
  ) { }

  ngOnInit() {
    this.questionsArray = new FormArray([]);
    this.getQuestions();
  }

  goToStep(step:number){
    this.testStep = step;
    console.log(this.testStep);
  }

  preparePagesSteps(){
    for (let i = 0;i<this.testQuestions.length;i=i+2){
      this.pagesSteps.push({
        first_question: this.testQuestions[i],
        second_question: this.testQuestions[i+1]
      })
    }
    console.log(this.pagesSteps)
  }

  getQuestions(){
    this._initialTestService.getAllQuestions().subscribe(data=>{
      console.log(data);
      this.testQuestions = data;
      this.testQuestions.forEach(question => {
        this.questionsArray.push(this.formBuilder.group({
          id_question: new FormControl(question._id),
          value: new FormControl(''),
        }))
      });
      console.log(this.questionsArray)
      console.log(this.questionForm)
    })
  }

  sendTest(){
    this.questionForm =  this.formBuilder.group({
      user: new FormControl(this._authService.getUserPersonalInfo()._id),
      date: new FormControl(new Date()),
      results: new FormControl(this.questionsArray.value)
    })
    console.log(this.questionForm.value)
    this._initialTestService.createTest(this.questionForm.value).subscribe(data=>{
      console.log(data);
    })
    //this._authService.setCompletedInitialTest();
    this.testStep = 0;
    this.goToStep(3)
  }

  goToMain(){
    this.router.navigate([''])
  }




  
}
