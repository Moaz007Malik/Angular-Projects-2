import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private firestore: AngularFirestore, private router: Router) {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

login(identifier: string, password: string, role: string, loginMethod: 'email' | 'userid') {
  const usersRef = this.firestore.collection('users');
  const field = loginMethod === 'email' ? 'USER_EMAIL' : 'USER_ID';

  usersRef.ref
    .where(field, '==', identifier)
    .where('USER_PASSWORD', '==', password)
    .where('USER_TYPE', '==', role)
    .get()
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const user = { id: userDoc.id, ...(userDoc.data() as object) };

        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.routeByUserType(user);
      } else {
        alert('Invalid credentials.');
      }
    })
    .catch((error) => {
      console.error('Login error:', error);
      alert('Something went wrong. Try again later.');
    });
}


  private routeByUserType(user: any): void {
    switch (user.USER_TYPE) {
      case 'faculty':
        this.router.navigate(['/dashboard']);
        break;
      case 'student':
        this.router.navigate(['/student-profile', user.id]);
        break;
      case 'teacher':
        this.router.navigate(['/teacher-profile', user.id]);
        break;
      default:
        this.router.navigate(['/']);
    }
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }

  logout() {
    this.currentUserSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
