import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalFormPageRoutingModule } from './personal-form-routing.module';

import { PersonalFormPage } from './personal-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PersonalFormPageRoutingModule
  ],
  declarations: [PersonalFormPage],
  exports: [PersonalFormPage]
})
export class PersonalFormPageModule {}
