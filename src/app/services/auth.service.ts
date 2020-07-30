import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { ToastService } from './toast.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    isLogged:any = false;

    constructor(
        public http: HttpClient,
        public router: Router,
        public _authFireAuth:AngularFireAuth,
        public _toastService:ToastService,
        ) {
            _authFireAuth.authState.subscribe(user=>{
                this.isLogged = user
            })
        }


    isAuthenticated(){
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser){
            return true
        }
        else{
            return false
        }

    }

    saveTokenAuthenticated(token){
        localStorage.setItem('currentUser', JSON.stringify(token));
    }

    getTokenAuthenticated(){
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    saveUserPersonalInfo(user){
        localStorage.setItem('userPersonalInfo', JSON.stringify(user));
    }

    getUserPersonalInfo(){
        return JSON.parse(localStorage.getItem('userPersonalInfo'));
    }

    async login(user:any){
        return await this._authFireAuth.signInWithEmailAndPassword(user.get('email').value,user.get('password').value)
        .catch(err=>{
            this._toastService.presentToast(err)
        });

    }

    async register(user:FormGroup){
        return await this._authFireAuth.createUserWithEmailAndPassword(user.get('email').value,user.get('password').value)
        .catch(err=>{
            this._toastService.presentToast(err)
        })
    }

    isCompletedInitialTest(){
        var isCompletedInitialTest = JSON.parse(localStorage.getItem('isCompletedInitialTest'));
        return isCompletedInitialTest
    }

    setCompletedInitialTest(isCompleted:boolean){
        localStorage.setItem('isCompletedInitialTest', JSON.stringify(isCompleted));
    }


    


    getCurrentUser() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return currentUser;
    }

    logout(){
        this.router.navigate(['register']);
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userPersonalInfo');
        if (localStorage.getItem('isCompletedInitialTest')){
            localStorage.removeItem('isCompletedInitialTest');
        }

    }
}
