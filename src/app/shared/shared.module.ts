import { NgModule } from '@angular/core';


/*Components */

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    //IonicModule
],
declarations: [
    HeaderComponent, 
    MenuComponent,   
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
  ],
})
export class SharedModule {}
