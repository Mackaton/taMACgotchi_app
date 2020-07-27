import { NgModule } from '@angular/core';


/*Components */

import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
      CommonModule
],
declarations: [
    HeaderComponent,    
  ],
  exports: [
    HeaderComponent,
    CommonModule,
  ],
})
export class SharedModule {}
