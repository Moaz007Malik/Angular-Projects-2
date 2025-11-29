import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard'; // adjust path as needed

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./routes/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [AuthGuard],
    data: { roles: ['faculty'] }
  },
  {
    path: '',
    loadComponent: () => import('./routes/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'add-user',
    loadComponent: () => import('./routes/admin/add-user/add-user.component').then(m => m.AddUserComponent),
    canActivate: [AuthGuard],
    data: { roles: ['faculty'] }
  },
  {
    path: 'add-faculty',
    loadComponent: () => import('./routes/admin/add-faculty/add-faculty.component').then(m => m.AddFacultyComponent),
    canActivate: [AuthGuard],
    data: { roles: ['faculty'] }
  },
  {
    path: 'courses',
    loadComponent: () => import('./routes/admin/courses/courses.component').then(m => m.CoursesComponent),
    canActivate: [AuthGuard],
    data: { roles: ['faculty'] }
  },
  {
    path: 'students',
    loadComponent: () => import('./routes/admin/students/students.component').then(m => m.StudentsComponent),
    canActivate: [AuthGuard],
    data: { roles: ['faculty'] }
  },
  {
    path: 'teachers',
    loadComponent: () => import('./routes/admin/teachers/teachers.component').then(m => m.TeachersComponent),
    canActivate: [AuthGuard],
    data: { roles: ['faculty'] }
  },
  {
    path: 'faculty',
    loadComponent: () => import('./routes/admin/faculty/faculty.component').then(m => m.FacultyComponent),
    canActivate: [AuthGuard],
    data: { roles: ['faculty'] }
  },
  {
    path: 'faculty-profile/:id',
    loadComponent: () => import('./routes/faculty-profile/faculty-profile.component').then(m => m.FacultyProfileComponent),
    canActivate: [AuthGuard],
    data: { roles: ['faculty'] }
  },
  {
    path: 'student-profile/:id',
    loadComponent: () => import('./routes/student-profile/student-profile.component').then(m => m.StudentProfileComponent),
    canActivate: [AuthGuard],
    data: { roles: ['student', 'faculty'] }
  },
  {
    path: 'teacher-profile/:id',
    loadComponent: () => import('./routes/teacher-profile/teacher-profile.component').then(m => m.TeacherProfileComponent),
    canActivate: [AuthGuard],
    data: { roles: ['teacher', 'faculty'] }
  },
  {
    path: 'user-profile/:id',
    loadComponent: () => import('./routes/user-profile/user-profile.component').then(m => m.UserProfileComponent),
    canActivate: [AuthGuard],
    data: { roles: ['faculty'] }
  },
  {
    path: 'add-course',
    loadComponent: () => import('./routes/admin/add-course/add-course.component').then(m => m.AddCourseComponent),
    canActivate: [AuthGuard],
    data: { roles: ['faculty'] }
  },
  {
    path: 'course-details/:id',
    loadComponent: () => import('./routes/course-details/course-details.component').then(m => m.CourseDetailsComponent),
    canActivate: [AuthGuard],
    data: { roles: ['faculty', 'student', 'teacher'] }
  },
  {
    path: 'search',
    loadComponent: () => import('./routes/search/search.component').then(m => m.SearchComponent),
    canActivate: [AuthGuard],
    data: { roles: ['faculty'] }
  }
];
