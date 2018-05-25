import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {Error404Component} from './core/error/error404/error404.component';
import { ProfileComponent } from './user/profile/profile.component';
import { StartpageComponent } from './dashboard/startpage/startpage.component';
import {AboutComponent} from './pages/about/about.component';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
      HeaderComponent,
      FooterComponent,
      Error404Component,
      ProfileComponent,
      StartpageComponent,
      AboutComponent,
      LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      MDBBootstrapModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule { }
