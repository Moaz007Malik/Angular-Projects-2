import { Component, OnInit } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';
import { RoomsList } from './rooms-list/rooms-list';
import { StaffListComponent } from './staff-list/staff-list';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf, NgStyle, RoomsList, StaffListComponent],
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.css'],
})
export class Rooms implements OnInit {
  HotelName = 'Hotel California';
  hideRooms = true;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  numberOfRooms = this.rooms.availableRooms;

  roomlist: RoomList[] = [];
  staff: Staff = {
    totalStaff: 50,
    availableStaff: 45,
    onLeaveStaff: 5,
  };

  staffList: StaffList[] = [];
  ngOnInit(): void {
    this.staffList = [
    { id: 1, name: 'John Doe', position: 'Manager', contact: '+1234567890' },
    { id: 2, name: 'Jane Smith', position: 'Receptionist', contact: '+0987654321' },
    { id: 3, name: 'Alice Johnson', position: 'Housekeeping', contact: '+1122334455' },
    { id: 4, name: 'Bob Brown', position: 'Chef', contact: '+5566778899' },
    { id: 5, name: 'Charlie White', position: 'Security', contact: '+9988776655' },
    { id: 6, name: 'Diana Green', position: 'Concierge', contact: '+2233445566' },
    { id: 7, name: 'Ethan Blue', position: 'Maintenance', contact: '+3344556677' },
    ];
    this.roomlist = [
       {
      id: 1,
      roomType: 'Deluxe Suite',
      amenities: 'wifi, air conditioning, tv',
      price: 10000,
      photos:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('2023-10-01T14:00:00'),
      checkoutTime: new Date('2023-10-02T12:00:00'),
    },
    {
      id: 2,
      roomType: 'Standard Room',
      amenities: 'wifi, tv, air conditioning, windows',
      price: 12000,
      photos:
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('2023-10-01T14:00:00'),
      checkoutTime: new Date('2023-10-02T12:00:00'),
    },
    {
      id: 3,
      roomType: 'Private Suite',
      amenities: 'wifi, tv, laundry service, air conditioning, windows',
      price: 14000,
      photos:
        'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('2023-10-01T14:00:00'),
      checkoutTime: new Date('2023-10-02T12:00:00'),
    },
    {
      id: 4,
      roomType: 'Luxury Room',
      amenities: 'wifi, tv, air conditioning, windows, minibar',
      price: 20000,
      photos:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('2023-10-01T14:00:00'),
      checkoutTime: new Date('2023-10-02T12:00:00'),
    },
    {
      id: 5,
      roomType: 'Family Room',
      amenities: 'wifi, tv, air conditioning, windows, kitchen',
      price: 18000,
      photos:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('2023-10-01T14:00:00'),
      checkoutTime: new Date('2023-10-02T12:00:00'),
    },
    {
      id: 6,
      roomType: 'Business Suite',
      amenities: 'wifi, tv, air conditioning, windows, office desk',
      price: 22000,
      photos:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('2023-10-01T14:00:00'),
      checkoutTime: new Date('2023-10-02T12:00:00'),
    },
    ];
  }
}

export interface Room {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomList {
  id: number;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
}

export interface Staff {
  totalStaff: number;
  availableStaff: number;
  onLeaveStaff: number;
}

export interface StaffList {
  id: number;
  name: string;
  position: string;
  contact: string;
}
