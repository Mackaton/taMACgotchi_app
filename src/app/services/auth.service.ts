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

    saveUserPersonalInfo(user){
        localStorage.setItem('userPersonalInfo', JSON.stringify(user));
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
        var userPersonalInfo = JSON.parse(localStorage.getItem('userPersonalInfo'));
        if (userPersonalInfo.completedInitialTest){
            return true
        }
        else{
            return false
        }
    }

    setCompletedInitialTest(){
        var userPersonalInfo = JSON.parse(localStorage.getItem('userPersonalInfo'));
        userPersonalInfo.completedInitialTest = true;
        localStorage.setItem('userPersonalInfo', JSON.stringify(userPersonalInfo));
    }


    


    getCurrentUser() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log(currentUser)
      return currentUser;
    }

    logout(){
        this.router.navigate(['register']);
        localStorage.removeItem('currentUser');
    }
}
