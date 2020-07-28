import { NgModule } from '@angular/core';


/*Components */

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
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
