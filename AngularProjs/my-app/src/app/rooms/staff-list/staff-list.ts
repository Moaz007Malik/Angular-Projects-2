import { Component, Input } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { StaffList } from '../rooms'; // Update path if needed

@Component({
  selector: 'app-staff-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './staff-list.html',
  styleUrl: './staff-list.css'
})
export class StaffListComponent {
  @Input() staff: StaffList[] = [];
}
