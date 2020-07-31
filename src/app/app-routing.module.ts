import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { CanDeactivateGuard } from './services/deactivate.guard.service';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'garden',
    loadChildren: () => import('./pages/garden/garden.module').then( m => m.GardenPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'tasks',
    loadChildren: () => import('./pages/tasks/tasks.module').then( m => m.TasksPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'achivements',
    loadChildren: () => import('./pages/achivements/achivements.module').then( m => m.AchivementsPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'friends',
    loadChildren: () => import('./pages/friends/friends.module').then( m => m.FriendsPageModule),
    canActivate: [AuthGuardService] 

  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule),
    canActivate: [AuthGuardService] 

  },
  {
    path: 'start-new-plant',
    loadChildren: () => import('./pages/start-new-plant/start-new-plant.module').then( m => m.StartNewPlantPageModule),
    canActivate: [AuthGuardService] 

  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService],
    canDeactivate: [CanDeactivateGuard],

  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
