import { NgModule } from '@angular/core';


/*Components */

import { RegisterPage } from './register.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
],
declarations: [
    RegisterPage,    
  ],
  exports: [
    RegisterPage,
  ],
})
export class RegisterModule {}
