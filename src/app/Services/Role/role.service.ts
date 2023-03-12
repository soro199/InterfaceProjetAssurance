import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/modele/role';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private urlServeurApi = environment.urlServiceApi;

  constructor(private http:HttpClient) { }




  public getRole():Observable<Role[]>{ 
    return this.http.get<Role[]>(this.urlServeurApi+"/listeRole");



}
public createRole(role: Role){


  return this.http.post(this.urlServeurApi+"/ajoutRole",role);
}

public UpdateRole(role: Role){


  return this.http.put(this.urlServeurApi+"/updateRole/",role);
}

public getfirstRole(id: number){

  return this.http.get(this.urlServeurApi+"/afficherRole/"+id);
}


public deletfirstRole(id: number){


  return this.http.delete(this.urlServeurApi+"/deleteRole/"+id);
}




}
