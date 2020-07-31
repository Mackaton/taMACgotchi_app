import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { WatsonService } from './watson.service';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    watsonInstance:any;
    constructor(public watsonService:WatsonService){}
  canDeactivate(component: CanComponentDeactivate) {
    this.watsonInstance =  this.watsonService.getInstance();
    if (this.watsonInstance){
        this.watsonInstance.destroy();
    }
    return true
  }
}