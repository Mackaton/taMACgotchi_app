import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchivementsPageRoutingModule } from './achivements-routing.module';

import { AchivementsPage } from './achivements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchivementsPageRoutingModule
  ],
  declarations: [AchivementsPage]
})
export class AchivementsPageModule {}
