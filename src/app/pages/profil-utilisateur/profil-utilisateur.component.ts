import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css']
})
export class ProfilUtilisateurComponent implements OnInit {
  userList : User[]
  constructor(private userService : UserService,private router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users =>{
        this.userList = users;   
        console.log(users);
               
      },
      error =>{
        alert("Problème")
      })
  }

  toAddUser(){

    this.router.navigate(['/home/addUser'] ,{relativeTo: this.route})
  }

}
