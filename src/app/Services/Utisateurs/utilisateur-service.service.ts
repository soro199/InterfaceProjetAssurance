import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/app/modele/utilisateur';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {

  private urlServeurApi = environment.urlServiceApi;
  constructor(private http:HttpClient) {   }

    public getUtilisateur():Observable<Utilisateur[]>{ 
      return this.http.get<Utilisateur[]>(this.urlServeurApi+"/listeUtilisateur"); 


      
  




  }

}
