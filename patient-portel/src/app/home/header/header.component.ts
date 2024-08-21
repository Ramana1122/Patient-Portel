import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../stylehome.css']
})

export class HeaderComponent {
  constructor(private router: Router) {}
  
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
