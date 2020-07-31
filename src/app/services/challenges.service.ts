import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseService } from '../app.base.service';
import { Observable } from 'rxjs';
import { ToastService } from './toast.service';



@Injectable({
  providedIn: 'root'
})
export class ChallengesService extends BaseService{

    constructor(http:HttpClient,toastService:ToastService,) {
        super(http,toastService)
    }


    getAllChallenges():Observable<any>{
        return this.getBase('/challenges/');
    }

    getChallengeDetail(challenge):Observable<any>{
        return this.getBase(`/challenges/${challenge.id}`)
    }

}
