import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchivementsPage } from './achivements.page';

const routes: Routes = [
  {
    path: '',
    component: AchivementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchivementsPageRoutingModule {}
