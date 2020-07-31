import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { LoadingService } from './services/loading.service';
import { InitialTestService } from './services/initial-test.service';

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
    public _authService:AuthService,
    public _usersService:UsersService,
    public _loadingService: LoadingService,
    public _initialTest:InitialTestService,

  ) {
      this.initializeApp();
      this.getUserDetail();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString("#00000000");
      }      
      this.splashScreen.hide();
    });
  }

  getUserDetail(){
    if (this._authService.isAuthenticated()){
        let user = this._authService.getCurrentUser();
        this._loadingService.showLoader('Cargando informacion del usuario')
        this._usersService.getUserDetail(user.user).subscribe((data)=>{
          if (data){
            console.log(data);
            if (!data.error){
              this._loadingService.hideLoader();
              this._authService.saveUserPersonalInfo(data)
              this._authService.setCompletedInitialTest(data.tested);
            }else{ 
              this._loadingService.hideLoader();
            }
          }else{
            this._loadingService.hideLoader();
          }
        })
    }
  }

}
