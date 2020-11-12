import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthenticationService ,
              private router : Router) { }

  ngOnInit(): void {
    this.authService.loadAuthUserFromLocalStorage();
  }

  public isAdmin() {
    return this.authService.isAdmin();
  }

  public isDirecteur() {
    return this.authService.isDirecteur();
  }

  logout(){
    this.authService.removeTokenFromLocalStorage();
    this.router.navigate(['/home/login']);
    
  }

}
