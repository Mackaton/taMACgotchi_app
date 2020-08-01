import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLogged: any = false;

  constructor(
    public http: HttpClient,
    public router: Router,
    public loadingController: LoadingController,
  ) { }

  // Show the loader for infinite time
  showLoader(message: string) {
    this.loadingController.create({
      message: message
    }).then((res) => {
      res.present();
    });
  }

  // Hide the loader if already created otherwise return error
  hideLoader() {
    this.loadingController.dismiss().then((res) => {
    }).catch((error) => {
    });
  }



}
