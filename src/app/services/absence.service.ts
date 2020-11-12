import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Absence } from '../model/absence.model';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  private absenceList : Absence[] = []; 

  constructor(private httpClient : HttpClient) { }

  loadAbsences() : Observable<Absence[]> {
    return this.httpClient.get<any>("http://localhost:8080/api/absence/list");
  }

  saveAbsence(absence: Absence) {
    return this.httpClient.post("http://localhost:8080/api/absence/addAbsence", absence); 
  }

  deleteAbsence(id: number) {
    return this.httpClient.delete("http://localhost:8080/api/absence/deleteAbsence" + `/${id}`); 
  }

  getAbsenceById(id: number) {
    return this.httpClient.get<Absence>("http://localhost:8080/api/absence/findAbsence" + `/${id}`)
  }
}
