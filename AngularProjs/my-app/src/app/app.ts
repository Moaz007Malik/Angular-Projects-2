import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Rooms, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.html',
  // template: `<h1 class="bg-blue-400 text-6xl">Hello World!</h1>
  // <p class="text-2xl">This is an inline template</p>`,
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-app';

  role = 'Admin';
}
