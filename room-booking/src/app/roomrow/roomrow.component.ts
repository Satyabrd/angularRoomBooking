import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roomrow',
  templateUrl: './roomrow.component.html',
  styleUrls: ['./roomrow.component.css']
})
export class RoomrowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  finalval = 0
  textvalue = ""

  onClickAdd(){
    this.finalval = this.finalval + 1;
    //return this.finalval
  }

  onClickSubtract(){
    this.finalval = this.finalval - 1;
    if(this.finalval <= 0){
      this.finalval = 0
    }
    //return this.finalval
  }

  onInput(event: any){
    console.log(event)
    this.textvalue = event.target.value
  }
}
