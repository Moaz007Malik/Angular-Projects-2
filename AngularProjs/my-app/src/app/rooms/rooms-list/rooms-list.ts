import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RoomList } from '../rooms'; // Update path if needed

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './rooms-list.html',
  styleUrls: ['./rooms-list.css'],
})
export class RoomsList {
  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnInit():void {}
}
