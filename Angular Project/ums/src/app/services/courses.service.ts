import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { firstValueFrom, Observable } from 'rxjs';
import { Courses } from '../interfaces/data';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private afs: AngularFirestore) {}

  getCourses() {
    return this.afs.collection('courses/').snapshotChanges();
  }

  getMyCourses(): Observable<Courses[]> {
    return this.afs.collection<Courses>('courses').valueChanges();
  }

  deleteCourses(id: string) {
    return this.afs.doc('courses/' + id).delete();
  }

  addCourses(user: any) {
    user.id = this.afs.createId();
    return this.afs.collection('courses/').add(user);
  }

  async addStudentAndUpdateUser(courseId: string, student: { studentId: string; studentName: string }) {
    const courseRef = this.afs.collection('courses').doc(courseId);
    const studentRef = this.afs.collection('users').doc(student.studentId);

    const courseSnap = await firstValueFrom(courseRef.get());
    const studentSnap = await firstValueFrom(studentRef.get());

    const courseData = courseSnap.data() as { COURSE_STUDENTS?: any[]; COURSE_NAME?: string };
    const studentData = studentSnap.data() as { COURSES?: any[] };

    if (!courseData || !studentData) {
      throw new Error('Course or student not found');
    }

    // 1. Update course side
    const currentStudents = courseData.COURSE_STUDENTS || [];
    const isAlreadyInCourse = currentStudents.some((s: any) => s.studentId === student.studentId);

    if (!isAlreadyInCourse) {
      currentStudents.push(student);
      await courseRef.update({ COURSE_STUDENTS: currentStudents });
    }

    // 2. Update user side
    const studentCourses = studentData.COURSES || [];
    const isCourseAlreadyInStudent = studentCourses.some((c: any) => c.id === courseId);

    if (!isCourseAlreadyInStudent) {
      studentCourses.push({
        id: courseId,
        name: courseData.COURSE_NAME,
      });

      await studentRef.update({ COURSES: studentCourses });
    }
  }

  addNewCourses(id: any) {
    return this.afs.collection('courses/').doc(id).set({});
  }

  getSingleCourse(courseId: string): Observable<any> {
    return this.afs
      .collection('courses')
      .doc(courseId)
      .valueChanges({ idField: 'id' });
  }

  updateCourses(course: any) {
    return this.afs.collection('courses').doc(course.id).update(course);
  }
}
