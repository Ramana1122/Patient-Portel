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
import { FormsModule } from '@angular/forms';


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
    RegisterComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
