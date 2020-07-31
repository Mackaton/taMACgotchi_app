import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseService } from '../app.base.service';
import { Observable } from 'rxjs';
import { ToastService } from './toast.service';



@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService{

    constructor(http:HttpClient,toastService:ToastService,) {
        super(http,toastService)
    }

    createUser(user:any):Observable<any>{
        return this.postBase(user,'/create/users/');
    }

    getUserDetail(user:any):Observable<any>{
        return this.getBase(`/users/${user.email}`)
    }

}
