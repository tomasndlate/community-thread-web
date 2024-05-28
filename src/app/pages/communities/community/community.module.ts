import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommunityRoutes } from './community.routes';
import { CommunityOverviewComponent } from './community-overview/community-overview.component';
import { CommunityThreadsComponent } from './community-threads/community-threads.component';
import { CommunityMembersComponent } from './community-members/community-members.component';
import { CommunitySettingsComponent } from './community-settings/community-settings.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommunityComponent } from './community.component';



@NgModule({
  declarations: [
    CommunityComponent,
    CommunityOverviewComponent,
    CommunityThreadsComponent,
    CommunityMembersComponent,
    CommunitySettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CommunityRoutes)
  ]
})
export class CommunityModule { }
