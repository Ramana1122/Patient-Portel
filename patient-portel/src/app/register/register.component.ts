// register.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  showDoctorRegister = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  toggleRegister() {
    this.showDoctorRegister = !this.showDoctorRegister;
  }

  onSignup(): void {
    if (this.registerForm.valid) {
      this.loginService.signpost(this.registerForm.value).subscribe(
        response => {
          console.log('Signup successful');
          this.registerForm.reset(); // Clear the form
        },
        error => {
          console.error('Signup failed');
        }
      );
    }
  }

}
