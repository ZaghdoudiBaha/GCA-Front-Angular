import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList : User[] = [];

  constructor(private http : HttpClient) {}

  loadUsers(): Observable<User[]>{
     return this.http.get<any>("http://localhost:8080/api/user/list");
  }

  saveUser(user:User){
      return this.http.post("http://localhost:8080/api/user/addUser", user); 
     // map permet de faire un traitement à l'objet resp aprés le subscribe
    
  }

  deleteUser(id : number){
    return this.http.delete("http://localhost:8080/api/user/deleteUser/"+String(id));
  }

  getUserById(id: number){
    return this.http.get<User>("http://localhost:8080/api/user/findUser/" +String(id));
  }


}
