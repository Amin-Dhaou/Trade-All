import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkWithHref} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    RouterLink,
    RouterLink,
    RouterLinkWithHref,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  navigateToForgetPassword() {
    this.router.navigate(['/forget-password']);
  }

}
