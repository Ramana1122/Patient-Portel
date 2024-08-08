import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-common-doctors',
  templateUrl: './header-common-doctors.component.html',
  styleUrls: ['./header-common-doctors.component.css']
})
export class HeaderCommonDoctorsComponent {
  constructor(private router: Router) { }

  
  onDashboardClick(): void {
    // Perform any custom logic here if needed
    console.log('Navigating to Doctor Dashboard');
    
    // Navigate to the Doctor Dashboard page
    this.router.navigate(['/doctor-dashboard']);
  }

  onAppointmentsClick(): void {
    // Perform any custom logic here if needed
    console.log('Navigating to Appointments');
    
    // Navigate to the Appointments page
    this.router.navigate(['/appointments']);
  }
}
