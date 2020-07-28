import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


    constructor(private http: HttpClient, public router: Router) {}

    isAuthenticated(){
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser){
            return true
        }
        else{
            return false
        }

    }

    getCurrentUser() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log(currentUser)
      return currentUser;
    }

    logout(){
        this.router.navigate(['welcome']);
        localStorage.removeItem('currentUser');
    }
}
