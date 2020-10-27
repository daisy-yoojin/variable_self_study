import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import {WelcomeComponent} from './welcome/welcome.component';
import {Error404Component} from './error404/error404.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
