import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conge } from '../model/conge.model';


@Injectable({
  providedIn: 'root'
})
export class CongeService {

  private congeList : Conge[] = [];

  link="http://localhost:8080/api/conge"

  constructor(private http : HttpClient) {}

  loadConges(): Observable<Conge[]>{
     return this.http.get<any>(this.link+"/list");
  }

  saveConge(conge:Conge){
      return this.http.post(this.link+"/addConge", conge);     
  }

  deleteConge(id : number){
    return this.http.delete(this.link+"/deleteConge/"+String(id));
  }

  getCongeById(id: number){
    return this.http.get<Conge>(this.link+"/findConge/"+String(id));
  }


}
