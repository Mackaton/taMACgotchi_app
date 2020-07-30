import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GardenPageRoutingModule } from './garden-routing.module';

import { GardenPage } from './garden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GardenPageRoutingModule
  ],
  declarations: [GardenPage]
})
export class GardenPageModule {}
