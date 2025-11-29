import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { FileuploadComponent } from './component/fileupload/fileupload.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'verify-email', component: VerifyEmailComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'file-upload', component: FileuploadComponent},

    {path: '**', redirectTo: 'login', pathMatch: 'full'},
];
