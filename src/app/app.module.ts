import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { SettingsComponent } from './component/settings/settings.component';
import { PagesComponent } from './component/pages/pages.component';
import { LeftSidebarComponent } from './component/left-sidebar/left-sidebar.component';
import { MainComponent } from './component/main/main.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectsComponent,
    SettingsComponent,
    PagesComponent,
    LeftSidebarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterOutlet,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
