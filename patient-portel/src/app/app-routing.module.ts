import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';

const routes: Routes = [
  
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  {path:'Landingpage',component:LandingPageComponent },
  { path: 'doctor-dashboard', component: DoctorDashboardComponent },
  { path: 'appointments', component: AppointmentsComponent },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"patient",component:PatientDashboardComponent},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
