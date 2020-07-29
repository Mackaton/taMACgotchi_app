import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class InitialTestService {

    testQuestions:any=[
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            type: 'text',
            options: null,
            name: 'first_question'
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            type: 'number',
            options: null,
            name: 'second_question'
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            type: 'select',
            name: 'third_question',
            options: [
                {
                    text: 'Option 1',
                    value: 1
                },
                {
                    text: 'Option 2',
                    value: 2
                }
            ]
        }
        
    ]

    constructor(){}

    getTestQuestions(){
        return this.testQuestions
    }

}