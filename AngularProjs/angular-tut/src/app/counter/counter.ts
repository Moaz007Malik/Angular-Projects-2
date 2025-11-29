import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  count = 0;
  handleIncrement(){
    this.count++;
  }
  handleDecrement(){
    if (this.count > 0) {
      this.count--;
    } else {
      this.count = 0;
    }
  }
  handleReset(){
    this.count = 0;
  }

  // handleCounter(val: string){
  //   if (val == 'increment'){
  //     this.count++;
  //   } else if (val == 'decrement'){
  //     this.count--;
  //   } else {
  //     this.count = 0;
  //   }
  // }
}
