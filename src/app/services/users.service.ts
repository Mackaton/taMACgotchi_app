import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseService } from '../app.base.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService{

    constructor(http:HttpClient) {
        super(http)
    }

    createUser(user:any):Observable<any>{
        return this.addBase(user,'/create/users/');
    }

}
