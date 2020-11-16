import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { User } from '../model/user.model';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList : User[] = [];
  

  constructor(private http : HttpClient, 
              private authService : AuthenticationService) {}

  

  loadUsers(): Observable<User[]>{
     return this.http.get<any>("http://localhost:8080/api/user/list", {headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
  }

  saveUser(user:User){
    // on peut pas ajouter un tokzn lors de l'inscription car il n'existe pas encore
      return this.http.post("http://localhost:8080/api/user/addUser", user ,{observe: 'response'});
    
  }

  addRoleToUser(login : string, roleName : string){
    const userRole = {"login" : login, "roleName": roleName };
    
      return this.http.post("http://localhost:8080/api/user/addRoleToUser",userRole ,{headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
    
  }

  deleteUser(id : number){
    return this.http.delete("http://localhost:8080/api/user/deleteUser/"+String(id),{headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
  }

  getUserById(id: number){
    return this.http.get<User>("http://localhost:8080/api/user/findUser/" +String(id), {headers: new HttpHeaders({"Authorization": this.authService.loadToken()})} );
  }



}
