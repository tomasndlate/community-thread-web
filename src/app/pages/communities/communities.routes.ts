import { Routes } from "@angular/router";
import { CommunitiesComponent } from "./communities.component";

export const CommunitiesRoutes: Routes = [
  {
    path: '',
    component: CommunitiesComponent
  },
  {
    path: ':communityNameId',
    loadChildren: () => import('./community/community.module').then(module => module.CommunityModule)
  },
]
