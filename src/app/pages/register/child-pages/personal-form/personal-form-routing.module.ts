import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalFormPage } from './personal-form.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalFormPageRoutingModule {}
