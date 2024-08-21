import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  goToRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
    // Handle the login logic here
  }
}