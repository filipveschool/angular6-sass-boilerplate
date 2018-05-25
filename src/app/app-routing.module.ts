import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AppConfig} from './config/app.config';
import {Error404Component} from './core/error/error404/error404.component';
import {AboutComponent} from './pages/about/about.component';
import {StartpageComponent} from './dashboard/startpage/startpage.component';

const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'}, // will go to homepage
    {path: '', component: HomeComponent, data: {title: 'Home'}}, // will also go to homepage
    {path: AppConfig.routes.error404, component: Error404Component},
    {path: '**', redirectTo: '/' + AppConfig.routes.error404},
    {path: 'about', component: AboutComponent},
    {path: 'dashboard', component: StartpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
