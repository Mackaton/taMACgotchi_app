import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class WatsonService {

  instance: any;

  constructor(
    public http: HttpClient,
    public router: Router,
    public loadingController: LoadingController,
  ) {
   }

   setInstance(instance){
    this.instance = instance
   }

   getInstance(){
       return this.instance
   }

}