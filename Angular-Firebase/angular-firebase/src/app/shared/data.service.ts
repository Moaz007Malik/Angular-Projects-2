import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { Student } from '../model/student';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  getAllStudents(): Observable<Student[]> {
    const studentsRef = collection(this.firestore, 'Students');
    return collectionData(studentsRef, { idField: 'id' }) as Observable<
      Student[]
    >;
  }

  addStudent(student: Student): Observable<void> {
    const studentsRef = collection(this.firestore, 'Students');
    return from(addDoc(studentsRef, student).then(() => {}));
  }

  deleteStudent(student: Student): Observable<void> {
    const studentDocRef = doc(this.firestore, 'Students', student.id);
    return from(deleteDoc(studentDocRef));
  }

  updateStudent(student: Student): Observable<void> {
    const studentDocRef = doc(this.firestore, `Students/${student.id}`);
    const { id, ...data } = student;
    return from(updateDoc(studentDocRef, data));
  }
}
