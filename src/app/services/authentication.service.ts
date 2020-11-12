import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 private users = [{ login : 'admin', password : '1234', roles : ['ADMIN', 'USER', 'DIRECTEUR']},
                  { login : 'directeur', password : '1234', roles : ['USER', 'DIRECTEUR']},     
                  { login : 'user', password : '1234', roles : ['USER']}
                  
];

  public isAuthenticated: boolean = false;
  public userAuthenticated;
  public token :string;
  
  constructor() { }

  public login (login: string, password: string) {
    let user;
    this.users.forEach(u => {
      if( u.login == login && u.password == password){
        user = u;
        this.token = btoa(JSON.stringify({login: u.login, roles: u.roles}));
      }
    });
    if(user){
      this.isAuthenticated = true;
      this.userAuthenticated =user;
    }else{
      this.isAuthenticated =false;
      this.userAuthenticated = undefined;
    }
  }

  public isAdmin() {
    if (this.userAuthenticated) {
      if (this.userAuthenticated.roles.indexOf('ADMIN')>-1)
      return true;
    }
    return false;
  }

  public isDirecteur() {
    if (this.userAuthenticated) {
      if (this.userAuthenticated.roles.indexOf('DIRECTEUR')>-1)
      return true; 
    }
    return false;
  }

  public saveAuthenticatedUser() {
    if (this.userAuthenticated) {
      localStorage.setItem('authToken',this.token);
    }
  }

  public loadAuthUserFromLocalStorage(){
    let token = localStorage.getItem('authToken');
    if(token){
      let user = JSON.parse(atob(token));
      console.log(user);
      this.userAuthenticated = user;
 
      this.isAuthenticated = true;
      this.token = token;
    }
    
  }

  public removeTokenFromLocalStorage(){
    localStorage.removeItem('authToken');
    this.isAuthenticated = false;
    this.token = undefined;
    this.userAuthenticated = undefined;
  }





}
