export class User{
      id: number;
	  login: string;
	  password: string;
	  nom: string;
	  prenom: string;
	  mail: string;
	  tel: string;
	  accepted: boolean;

constructor (id: number, login: string, password: string, nom: string, 
             prenom: string, mail: string, tel: string,accepted: boolean) {

            this.id = id;
            this.login = login;
            this.password =password;
            this.nom =nom;
            this.prenom =prenom;
            this.mail =mail;
            this.tel =tel;
            this.accepted =accepted;



}
    

}