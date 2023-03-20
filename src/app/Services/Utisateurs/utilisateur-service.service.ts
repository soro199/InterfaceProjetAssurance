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

  public createUtilisateur(user: Utilisateur){


    return this.http.post(this.urlServeurApi+"/ajout/utilisateur",user);
  }

  public UpdateUtilisateur(id:number,user: Utilisateur){


    return this.http.put(`${this.urlServeurApi+"/updateUtilisateur"}/${id}`,user);
  }

  public getfirstUtilisateur(id: number){

    return this.http.get(this.urlServeurApi+"/afficherUtilisateur/"+id);
  }


  public deletfirstUtilisateur(id: number){


    return this.http.delete(this.urlServeurApi+"/deleteUtilisateur/"+id);
  }

}
