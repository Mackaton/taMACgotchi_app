import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseService } from '../app.base.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ChallengesService extends BaseService{

    constructor(http:HttpClient) {
        super(http)
    }

    getAllChallenges():Observable<any>{
        return this.getBase('/challenges/');
    }

    getChallengeDetail(challenge):Observable<any>{
        return this.getBase(`/challenges/${challenge.id}`)
    }

}
