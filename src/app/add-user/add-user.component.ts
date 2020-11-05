import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  etat: boolean=false;
  user : User; 
  @ViewChild('formulaire') formulaire : NgForm;
  constructor() { }

  ngOnInit(): void {

  }

  addUser(){
    this.user = this.formulaire.form.value;
    this.user.accepted = this.etat;
    console.log(this.user);
     
  }
  changeStatus(status){
    this.etat = status;
  }

  onClear() {
    this.formulaire.reset();
  }

}
