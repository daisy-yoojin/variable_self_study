import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';
@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  //module에서 설정 혹은 component에서 설정가능하다. - singleton으로 
  providers:[
    PageToggleService
  ],
})
export class StopwatchComponent implements OnInit {

  present: string = 'Welcome';
  routingCount
  commandTest

  constructor(
    private router: Router,
    public pageToggleService:  PageToggleService
    ) { 
    
  }
  goClock(){
    // this.routingCount++;
    // this.router.navigateByUrl('clock');
    this.pageToggleService.goPage('/clock')
  }

  startTime($event){
    this.present = $event;
    console.log('섹션 컴포넌트가 받았다.');
    console.log($event)
  }

  ngOnInit(): void {
  }
}
