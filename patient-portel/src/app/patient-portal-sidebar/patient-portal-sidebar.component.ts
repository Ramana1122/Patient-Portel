import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-portal-sidebar',
  templateUrl: './patient-portal-sidebar.component.html',
  styleUrls: ['./patient-portal-sidebar.component.css']
})
export class PatientPortalSidebarComponent {
  constructor(private router: Router,private cdr: ChangeDetectorRef) {}
  activePage: string = 'dashboard'; // Default active page

  setActivePage(page: string) {
    this.activePage = page;
  }

  goToProfile() {
    this.setActivePage('profile');
    this.router.navigate(['/profile']);
  }

 goToFavourites() {
    this.setActivePage('favourites'); // Set active class immediately
    this.cdr.detectChanges(); 
    this.router.navigate(['/favourites']); // Navigate to the route
}
goToDashboard(){

  this.router.navigate(['/patient']);
}

goToChat(){

  this.router.navigate(['/patientchat']);
}
}
