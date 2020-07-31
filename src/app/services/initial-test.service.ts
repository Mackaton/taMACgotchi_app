import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseService } from '../app.base.service';
import { Observable } from 'rxjs';
import { ToastService } from './toast.service';



@Injectable({
  providedIn: 'root'
})
export class InitialTestService extends BaseService{

    constructor(http:HttpClient,toastService:ToastService,) {
        super(http,toastService)
    }


    getAllTests():Observable<any>{
        return this.getBase('/tests/');
    }

    getTestDetailByUser(user):Observable<any>{
        return this.getBase(`/tests/${user.username}`)
    }

    getAllQuestions():Observable<any>{
        return this.getBase('/questions/')
    }

    createTest(test):Observable<any>{
        return this.postBase(test,`/create/tests`)
    }
}
