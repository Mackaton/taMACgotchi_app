import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage,
  },
  {
    path: 'initial-test',
    loadChildren: () => import('./child-pages/initial-test/initial-test.module').then( m => m.InitialTestPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}
