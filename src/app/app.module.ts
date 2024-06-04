import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppUiComponentsModule } from './components/app-ui-components/app-ui-components.module';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { NavProfileMenuComponent } from './components/nav-profile-menu/nav-profile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavMenuComponent,
    NavProfileMenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    AppUiComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
