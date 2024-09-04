import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-portal-sidebar',
  templateUrl: './patient-portal-sidebar.component.html',
  styleUrls: ['./patient-portal-sidebar.component.css']
})
export class PatientPortalSidebarComponent {
  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
