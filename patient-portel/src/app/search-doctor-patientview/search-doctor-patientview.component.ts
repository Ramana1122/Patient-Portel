import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-doctor-patientview',
  templateUrl: './search-doctor-patientview.component.html',
  styleUrls: ['./search-doctor-patientview.component.css']
})
export class SearchDoctorPatientviewComponent {
    constructor(private router: Router) {}

  onCheckout(){
  
      this.router.navigate(['/checkout']);
    
  }

  onBookingClick(): void {
  
    this.router.navigate(['/booking']);
  }

  onProfileview(){
    this.router.navigate(['/doctorprofile']);
  }
}
