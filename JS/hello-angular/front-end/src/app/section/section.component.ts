import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  present: string = 'Welcome';

  constructor() { }

  startTime($event){
    this.present = $event;
    console.log('섹션 컴포넌트가 받았다.');
    console.log($event)
  }

  ngOnInit(): void {
  }

}
