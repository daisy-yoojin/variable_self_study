import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present: string = 'Welcome';
  commandTest
  constructor() { }

  startTime($event){
    this.present = $event;
    console.log('섹션 컴포넌트가 받았다.');
    console.log($event)
  }

  ngOnInit(): void {
  }
}
