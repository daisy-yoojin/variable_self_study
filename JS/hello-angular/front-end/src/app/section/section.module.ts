import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../section/section.component';
import {TimeDisplayComponent } from '../section/stopwatch/time-display/time-display.component';
import { ButtonsComponent } from '../section/stopwatch/buttons/buttons.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';

const routes: Routes =[
  {
    path: 'stopwatch',
    component: StopwatchComponent,

  },
  {
    path: 'clock',
    component: ClockComponent,

  }
]

@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent,
    // TimeDisplayComponent,
    // ButtonsComponent,
  ],
  exports:[
    SectionComponent,
    RouterModule,
  ],
  imports: [
    CommonModule,
    StopwatchModule,
    RouterModule.forChild(routes)
  ]
})
export class SectionModule { }
