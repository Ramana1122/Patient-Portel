import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard-header',
  templateUrl: './patient-dashboard-header.component.html',
  styleUrls: ['./patient-dashboard-header.component.css']
})
export class PatientDashboardHeaderComponent {
  constructor(private router: Router) {}
  goToLandingpage(){
    this.router.navigate(['/Landingpage']);
  }

  onBookingClick(): void {
  
    this.router.navigate(['/booking']);
  }

  onDashboard(): void {
  
    this.router.navigate(['/patient']);
  }
  onsearchdoctor(): void {
  
    this.router.navigate(['/searchdoctor']);
  }

  onchat(){
    this.router.navigate(['/patientchat']);
  }

  onprofilesettings(){
    this.router.navigate(['/profile']);
  }

  onBookingsuccess(){
    this.router.navigate(['/bookingsuccess']);
  }
}
