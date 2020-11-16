import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../services/dialog.service';
import { Conge } from '../model/conge.model';
import { CongeService } from '../services/conge.service';
import { User } from '../model/user.model';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.css']
})
export class AddCongeComponent implements OnInit {

  etat: boolean=false;
  conge: Conge ; 
  edit_mode: string;
  id: number;
  user = new User(1,'user','user','Baha','Zaghdoudi','zagdoudi@gmail.com','98654321',true,null,null,null,null);
  editValue = new Conge(null,null,null,'',false,false,0,null);


  @ViewChild('formulaire') formulaire : NgForm;
  
  constructor(private congeService: CongeService,
              private router: Router,
              private route : ActivatedRoute,
              private dialog : DialogService,
               ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(qp =>{
      this.edit_mode=qp['edit_mode'];
      console.log(this.editValue);
    });

    if(this.edit_mode == "modifier"){
      this.route.params.subscribe(params =>{
        this.id= params['id']
        });
      this.congeService.getCongeById(this.id).subscribe (
        conge => {
          this.editValue = conge;
        },
        error => {
          console.log(error);
          
        }
      )
    }
  }

  saveConge(){
    this.conge = this.formulaire.form.value;  
    console.log(this.conge)  
    /* Covert DatePicker to Date */
    const datedeb = this.toDate(this.formulaire.form.get('dateDebut').value);
    const dateF = this.toDate(this.formulaire.form.get('dateFin').value)
    this.conge.dateDebut = datedeb;
    this.conge.dateFin = dateF;

    this.conge.confirmation = this.etat;
    this.conge.user = this.user;

     if(this.edit_mode == 'modifier'){
        this.conge.id = this.id;
        this.congeService.getCongeById(this.id).subscribe (
          conge => {
            this.editValue = conge
            console.log(this.editValue); 
          },
          error => {
            console.log(error);
          }
        );
        this.conge = this.editValue;

      }
      this.congeService.saveConge(this.conge).subscribe (
        response => {
          const link = ['home/conge']
          this.router.navigate (link);
          console.log(response);
        },
        error=> {
         console.log(error);
        }
      )
   }
  changeStatus(status){
    this.etat = status;
  }

  onClear() {
    this.formulaire.reset();
  }

  onDelete(){

      this.dialog.openConfirmDialog('Vous êtes sure de supprimer ce congé ?')
      .afterClosed().subscribe(res =>{
        if(res){
          this.congeService.deleteConge(this.id).subscribe(
            response =>{
            this.router.navigate (['home/conge']);
            console.log(response);
          });
        }
      });
  }
 
  toDate(date : NgbDate): Date{
    return new Date(date.year,
                    date.month -1, 
                    date.day +1);
  }
}
