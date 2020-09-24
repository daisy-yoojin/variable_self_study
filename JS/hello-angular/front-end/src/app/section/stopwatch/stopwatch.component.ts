import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';
@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present: string = 'Welcome';
  routingCount
  commandTest

  constructor(
    private router: Router,
    private pageToggleService:  PageToggleService
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
