import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      res => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/dashboard']);

        if (res.user?.emailVerified == true) {
        this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/verify-email']);
        }
      },
      (err) => {
        console.log(err.message);
        this.router.navigate(['/login']);
      }
    );
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        alert('Registration successful');
        this.router.navigate(['/login']);
        this.sendEmailforVerification(res.user);
      },
      (err) => {
        console.log(err.message);
        this.router.navigate(['/register']);
      }
    );
  }

  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  forgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(
      () => {
        this.router.navigate(['/verify-email']);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  sendEmailforVerification(user: any) {
    user.sendEmailVerification().then(
      (res: any) => {
        this.router.navigate(['/verify-email']);
      },
      (err: any) => {
        console.log(err.message);
      }
    );
  }

  googleSignin(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider()).then(res => {
      this.router.navigate(['/dashboard']);
      localStorage.setItem('token', JSON.stringify(res.user?.uid));
    }, err => {
      console.log(err.message);
    })
  }
}
