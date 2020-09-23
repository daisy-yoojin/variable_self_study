import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'index',
    redirectTo: 'stopwatch',
    // pathMatch: 'prefix | full',
    pathMatch: 'full', // 정확한 path값이어야 redirect를 시킨다.

  },
  // {
  //   path: 'index',
  //   component: AppComponent
  // },

];
// https://domain.com/index

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
