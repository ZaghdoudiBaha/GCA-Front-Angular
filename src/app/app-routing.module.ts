import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { GestionAbsenceComponent } from './pages/gestion-absence/gestion-absence.component';
import { GestionCongeComponent } from './pages/gestion-conge/gestion-conge.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ProfilUtilisateurComponent } from './pages/profil-utilisateur/profil-utilisateur.component';
import { ReclamationComponent } from './pages/reclamation/reclamation.component';

const routes: Routes = [
  {path:'home', children:[
    {path:'user', component:ProfilUtilisateurComponent},
    {path:'addUser', component:AddUserComponent},
    {path:'absence', component:GestionAbsenceComponent},
    {path:'conge', component:GestionCongeComponent},
    {path:'message', component:MessagesComponent},
    {path:'reclamation', component:ReclamationComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
