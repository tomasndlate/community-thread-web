import { Routes } from "@angular/router";
import { CommunityComponent } from "./community.component";
import { CommunityThreadsComponent } from "./community-threads/community-threads.component";
import { CommunityMembersComponent } from "./community-members/community-members.component";
import { CommunitySettingsComponent } from "./community-settings/community-settings.component";
import { CommunityOverviewComponent } from "./community-overview/community-overview.component";

export const CommunityRoutes: Routes = [
  {
    path: '',
    component: CommunityComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: CommunityOverviewComponent },
      { path: 'threads', component: CommunityThreadsComponent },
      { path: 'members', component: CommunityMembersComponent },
      { path: 'settings', component: CommunitySettingsComponent },
      { path: '**', redirectTo: '/' },
    ]
  }
]
