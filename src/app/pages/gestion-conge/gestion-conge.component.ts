import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from 'src/app/model/conge.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CongeService } from 'src/app/services/conge.service';

@Component({
  selector: 'app-gestion-conge',
  templateUrl: './gestion-conge.component.html',
  styleUrls: ['./gestion-conge.component.css']
})
export class GestionCongeComponent implements OnInit {


congeList : Conge[];
isAuth : boolean;


  constructor(private congeService : CongeService,
              private router: Router, 
              private authService : AuthenticationService) {}

  ngOnInit(): void {
    this.congeService.loadConges().subscribe(resp =>{
      this.congeList = resp;
    },err =>{
      console.log(err);
    });
    this.isAuth = this.authService.isAuthenticated;
    if (this.isAuth == false){
      this.router.navigate(['/home/login'])
    }
  }

  toAddConge(){
    this.router.navigate(['/home/addConge'],{queryParams:{'edit_mode':'ajouter'}})
  }

  editConge(id:number) {
    this.router.navigate(['/home/addConge', id] ,{queryParams:{'edit_mode':'modifier'}})
  }

}
