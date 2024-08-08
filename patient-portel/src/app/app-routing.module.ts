import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';

const routes: Routes = [
  
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'doctor-dashboard', component: DoctorDashboardComponent },
  { path: 'appointments', component: AppointmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
