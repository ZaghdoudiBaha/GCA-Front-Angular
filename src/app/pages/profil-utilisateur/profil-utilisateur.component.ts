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
  userList : User[];
  color = 'red';

  constructor(private userService : UserService,
              private router: Router, 
              private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.userService.loadUsers().subscribe(resp =>{
      this.userList = resp;
    });
  }

  toAddUser(){

    this.router.navigate(['/home/addUser'],{queryParams:{'edit_mode':'ajouter'}})
  }

  editUser(id:number) {
    this.router.navigate(['/home/addUser', id] ,{queryParams:{'edit_mode':'modifier'}})
  }

}
