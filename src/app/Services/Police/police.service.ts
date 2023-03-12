import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Police } from 'src/app/modele/police';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PoliceService {
  private urlServeurApi = environment.urlServiceApi;

  constructor(private http:HttpClient) { }

  public getPolice():Observable<Police[]>{ 
    return this.http.get<Police[]>(this.urlServeurApi+"/listePolice");

    }



    
  public createPolice(police: Police){


    return this.http.post(this.urlServeurApi+"/ajoutPolice",police);
  }

  public UpdatePolice(police: Police){


    return this.http.put(this.urlServeurApi+"/updatePolice",police);
  }

  public getfirstPolice(id: number){

    return this.http.get(this.urlServeurApi+"/afficherPolice/"+id);
  }


  public deletfirstPolice(id: number){


    return this.http.delete(this.urlServeurApi+"/deletePolice/"+id);
  }
}
