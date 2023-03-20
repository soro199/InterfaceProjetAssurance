import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import  swal  from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/modele/role';
import { Utilisateur } from 'src/app/modele/utilisateur';
import { RoleService } from 'src/app/Services/Role/role.service';
import { UtilisateurServiceService } from 'src/app/Services/Utisateurs/utilisateur-service.service';

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.css']
})
export class ModifierUtilisateurComponent {

  title = 'InterfaceAssurance';
  role:any= [];
  id!:number;


  userForm!: FormGroup;



  user : Utilisateur = new Utilisateur();

  constructor(private UserService:UtilisateurServiceService, private RoleApi:RoleService, private router:Router, private formBuilder:FormBuilder,private route:ActivatedRoute){}




  
  ngOnInit(): void {

    this.getRole();
     
    this.id= this.route.snapshot.params['id'] ;

    this.UserService.getfirstUtilisateur(this.id).subscribe(data=>{
    this.user=data;
    //console.log(this.user);

    }, error=>console.log(error));
    
    
  }



  


    
    onSubmit(){


      // console.log(this.user);


      

     this.UserService.UpdateUtilisateur(this.id,this.user).subscribe(data=>{
      
      this.router.navigate(['/listeUtilisateur']);
     },error => console.log(error))
          
      
    

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
