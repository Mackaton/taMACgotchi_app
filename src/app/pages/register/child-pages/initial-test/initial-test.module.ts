import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitialTestPageRoutingModule } from './initial-test-routing.module';

import { InitialTestPage } from './initial-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InitialTestPageRoutingModule,
  ],
  declarations: [InitialTestPage],
  exports: [InitialTestPage]
})
export class InitialTestPageModule {}
