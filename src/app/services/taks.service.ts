import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseService } from '../app.base.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TasksService extends BaseService{

    constructor(http:HttpClient) {
        super(http)
    }

    getAllTasks():Observable<any>{
        return this.getBase('/tasks/');
    }

    getTaskDetail(task):Observable<any>{
        return this.getBase(`/tasks/${task.id}`)
    }

}
