import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseService } from '../app.base.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MedalsService extends BaseService{

    constructor(http:HttpClient) {
        super(http)
    }

    getAllMedals():Observable<any>{
        return this.getBase('/medals/');
    }

    getMedalDetail(medal):Observable<any>{
        return this.getBase(`/medals/${medal.id}`)
    }

}
