import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  constructor(
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
  ) {
      this.initializeApp();
  }



  

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString("#00000000");
      }      
      this.splashScreen.hide();
    });
  }
}
