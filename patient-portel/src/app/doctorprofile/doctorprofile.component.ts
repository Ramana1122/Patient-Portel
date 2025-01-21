import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent {
  constructor(private router: Router) {}

  onBookingClick(): void {
  
    this.router.navigate(['/booking']);
  }
}
