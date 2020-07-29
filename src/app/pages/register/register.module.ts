import { NgModule } from '@angular/core';


/*Components */

import { RegisterPage } from './register.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { PersonalFormPageModule } from './child-pages/personal-form/personal-form.module';
@NgModule({
  imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RegisterRoutingModule,
      PersonalFormPageModule,
],
declarations: [
    RegisterPage,    
  ],
  exports: [
    RegisterPage,
  ],
})
export class RegisterModule {}
