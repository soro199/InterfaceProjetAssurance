import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Police } from 'src/app/modele/police';
import { Souscription } from 'src/app/modele/souscription';
import { Utilisateur } from 'src/app/modele/utilisateur';
import { PoliceService } from 'src/app/Services/Police/police.service';
import { SouscriptionService } from 'src/app/Services/Souscription/souscription.service';
import { UtilisateurServiceService } from 'src/app/Services/Utisateurs/utilisateur-service.service';

@Component({
  selector: 'app-creation-souscription',
  templateUrl: './creation-souscription.component.html',
  styleUrls: ['./creation-souscription.component.css']
})
export class CreationSouscriptionComponent {
  user:any= [];
  police:any= [];
  souscriptionForm!: FormGroup;


  souscription: Souscription = new Souscription();
  constructor(private souscriptionService:SouscriptionService, private userS:UtilisateurServiceService, private policeS:PoliceService, private route:Router, private formBuilder:FormBuilder){}


  // 

  ngOnInit(): void {

    this.getUser();
    this.getPolice();
    this.initForm();

    
  }



  //User



  getUser(){

    this.userS.getUtilisateur().subscribe(

      (donnees:Utilisateur[])=>{
              console.log(donnees); 
        this.user= donnees; 
      },
      (error:HttpErrorResponse)=>{
        console.log(error.message);
      }
    );
}

//Police

getPolice(){

  this.policeS.getPolice().subscribe(

    (donnees:Police[])=>{
            console.log(donnees); 
      this.police= donnees; 
    },
    (error:HttpErrorResponse)=>{
      console.log(error.message);
    }
  );
}



initForm() {
  this.souscriptionForm = this.formBuilder.group(
    {
      date_souscription: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', [Validators.required]],
      description: ['', [Validators.required]],
      utilisateur: ['', [Validators.required]],
      police: ['', [Validators.required]],
    
    }
  );
} 




save(){
    
  this.souscriptionService.createSouscription(this.souscription).subscribe(data=>{

    console.log(data);
    this.navigation();
  },error=>console.log(error));


}


navigation(){

this.route.navigate(['/listeSouscription']);
}


onSubmit(){
  //this.save();

  
  this.souscription.dateDebut= this.souscriptionForm.get('dateDebut')?.value;
  this.souscription.dateFin= this.souscriptionForm.get('dateFin')?.value;
  this.souscription.date_souscription= this.souscriptionForm.get('date_souscription')?.value;
  this.souscription.description = this.souscriptionForm.get('description')?.value;
  this.souscription.police= new Police();
  this.souscription.police.id= this.souscriptionForm.get('police')?.value ;

  this.souscription.utilisateur= new Utilisateur();
  this.souscription.utilisateur.id= this.souscriptionForm.get('utilisateur')?.value ;

this.save();

//console.log(this.souscription);



}




}
