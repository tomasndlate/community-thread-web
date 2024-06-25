import { Routes } from "@angular/router";
import { UnauthenticatedGuard } from "./guards/unauthenticated.guard";

export const AppRoutes: Routes = [
  {
    path: '',
    // Make sure to NOT import the Chat Module in the App Module - router url issue
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(module => module.AuthModule),
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'communities',
    loadChildren: () => import('./pages/communities/communities.module').then(module => module.CommunitiesModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  },
]
