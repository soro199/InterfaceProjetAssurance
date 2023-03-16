import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Paiement } from 'src/app/modele/paiement';
import { PayementService } from 'src/app/Services/Payement/payement.service';

@Component({
  selector: 'app-liste-paiement',
  templateUrl: './liste-paiement.component.html',
  styleUrls: ['./liste-paiement.component.css']
})
export class ListePaiementComponent {


  paiement:any = [];

  
  constructor (private paiementService:PayementService, private router:Router){}


    getPaiement(){

            this.paiementService.getPaiement().subscribe(

              (donne:Paiement[])=>{
                      console.log(donne); 
                this.paiement= donne; 
                
              },
              (error:HttpErrorResponse)=>{
                console.log(error.message);
              }
            );
      }

      
  ngOnInit(): void{

    this.getPaiement();
    

  }


      




  deleteOnePaiement(id:number){
    
  
    this.paiementService.deletfirstPaiement(id).subscribe(data=>{
      
      console.log(data);
      this.getPaiement();
    });

  }


  modifierPaiement(id:number){
  
   
    this.router.navigate(['/modifierPaiement',id]);
  }


  getfirstPaiement(id:number){
    this.router.navigate(['/detailPaiement',id]);



  }






}
