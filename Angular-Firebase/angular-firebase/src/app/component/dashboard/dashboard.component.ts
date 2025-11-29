import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Student } from '../../model/student';
import { DataService } from '../../shared/data.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  studentsList: Student[] = [];
  studentObj: Student = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
  };

  constructor(private data: DataService) {}

  ngOnInit() {
    this.getAllStudent();
  }

  getAllStudent() {
    this.data.getAllStudents().subscribe(
      (res: Student[]) => {
        this.studentsList = res;
      },
      (err) => {
        console.error('Error fetching students:', err);
      }
    );
  }

  resetForm() {
    this.studentObj = {
      id: '',
      first_name: '',
      last_name: '',
      email: '',
      mobile: '',
    };
  }

  addStudent() {
    const { first_name, last_name, email, mobile } = this.studentObj;
    if (!first_name || !last_name || !email || !mobile) {
      alert('Please enter all fields');
      return;
    }

    this.data.addStudent(this.studentObj).subscribe(
      () => {
        this.resetForm();
        this.getAllStudent();
      },
      (err) => {
        console.error('Error adding student:', err);
      }
    );
  }

  updateStudent(student: Student) {
    if (!student.id) return;
    this.data.updateStudent(student).subscribe(
      () => {
        this.getAllStudent();
      },
      (err) => {
        console.error('Error updating student:', err);
      }
    );
  }

  deleteStudent(student: Student) {
    if (
      window.confirm(
        `Are you sure you want to delete ${student.first_name} ${student.last_name}?`
      )
    ) {
      this.data.deleteStudent(student).subscribe(
        () => {
          this.getAllStudent();
        },
        (err) => {
          console.error('Error deleting student:', err);
        }
      );
    }
  }
}
