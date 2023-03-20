import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Souscription } from 'src/app/modele/souscription';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SouscriptionService {
  private urlServeurApi = environment.urlServiceApi;
  constructor(private http:HttpClient) { }




  public getSouscription():Observable<Souscription[]>{ 
    return this.http.get<Souscription[]>(this.urlServeurApi+"/listeSouscription");

   }

public createSouscription(souscription: Souscription){


  return this.http.post(this.urlServeurApi+"/ajoutSouscription",souscription);
}

public UpdateSouscription(id:number,souscription: Souscription){


  return this.http.put(`${this.urlServeurApi+"/updateSouscription"}/${id}`,souscription);
}

public getfirstSouscription(id: number){

  return this.http.get(this.urlServeurApi+"/afficherSouscription/"+id);
}


public deletfirstSouscription(id: number){


  return this.http.delete(this.urlServeurApi+"/deleteSouscription/"+id);
}
}
