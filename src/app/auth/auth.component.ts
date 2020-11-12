import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  login: string;
  password: string;

  constructor(private authService : AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }
  
  onLogin(loginForm: NgForm) {
    this.authService.login(loginForm.form.value.login, loginForm.form.value.password );
      if (this.authService.isAuthenticated) {
        this.authService.saveAuthenticatedUser();
        this.router.navigate(['/home/user'])
      }
  }

}



