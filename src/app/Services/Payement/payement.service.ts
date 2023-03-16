import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paiement } from 'src/app/modele/paiement';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PayementService {

  private urlServeurApi = environment.urlServiceApi;

  constructor(private http:HttpClient) { }




  public getPaiement():Observable<Paiement[]>{ 
    return this.http.get<Paiement[]>(this.urlServeurApi+"/listePaiement");

  }

public createPaiement(paiement: Paiement){


  return this.http.post(this.urlServeurApi+"/ajoutPaiement",paiement);
}

public UpdatePaiement(paiement: Paiement){


  return this.http.put(this.urlServeurApi+"/updatePaiement/",paiement);
}

public getfirstPaiement(id: number){

  return this.http.get(this.urlServeurApi+"/afficherPaiement/"+id);
}


public deletfirstPaiement(id: number){


  return this.http.delete(this.urlServeurApi+"/deletePaiement/"+id);
}







}
