import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { interval } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  timeString

  constructor(
    private router: Router

  ) { 
    setInterval(()=>{

    },1000)
    // interval(1000).pipe(map(()=>{
    //   return moment().format('YYY-MM-DD MM:mm:ss');
    // }))
    // .subscribe(data=>{
    //   this.timeString = data;
    // });

  }
  goStopWatch(){
    // routingCount;
    this.router.navigateByUrl('/stopwatch');
  }
  // method 호출은 사용하지 않는걸로
  getCurrentTime(){
    let result = moment().format('YYY-MM-DD MM:mm:ss');
    return result;
  }


  ngOnInit(): void {
  }

}
