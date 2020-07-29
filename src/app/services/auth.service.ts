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
export class AuthService {

    isLogged:any = false;

    constructor(
        public http: HttpClient,
        public router: Router,
        public _authFireAuth:AngularFireAuth,
        public toastController:ToastController,
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

    async login(user:any){
        try{
            return await this._authFireAuth.signInWithEmailAndPassword(user.email,user.password);
        }catch(error){
            console.log(error)
        }
    }

    async presentToast(message:string) {
        const toast = await this.toastController.create({
          message: message,
          duration: 2000
        });
        toast.present();
      }

    async register(user:FormGroup){
        return await this._authFireAuth.createUserWithEmailAndPassword(user.get('email').value,user.get('password').value)
        .catch(err=>{
            this.presentToast(err)
        })
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
