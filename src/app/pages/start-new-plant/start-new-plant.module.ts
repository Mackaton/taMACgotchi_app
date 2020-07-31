import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartNewPlantPageRoutingModule } from './start-new-plant-routing.module';

import { StartNewPlantPage } from './start-new-plant.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    StartNewPlantPageRoutingModule,
    SharedModule,
  ],
  declarations: [StartNewPlantPage]
})
export class StartNewPlantPageModule {}
