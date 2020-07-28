import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome-routing.module').then(m => m.WelcomeRoutingModule),
  },
  {
    path: '',
    loadChildren: () => import('./shared/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuardService] 

  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
