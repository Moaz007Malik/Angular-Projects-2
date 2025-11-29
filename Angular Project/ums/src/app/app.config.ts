import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'university-management-sy-f92fc',
        appId: '1:494120455387:web:0d95a10c615a27af14d0fe',
        storageBucket: 'university-management-sy-f92fc.firebasestorage.app',
        apiKey: 'AIzaSyB_yh0HZHUJI68Ca0zQhder38KkfWsWe74',
        authDomain: 'university-management-sy-f92fc.firebaseapp.com',
        messagingSenderId: '494120455387',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
};

export const usersUrl = 'http://localhost:3000/users';
export const courseUrl = 'http://localhost:3000/courses';
