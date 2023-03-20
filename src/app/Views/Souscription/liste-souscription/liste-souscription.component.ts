import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Souscription } from 'src/app/modele/souscription';
import { SouscriptionService } from 'src/app/Services/Souscription/souscription.service';

@Component({
  selector: 'app-liste-souscription',
  templateUrl: './liste-souscription.component.html',
  styleUrls: ['./liste-souscription.component.css']
})
export class ListeSouscriptionComponent {


  title = 'InterfaceAssurance';

  souscription:any= [];


  constructor (private souscriptionApi:SouscriptionService, private router:Router){}




  getSouscription(){


    this.souscriptionApi.getSouscription().subscribe(

      (donnees:Souscription[])=>{
              console.log(donnees); 
        this.souscription= donnees; 
      },
      (error:HttpErrorResponse)=>{
        console.log(error.message);
      }
    );
  }
  ngOnInit(): void{

    this.getSouscription();


  }



  deleteOneSouscription(id:number){

    this.souscriptionApi.deletfirstSouscription(id).subscribe(data=>{

      console.log(data);
      this.getSouscription();
    });

  }


  modifierSouscription(id:number){
   
    this.router.navigate(['modifierSouscription',id]);
  }



  getfirstUtilisateur(id:number){
    this.router.navigate(['detailUtilisateur',id]);



  }
 







}
