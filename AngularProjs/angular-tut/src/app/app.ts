// import { NgIf } from '@angular/common';
// import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
// import { Home } from "./home/home";
import { Header } from './header/header';
// import { Counter } from "./counter/counter";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, Counter, FormsModule, NgIf, NgSwitchCase, NgSwitch, NgSwitchDefault],
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected title = 'Moaz Malik';
  // name="Test Name";

  // task = "";
  // taskList: {id: number, task: string}[] = [];

  // addTask(){
  //   this.taskList.push({id: this.taskList.length + 1, task: this.task});

  //   console.log(`Task added: ${this.task}`);
  //   this.task = "";
    
  // }

  // removeTask(id: number){
  //   this.taskList = this.taskList.filter((task) => task.id !== id);
  //   console.log(`Task removed with id: ${id}`);
  // }
  // show = true;

  // color = ""
  // changeColor(color: string) {
  //   this.color = color;
  // }

}