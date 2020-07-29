import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { InitialTestService } from 'src/app/services/initial-test.service';

@Component({
  selector: 'app-initial-test',
  templateUrl: './initial-test.page.html',
  styleUrls: ['./initial-test.page.scss'],
})
export class InitialTestPage implements OnInit {
  testForm:FormGroup
  registerError:string;
  testStep:number = 0;
  testQuestions:any;
  numberTotalSteps:number;
  pagesSteps:Array<any> = [];

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public _authService: AuthService,
    public _initialTestService:InitialTestService,
  ) { }

  ngOnInit() {
    this.testForm = this.formBuilder.group({
      questions: new FormControl('',Validators.required),
    });
    this.testQuestions = this._initialTestService.getTestQuestions();
    this.preparePagesSteps();
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

  sendTest(){
    this._authService.setCompletedInitialTest();
    this.testStep = 0;
    this.testForm.reset();
    this.goToStep(3)
  }

  goToMain(){
    this.router.navigate([''])
  }




  
}
