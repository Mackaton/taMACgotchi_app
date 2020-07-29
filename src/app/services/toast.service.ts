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
export class ToastService {

    isLogged:any = false;

    constructor(
        public http: HttpClient,
        public router: Router,
        public toastController:ToastController,
    ) {}

    async presentToast(message:string) {
        const toast = await this.toastController.create({
          message: message,
          duration: 2000,
          position: 'top',
        });
        toast.present();
    }
}
