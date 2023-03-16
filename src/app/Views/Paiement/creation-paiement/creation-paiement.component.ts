import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Paiement } from 'src/app/modele/paiement';
import { Utilisateur } from 'src/app/modele/utilisateur';
import { CinetpayApiService } from 'src/app/Services/Cinetpay/cinetpay-api.service';
import { PayementService } from 'src/app/Services/Payement/payement.service';
import { UtilisateurServiceService } from 'src/app/Services/Utisateurs/utilisateur-service.service';

@Component({
  selector: 'app-creation-paiement',
  templateUrl: './creation-paiement.component.html',
  styleUrls: ['./creation-paiement.component.css']
})
export class CreationPaiementComponent {

  utilisateur:any= [];


  paiementForm!: FormGroup;


  paiement: Paiement= new Paiement();

  constructor(private paiementService:PayementService, private  userService:UtilisateurServiceService,private apiCinetpay:CinetpayApiService, private route:Router, private formBuilder:FormBuilder){}



  //Enregistrement

  save(){
  

              this.paiementService.createPaiement(this.paiement).subscribe(data=>{
              
                          console.log(data);
                          this.navigation();
                        },error=>console.log(error));
                        
                        
          }
    
    
          //route
      navigation(){
    
        this.route.navigate(['/listePaiement']);
      }



      //validation




      initForm() {
        this.paiementForm = this.formBuilder.group(
          {
            datePaiement: ['', Validators.required],
            montant: ['', Validators.required],
            modePaiement: ['', [Validators.required]],
            utilisateur: ['', [Validators.required]]
          }
        );
      }


      //Utilisateur
      getUtilisateur(){


        this.userService.getUtilisateur().subscribe(

          (donnees:Utilisateur[])=>{
                  console.log(donnees); 
            this.utilisateur= donnees; 
          },
          (error:HttpErrorResponse)=>{
            console.log(error.message);
          }
        );
      }




      //Actions




      onSubmit(){
        //this.save();
      
        
        this.paiement.datePaiement= this.paiementForm.get('datePaiement')?.value;
        this.paiement.modePaiement= this.paiementForm.get('modePaiement')?.value;
        this.paiement.montant= this.paiementForm.get('montant')?.value;

        this.paiement.utilisateur= new Utilisateur();
        this.paiement.utilisateur.id = this.paiementForm.get('utilisateur')?.value;

        //
        this.apiCinetpay.checkout(this.paiementForm.get('montant')?.value);
      
       this.save();

     //console.log(this.paiement);
      
       
      
      }








      ngOnInit(): void {

        this.getUtilisateur();
        this.initForm();
    
        
      }



}
