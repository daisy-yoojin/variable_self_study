import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Output() clickEvent = new EventEmitter();
  // @Output() clickEvent = new EventEmitter<string>(); // -> 타입 지정임

  count =0 ;
  constructor() { }

  // start($event){
  //   this.count++;

  // }
  executeButton(command){
    this.clickEvent.emit(command);
    console.log(command);
    // this.clickEvent.emit('string');
  }

  ngOnInit(): void {
  }

}
