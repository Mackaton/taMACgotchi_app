import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { WatsonService } from 'src/app/services/watson.service';

declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user:any;
  public watson:any;
  constructor(
    public _authService:AuthService,
    public _watsonService:WatsonService,
  ) { }

  ngOnInit() {
    this.user = this._authService.getUserPersonalInfo();

    //Watson Assistance
    let watson_ngOn
    var retriveInstance = function(instance){watson_ngOn = instance}
    window.watsonAssistantChatOptions = {
      integrationID: "bbcc33de-33ab-4c46-8dac-49840a25ca71", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "89f5b526-f6cd-46cd-a3f1-ece45ac44fe1", // The ID of your service instance.
      onLoad: function(instance) { retriveInstance(instance); instance.render();}
    };
    
    setTimeout(function(){
      const t=document.createElement('script');
      t.setAttribute("id","watsonScript")
      t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
      document.head.appendChild(t);
    });
    setTimeout(()=>{
      this.watson = watson_ngOn;
      console.log(this.watson)
      this._watsonService.setInstance(this.watson)
    },4000)
  }


}
