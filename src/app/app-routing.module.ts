import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AppConfig} from './config/app.config';
import {Error404Component} from './core/error/error404/error404.component';

const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {
        path: '', component: HomeComponent, data: {title: 'Home'}
    },
    {path: AppConfig.routes.error404, component: Error404Component},
    {path: '**', redirectTo: '/' + AppConfig.routes.error404},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
