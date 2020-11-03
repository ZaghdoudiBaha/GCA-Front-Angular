import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ProfilUtilisateurComponent } from './pages/profil-utilisateur/profil-utilisateur.component';
import { GestionAbsenceComponent } from './pages/gestion-absence/gestion-absence.component';
import { GestionCongeComponent } from './pages/gestion-conge/gestion-conge.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ReclamationComponent } from './pages/reclamation/reclamation.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashbordComponent,
    ProfilUtilisateurComponent,
    GestionAbsenceComponent,
    GestionCongeComponent,
    MessagesComponent,
    ReclamationComponent,
    AddUserComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
