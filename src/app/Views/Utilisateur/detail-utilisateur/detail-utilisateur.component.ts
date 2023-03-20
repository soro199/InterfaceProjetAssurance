import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utilisateur } from 'src/app/modele/utilisateur';
import { UtilisateurServiceService } from 'src/app/Services/Utisateurs/utilisateur-service.service';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.css']
})
export class DetailUtilisateurComponent {


  id!:number;
  user!:Utilisateur;
  constructor(private route:ActivatedRoute,private userService:UtilisateurServiceService){}

ngOnInit():void{
  this.id = this.route.snapshot.params['id']
  this.user= new Utilisateur();
  this.userService.getfirstUtilisateur(this.id).subscribe(data=>{

  this.user=data;
});

  }

}
