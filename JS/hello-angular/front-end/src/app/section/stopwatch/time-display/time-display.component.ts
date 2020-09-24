import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {
  @Input() inputData: string

  // timeText: string = " 00 : 00 . 00 "
  min: number = 0
  sec: number = 0
  ms: number = 0

  timeInterval;

  constructor() { 
    console.log(this.inputData);
    // setInterval(()=>{
    //   this.text++;

    // },1000)
  }

  timeStart(){
    // start 2번 이상눌리면 setInterval의 객체가 stop시 1개만 clear되므로 객체를 1개만 생성하기위해 Stop을 걸어둔다
    this.timeStop(); 
    this.timeInterval = setInterval(()=>{
      this.ms++;
    },10);
    
  }
  timeStop(){
    clearInterval(this.timeInterval);
  }
  timeReset(){
    this.timeStop();
    this.ms = 0;

  }

  // ngOnChanges(changes: SimpleChanges){
  //   console.log(changes);
  //   for(let propName in changes){
  //     if(propName == 'inputData'){
  //       switch (changes[propName].currentValue) {
  //         case 'start':
  //           this.timeStart();
  //           break;
  //         case 'stop':
  //           this.timeStop();
  //           break;
  //         case 'reset':
  //           this.timeReset();
  //           break;
  //       }// end of switch
  //     }// end of if
  //   }// end of for
  // }

  ngOnInit(): void {

  }

}
