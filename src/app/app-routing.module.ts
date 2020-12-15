import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  { path: '',
  component: DashboardComponent},

  { path: 'dashboard',
  component: DashboardComponent},

  { path: 'login',
  component: LoginComponent},

  { path: 'profile',
  component: ProfileComponent},

  { path: 'register',
  component: RegisterComponent},

  { path: 'dashboard',
  component: DashboardComponent},

  { path: 'forgotpassword',
  component: ForgotpasswordComponent},

  { path: 'resetpassword',
  component: ResetpasswordComponent},
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
