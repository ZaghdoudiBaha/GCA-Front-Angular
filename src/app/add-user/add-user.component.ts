import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';
import { DialogService } from '../services/dialog.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  etat: boolean=false;
  user: User ; 
  edit_mode: string;
  id: number;
  editValue = new User (-1,'','','','','','',false,null,null,null);



  @ViewChild('formulaire') formulaire : NgForm;
  
  constructor(private userService: UserService,
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
      this.userService.getUserById(this.id).subscribe (
        user => {
          this.editValue = user;
          console.log(this.editValue); 
        },
        error => {
          console.log(error);
          
        }
      )
    }
  }

  saveUser(){
    this.user = this.formulaire.form.value;
    this.user.accepted = this.etat;
    if(this.edit_mode == 'modifier'){
      this.user.id = this.id;
    }
      this.userService.saveUser(this.user).subscribe (
        response => {
          const link = ['home/user']
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
    /* this.userService.deleteUser(this.id).subscribe(
      response =>{
        const link = ['home/user']
        this.router.navigate (link);
        console.log(response);
      }); */

      this.dialog.openConfirmDialog('Vous êtes sure de supprimer cet utilisateur ?')
      .afterClosed().subscribe(res =>{
        if(res){
          this.userService.deleteUser(this.id).subscribe(
            response =>{
            const link = ['home/user']
            this.router.navigate (link);
            console.log(response);
          });
        }
      });
  }

 
}
