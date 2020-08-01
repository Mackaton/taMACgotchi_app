import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseService } from '../app.base.service';
import { Observable } from 'rxjs';
import { ToastService } from './toast.service';



@Injectable({
  providedIn: 'root'
})
export class PlantsService extends BaseService{

    constructor(http:HttpClient,toastService:ToastService,) {
        super(http,toastService)
    }


    getAllTypesPlants():Observable<any>{
        return this.getBase('/typesplants/');
    }

    getTypesPlantesDetail(typeplant):Observable<any>{
        return this.getBase(`/typesplants/${typeplant.name}`)
    }

    getPlantUser(user):Observable<any>{
        return this.getBase(`/plant/${user.id}`)
    }

    getPlantUserCompleted(user):Observable<any>{
        return this.getBase(`/forest/plant/${user.id}`)
    }

    createPlant(request):Observable<any>{
        return this.postBase(request,`/start/new/plant`)
    }

    freePlant(plant):Observable<any>{
        return this.putBase({forest: true},`/update/plant/${plant._id}`)
    }
}
