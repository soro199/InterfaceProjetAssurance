import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Role } from 'src/app/modele/role';
import { Utilisateur } from 'src/app/modele/utilisateur';
import { RoleService } from 'src/app/Services/Role/role.service';

import { UtilisateurServiceService } from 'src/app/Services/Utisateurs/utilisateur-service.service';

@Component({
  selector: 'app-creation-utilisation',
  templateUrl: './creation-utilisation.component.html',
  styleUrls: ['./creation-utilisation.component.css']
})
export class CreationUtilisationComponent {

  role:any= [];

 
  title = 'InterfaceAssurance';

  user : Utilisateur = new Utilisateur();
  constructor(private UserService:UtilisateurServiceService, private RoleApi:RoleService, private route:Router){}

  ngOnInit(): void {

    this.getRole();

    
  }

save(){
this.UserService.createUtilisateur(this.user).subscribe(data=>{

  console.log(data);
  this.navigation();
},error=>console.log(error));


  }


  navigation(){

    this.route.navigate(['/listeUtilisateur']);
  }
  
onSubmit(){
  this.save();
  

}
    



//Role



getRole(){


  this.RoleApi.getRole().subscribe(

    (donnees:Role[])=>{
            console.log(donnees); 
      this.role= donnees; 
    },
    (error:HttpErrorResponse)=>{
      console.log(error.message);
    }
  );
}



    
    
  }
 




