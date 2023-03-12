import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/modele/utilisateur';
import { UtilisateurServiceService } from 'src/app/Services/Utisateurs/utilisateur-service.service';

@Component({
  selector: 'app-utilisateur-liste',
  templateUrl: './utilisateur-liste.component.html',
  styleUrls: ['./utilisateur-liste.component.css']
})
export class UtilisateurListeComponent {
  title = 'InterfaceAssurance';


  user:any= [];

  constructor (private UserApi:UtilisateurServiceService, private router:Router){}

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

  deleteOneUtilisateur(id:number){

    this.UserApi.deletfirstUtilisateur(id).subscribe(data=>{

      console.log(data);
      this.getUSer();
    });

  }


  modifierUtilisateur(id:number){
   
    this.router.navigate(['/modifierUtilisateur',id]);
  }


  getfirstUtilisateur(id:number){
    this.router.navigate(['/detailUtilisateur',id]);



  }



  

}
