import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { AppointmentsComponent } from './appointments/appointments.component';

import { HeaderCommonDoctorsComponent } from './header-common-doctors/header-common-doctors.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { DoctorWidgetComponent } from './home/doctor-widget/doctor-widget.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientDashboardHeaderComponent } from './patient-dashboard-header/patient-dashboard-header.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientPortalSidebarComponent } from './patient-portal-sidebar/patient-portal-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    // PatientAppointmentComponent,
    DoctorDashboardComponent,
    LandingPageComponent,
    AppointmentsComponent,
    HeaderCommonDoctorsComponent,
    HeaderComponent,
    HomeBannerComponent,
    DoctorWidgetComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PatientDashboardComponent,
    PatientDashboardHeaderComponent,
    PatientProfileComponent,
    PatientPortalSidebarComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   CommonModule,
   HttpClientModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
