// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.post(this.loginForm.value).subscribe(
        response => {
          // Handle successful login, e.g., store token and redirect
          console.log('Login successful');
          this.router.navigate(['/doctor-dashboard']); // Redirect to a different route after successful login
        },
        error => {
          // Handle login error, e.g., show error message
          console.error('Login failed', error);
        }
      );
    }
  }
}
