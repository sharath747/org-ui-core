import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app.routes.module';
import { FormsModule } from '@angular/forms';
import { SampleModule } from 'org-ui-library';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component-layouts/header/header.component';
import { FooterComponent } from './component-layouts/footer/footer.component';
import { LeftMenuComponent } from './component-layouts/left-menu/left-menu.component';
import { NavMenuComponent } from './component-layouts/nav-menu/nav-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MediaDetectorComponent } from './component-layouts/media-detector/media-detector.component';
import { LiveNotificationComponent } from './component-layouts/live-notification/live-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    NavMenuComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    MediaDetectorComponent,
    LiveNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SampleModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
