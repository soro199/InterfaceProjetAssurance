import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/modele/role';
import { RoleService } from 'src/app/Services/Role/role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent {

  title = 'InterfaceAssurance';


  role:any= [];

  constructor (private RoleApi:RoleService, private router:Router){}

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
  ngOnInit(): void{

    this.getRole();


  }

  deleteOneRole(id:number){

    this.RoleApi.deletfirstRole(id).subscribe(data=>{

      console.log(data);
      this.getRole();
    });

  }


  modifierRole(id:number){
   
    this.router.navigate(['/listeRole',id]);
  }


  getfirstRole(id:number){
    this.router.navigate(['/',id]);



  }

}
