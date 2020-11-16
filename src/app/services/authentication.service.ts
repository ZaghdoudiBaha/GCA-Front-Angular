import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private host :string = "http://localhost:8080";
  private jwtToken :string;
  private roles : Array<any> = [];

  constructor(private http : HttpClient){}


  login(user){
    return this.http.post(this.host+"/login", user, {observe:'response'});
  }

 saveToken(jwt : string){
   this.jwtToken = jwt;
   localStorage.setItem('token',jwt);
   let jwtHelper = new JwtHelperService();
   this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
 }

 loadToken(){ 
   this.jwtToken = localStorage.getItem('token');
   return this.jwtToken;
 }

 logout(){
   localStorage.removeItem('token');
   this.jwtToken = "";
   this.roles =[];
 }

 isAdmin(){
   for (let r of this.roles){
     if (r.authority == 'ADMIN') return true;
   }
   return false;
 }

 isDirecteur(){
    for (let r of this.roles){
      if (r.authority == 'DIRECTEUR') return true;
    }
    return false;
  }

}
