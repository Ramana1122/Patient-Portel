import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
import { FavouritesComponent } from './favourites/favourites.component';
import { ChatComponent } from './chat/chat.component';
import { BookingComponent } from './booking/booking.component';
import { SearchDoctorPatientviewComponent } from './search-doctor-patientview/search-doctor-patientview.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    // PatientAppointmentComponent,
  
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
    PatientPortalSidebarComponent,
    FavouritesComponent,
    ChatComponent,
    BookingComponent,
    SearchDoctorPatientviewComponent,
    CheckoutComponent,
    DoctorprofileComponent,
    BookingSuccessComponent,
    InvoiceViewComponent    
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
