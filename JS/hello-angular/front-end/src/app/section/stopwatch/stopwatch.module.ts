import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from "./time-display/time-display.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { StopwatchComponent } from './stopwatch.component';
import { RouterModule } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@NgModule({
  declarations: [
    TimeDisplayComponent,
    ButtonsComponent,
    StopwatchComponent,

  ],
  exports:[
    StopwatchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[ // injectable한 객체들이 들어올수 있다.
    // PageToggleService

  ]
})
export class StopwatchModule { }
