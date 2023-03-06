import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Utilisateur } from './modele/utilisateur';
import { UtilisateurServiceService } from './Services/Utisateurs/utilisateur-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InterfaceAssurance';


  user:any= [];

  constructor (private UserApi:UtilisateurServiceService){}

  getUSer(){


    this.UserApi.getUtilisateur().subscribe(


      (donnees:Utilisateur[])=>{
              console.log(donnees); 
        this.user= donnees; 
      },
      (error:HttpErrorResponse)=>{
        console.log(error.message);
      }
    );
  }
  ngOnInit(): void{

    this.getUSer();


  }
}
