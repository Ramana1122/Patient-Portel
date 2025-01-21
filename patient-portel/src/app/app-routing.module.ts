import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ChatComponent } from './chat/chat.component';
import { BookingComponent } from './booking/booking.component';
import { SearchDoctorPatientviewComponent } from './search-doctor-patientview/search-doctor-patientview.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';

const routes: Routes = [
  
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  {path:'Landingpage',component:LandingPageComponent },
  { path: 'doctor-dashboard', component: DoctorDashboardComponent },
  { path: 'appointments', component: AppointmentsComponent },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"patient",component:PatientDashboardComponent},
  {path:"profile",component:PatientProfileComponent},
  {path:"favourites",component:FavouritesComponent},
  {path:"patientchat",component:ChatComponent},
  {path:"booking",component:BookingComponent},
  {path:"searchdoctor",component:SearchDoctorPatientviewComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"doctorprofile",component:DoctorprofileComponent},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
