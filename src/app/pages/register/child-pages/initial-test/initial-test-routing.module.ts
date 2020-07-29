import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialTestPage } from './initial-test.page';

const routes: Routes = [
  {
    path: '',
    component: InitialTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitialTestPageRoutingModule {}
