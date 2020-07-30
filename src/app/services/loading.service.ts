import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class LoadingService {

    isLogged:any = false;

    constructor(
        public http: HttpClient,
        public router: Router,
        public loadingController: LoadingController,
    ) {}

    async presentLoading(message:string) {
        return new Promise(async (resolve,reject)=>{
            const loading = await this.loadingController.create({
                cssClass: 'my-custom-class',
                message: message,
                duration: 2000
              });
              loading.present().then(()=>{
                  resolve(loading)
              });
        })
    }

    async stopLoading(loading:any){
        const { role, data } = await loading.onDidDismiss();
    }
    
    

}
