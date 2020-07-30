import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GardenPage } from './garden.page';

const routes: Routes = [
  {
    path: '',
    component: GardenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GardenPageRoutingModule {}
