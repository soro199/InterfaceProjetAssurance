import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/modele/role';
import { RoleService } from 'src/app/Services/Role/role.service';

@Component({
  selector: 'app-ajout-role',
  templateUrl: './ajout-role.component.html',
  styleUrls: ['./ajout-role.component.css']
})
export class AjoutRoleComponent {

  
  title = 'InterfaceAssurance';

  role : Role = new Role();
  constructor(private RoleService:RoleService, private route:Router){}

  ngOnInit(): void {


    
  }

save(){
this.RoleService.createRole(this.role).subscribe(data=>{

  console.log(data);
  this.route.navigate(['/listeRole']);
},error=>console.log(error));


  }


  navigation(){

    this.route.navigate(['/listeRole']);
  }
  
onSubmit(){
  this.save();

}

}
