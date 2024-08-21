import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name: string = ''; // Initialize properties
  mobileNumber: string = '';
  password: string = '';
  
  showDoctorRegister = false; // Tracks whether to show the Doctor Register section

  // Method to toggle the registration section
  toggleRegister() {
    this.showDoctorRegister = !this.showDoctorRegister;
  }

  // Handle form submission
  onSubmit() {
    // Handle the form submission logic here
  }

}
