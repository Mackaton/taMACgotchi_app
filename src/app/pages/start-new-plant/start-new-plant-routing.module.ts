import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartNewPlantPage } from './start-new-plant.page';

const routes: Routes = [
  {
    path: '',
    component: StartNewPlantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartNewPlantPageRoutingModule {}
