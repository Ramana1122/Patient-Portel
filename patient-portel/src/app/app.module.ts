import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppointmentsComponent } from './appointments/appointments.component';

import { HeaderCommonDoctorsComponent } from './header-common-doctors/header-common-doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    // PatientAppointmentComponent,
    DoctorDashboardComponent,
    LandingPageComponent,
    AppointmentsComponent,
    HeaderCommonDoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
