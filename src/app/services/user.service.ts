import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private userList : User[];
  link = "http://localhost:8080/api/user/list";

  constructor(private http : HttpClient) {}

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.link);
  }


}
