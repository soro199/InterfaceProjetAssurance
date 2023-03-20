import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl,  FormGroup,  Validators } from '@angular/forms';
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
  title = 'InterfaceAssurance';
  role:any= [];


  userForm!: FormGroup;



 

 
 

  user : Utilisateur = new Utilisateur();
  constructor(private UserService:UtilisateurServiceService, private RoleApi:RoleService, private route:Router, private formBuilder:FormBuilder){}

  ngOnInit(): void {

    this.getRole();
    this.initForm();

    
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
      //this.save();

      
      this.user.nom = this.userForm.get('nom')?.value;
      this.user.profession = this.userForm.get('profession')?.value;
      this.user.prenoms = this.userForm.get('prenoms')?.value;
      this.user.tel = this.userForm.get('tel')?.value;
      this.user.email = this.userForm.get('email')?.value;
      this.user.mdp = this.userForm.get('mdp')?.value;
      this.user.dteNaissance = this.userForm.get('dteNaissance')?.value;
      this.user.lieuNaissance = this.userForm.get('lieuNaissance')?.value;
      this.user.situationMatrimoniale= this.userForm.get('situationMatrimoniale')?.value;

      
      this.user.role = new Role();
      this.user.role.id = this.userForm.get('role')?.value;

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





      initForm() {
              this.userForm = this.formBuilder.group(
                {
                  nom: ['', Validators.required],
                  prenoms: ['', Validators.required],
                  tel: ['', [Validators.required]],
                  email: ['', [Validators.required]],
                  mdp: ['', [Validators.required]],
                  dteNaissance: ['', [Validators.required]],
                  lieuNaissance: ['', [Validators.required]],
                  profession: ['', Validators.required],
                  situationMatrimoniale: ['', Validators.required],
                  role: ['', [Validators.required]]
                }
              );
            } 
          

            
        }
      




