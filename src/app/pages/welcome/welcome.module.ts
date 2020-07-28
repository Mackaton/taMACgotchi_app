import { NgModule } from '@angular/core';


/*Components */

import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
      CommonModule
],
declarations: [
    WelcomeComponent,    
  ],
  exports: [
    WelcomeComponent,
    CommonModule,
  ],
})
export class WelcomeModule {}
